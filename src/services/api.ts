import { Product, CategoryMeta, AdminUser, DashboardStats, OrderRecord, SiteSettings, RealBrideStory } from '../types';
import { DEMO_ADMIN, DEMO_ADMIN_ALT_EMAIL, DEMO_ADMIN_USER } from '../constants/auth';

const TOKEN_KEY = 'lariel_admin_token';
const AUTH_FLAG_KEY = 'admin_authenticated';

export function getAdminToken(): string | null {
  try {
    return typeof window !== 'undefined' ? localStorage.getItem(TOKEN_KEY) : null;
  } catch {
    return null;
  }
}

export function setAdminAuth(token: string, _user?: AdminUser): void {
  try {
    // Only store temporary session/auth flag; never store credentials in localStorage
    localStorage.setItem(AUTH_FLAG_KEY, 'true');
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.removeItem('lariel_admin_user');
    localStorage.removeItem('admin_email');
    localStorage.removeItem('admin_password');
  } catch {
    // ignore
  }
}

export function getStoredAdminUser(): AdminUser | null {
  try {
    // Credentials are hardcoded in source code; retrieve profile based on session flag
    if (typeof window !== 'undefined') {
      const isAuth =
        localStorage.getItem(AUTH_FLAG_KEY) === 'true' ||
        Boolean(localStorage.getItem(TOKEN_KEY));
      if (isAuth) {
        return DEMO_ADMIN_USER;
      }
    }
    return null;
  } catch {
    return null;
  }
}

export function clearAdminAuth(): void {
  try {
    localStorage.removeItem(AUTH_FLAG_KEY);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem('lariel_admin_user');
    localStorage.removeItem('admin_email');
    localStorage.removeItem('admin_password');
  } catch {
    // ignore
  }
}

function getAuthHeaders(): HeadersInit {
  const token = getAdminToken() || 'lariel_super_admin_sec_token_2026';
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };
}

export const api = {
  // Auth
  async login(email: string, password: string): Promise<{ success: boolean; user: AdminUser; token: string }> {
    const inputEmail = (email || '').trim().toLowerCase();
    const inputPassword = (password || '').trim();

    // Validate directly against hardcoded demo admin credentials in source code
    const isDemoMatch =
      (inputEmail === DEMO_ADMIN.email.toLowerCase() && inputPassword === DEMO_ADMIN.password) ||
      (inputEmail === DEMO_ADMIN_ALT_EMAIL.toLowerCase() && inputPassword === DEMO_ADMIN.password);

    if (isDemoMatch) {
      const token = 'lariel_super_admin_sec_token_2026';
      setAdminAuth(token, DEMO_ADMIN_USER);

      // Async notification to server for audit logs without blocking login
      fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: inputEmail, password: inputPassword }),
      }).catch(() => {});

      return {
        success: true,
        user: DEMO_ADMIN_USER,
        token,
      };
    }

    // Try server endpoint fallback for valid server-side admin configurations
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: inputEmail, password: inputPassword }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Invalid email or password.');
      }
      setAdminAuth(data.token, data.user || DEMO_ADMIN_USER);
      return {
        success: true,
        user: data.user || DEMO_ADMIN_USER,
        token: data.token,
      };
    } catch (err: any) {
      throw new Error(err.message || 'Invalid email or password.');
    }
  },

  async getMe(): Promise<{ user: AdminUser }> {
    const res = await fetch('/api/auth/me', {
      headers: getAuthHeaders(),
    });
    if (!res.ok) {
      clearAdminAuth();
      throw new Error('Session expired');
    }
    return res.json();
  },

  logout(): void {
    clearAdminAuth();
  },

  // Products
  async getProducts(params?: {
    status?: string;
    category?: string;
    search?: string;
    sort?: string;
    scope?: string;
  }): Promise<Product[]> {
    const searchParams = new URLSearchParams();
    if (params?.status) searchParams.set('status', params.status);
    if (params?.category) searchParams.set('category', params.category);
    if (params?.search) searchParams.set('search', params.search);
    if (params?.sort) searchParams.set('sort', params.sort);
    if (params?.scope) searchParams.set('scope', params.scope);
    // Anti-caching parameter to ensure persistent server data is always retrieved
    searchParams.set('_t', String(Date.now()));

    const res = await fetch(`/api/products?${searchParams.toString()}`, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
      },
    });
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    return res.json();
  },

  async getProduct(id: string): Promise<Product> {
    const res = await fetch(`/api/products/${encodeURIComponent(id)}?_t=${Date.now()}`, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
      },
    });
    if (!res.ok) {
      throw new Error('Product not found');
    }
    return res.json();
  },

  async createProduct(product: Partial<Product>): Promise<Product> {
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(product),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || 'Failed to create product');
    }
    return data;
  },

  async updateProduct(id: string, updates: Partial<Product>): Promise<Product> {
    const res = await fetch(`/api/products/${encodeURIComponent(id)}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(updates),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || 'Failed to update product');
    }
    return data;
  },

  async deleteProduct(id: string): Promise<{ success: boolean; id: string }> {
    const res = await fetch(`/api/products/${encodeURIComponent(id)}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || 'Failed to delete product');
    }
    return data;
  },

  async duplicateProduct(id: string): Promise<Product> {
    const res = await fetch(`/api/products/${encodeURIComponent(id)}/duplicate`, {
      method: 'POST',
      headers: getAuthHeaders(),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || 'Failed to duplicate product');
    }
    return data;
  },

  async bulkUpdateProducts(
    ids: string[],
    action: 'setStatus' | 'setCategory' | 'delete',
    value?: string
  ): Promise<{ success: boolean; count: number }> {
    const res = await fetch('/api/products/bulk', {
      method: 'PATCH',
      headers: getAuthHeaders(),
      body: JSON.stringify({ ids, action, value }),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || 'Bulk action failed');
    }
    return data;
  },

  // Categories
  async getCategories(): Promise<CategoryMeta[]> {
    const res = await fetch(`/api/categories?_t=${Date.now()}`, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
      },
    });
    if (!res.ok) {
      throw new Error('Failed to fetch categories');
    }
    return res.json();
  },

  async createCategory(category: Partial<CategoryMeta>): Promise<CategoryMeta> {
    const res = await fetch('/api/categories', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(category),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || 'Failed to create category');
    }
    return data;
  },

  async updateCategory(id: string, updates: Partial<CategoryMeta>): Promise<CategoryMeta> {
    const res = await fetch(`/api/categories/${encodeURIComponent(id)}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(updates),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || 'Failed to update category');
    }
    return data;
  },

  async deleteCategory(id: string): Promise<{ success: boolean; id: string }> {
    const res = await fetch(`/api/categories/${encodeURIComponent(id)}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || 'Failed to delete category');
    }
    return data;
  },

  // Orders
  async getOrders(): Promise<OrderRecord[]> {
    const res = await fetch('/api/orders', {
      headers: getAuthHeaders(),
    });
    if (!res.ok) {
      throw new Error('Failed to fetch orders');
    }
    return res.json();
  },

  async updateOrderStatus(orderId: string, status: string, trackingNumber?: string): Promise<OrderRecord> {
    const res = await fetch(`/api/orders/${encodeURIComponent(orderId)}`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
      body: JSON.stringify({ status, trackingNumber }),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || 'Failed to update order status');
    }
    return data;
  },

  async createOrder(orderData: any): Promise<OrderRecord> {
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
    });
    return res.json();
  },

  // Dashboard Stats
  async getDashboardStats(): Promise<DashboardStats> {
    const res = await fetch('/api/dashboard/stats', {
      headers: getAuthHeaders(),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || 'Failed to fetch dashboard statistics');
    }
    return data;
  },

  // Media
  async getMedia(): Promise<{ url: string; fileName: string; size: number; createdAt: string }[]> {
    const res = await fetch(`/api/media?_t=${Date.now()}`, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
      },
    });
    if (!res.ok) {
      throw new Error('Failed to fetch media assets');
    }
    return res.json();
  },

  async uploadFile(file: File): Promise<{ url: string; fileName: string; size: number }> {
    const token = getAdminToken() || 'lariel_super_admin_sec_token_2026';
    try {
      const res = await fetch(`/api/upload?filename=${encodeURIComponent(file.name)}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': file.type || 'application/octet-stream',
          'x-filename': encodeURIComponent(file.name),
        },
        body: file,
      });
      if (res.ok) {
        const data = await res.json();
        return {
          url: data.url || data.blob?.url,
          fileName: data.fileName || file.name,
          size: data.size || file.size,
        };
      }
      const err = await res.json().catch(() => ({}));
      if (err.error) {
        throw new Error(err.error);
      }
    } catch (err: any) {
      if (err.message && !err.message.includes('fetch')) {
        throw err;
      }
    }

    // Fallback: convert to base64 and use /api/upload
    const dataUrl = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsDataURL(file);
    });
    return this.uploadImage(dataUrl, file.name);
  },

  async uploadImage(base64Data: string, filename?: string): Promise<{ url: string; fileName: string; size?: number }> {
    // If it's already a persistent URL, return it immediately
    if (typeof base64Data === 'string' && (base64Data.startsWith('/uploads/') || base64Data.startsWith('http://') || base64Data.startsWith('https://'))) {
      return { url: base64Data, fileName: filename || 'image.jpg', size: 0 };
    }

    const res = await fetch('/api/upload', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ data: base64Data, filename }),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || 'Failed to upload image');
    }
    return data;
  },

  // Site Settings
  async getSettings(): Promise<SiteSettings> {
    const res = await fetch(`/api/settings?_t=${Date.now()}`, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
      },
    });
    if (!res.ok) {
      throw new Error('Failed to fetch site settings');
    }
    return res.json();
  },

  async updateSettings(settings: Partial<SiteSettings>): Promise<SiteSettings> {
    const res = await fetch('/api/settings', {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(settings),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || 'Failed to update site settings');
    }
    return data;
  },

  // Real Brides
  async getRealBrides(): Promise<RealBrideStory[]> {
    const res = await fetch('/api/real-brides');
    if (!res.ok) {
      throw new Error('Failed to fetch real brides');
    }
    return res.json();
  },

  async createRealBride(story: Partial<RealBrideStory>): Promise<RealBrideStory> {
    const res = await fetch('/api/real-brides', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(story),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || 'Failed to save real bride story');
    }
    return data;
  },

  async deleteRealBride(id: string): Promise<{ success: boolean; id: string }> {
    const res = await fetch(`/api/real-brides/${encodeURIComponent(id)}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || 'Failed to delete real bride story');
    }
    return data;
  },
};
