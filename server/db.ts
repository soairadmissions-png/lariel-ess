import fs from 'fs';
import path from 'path';

export interface DBProductColor {
  name: string;
  hex: string;
}

export interface DBProduct {
  id: string;
  name: string;
  slug: string;
  subtitle: string;
  priceUSD: number;
  compareAtPriceUSD?: number;
  category: 'bridal' | 'bridesmaids' | 'sets' | 'adire' | 'pyjamas' | 'accessories' | 'personalised' | 'junior' | 'new';
  style: 'Silk' | 'Tulle' | 'Lace' | 'Corset' | 'Embellished' | 'Custom';
  collectionName: string;
  description: string;
  details: string[];
  materials: string;
  sizingInfo: string;
  productionTime: string;
  shippingInfo: string;
  careInstructions: string;
  images: string[];
  colors: DBProductColor[];
  sizes: string[];
  reviewsCount: number;
  rating: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  crossSellIds: string[];
  badge?: string;
  setItems?: string[];
  status: 'published' | 'draft' | 'archived';
  stockQuantity: number;
  stockStatus: 'in_stock' | 'low_stock' | 'out_of_stock' | 'made_to_order';
  sku: string;
  createdAt: string;
  updatedAt: string;
}

export interface DBCategory {
  id: string;
  name: string;
  slug: string;
  subtitle: string;
  description: string;
  heroImage: string;
  badge?: string;
  isVisible: boolean;
  order: number;
}

export interface DBOrder {
  orderId: string;
  date: string;
  status: 'Processing' | 'In Production' | 'Shipped' | 'Delivered';
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: {
    name: string;
    city: string;
    country: string;
    street: string;
  };
  items: {
    productName: string;
    color: string;
    size: string;
    quantity: number;
    priceFormatted: string;
    priceUSD: number;
  }[];
  totalFormatted: string;
  totalUSD: number;
  trackingNumber: string;
}

export interface DBAdmin {
  id: string;
  name: string;
  email: string;
  role: 'Super Admin' | 'Product Manager' | 'Content Manager';
  avatar: string;
  token: string;
}

export interface DBActivityLog {
  id: string;
  action: string;
  adminName: string;
  timestamp: string;
}

export interface DBSiteSettings {
  homeHeroImage?: string;
  homeHeroTitle?: string;
  homeHeroSubtitle?: string;
  announcement?: string;
}

export interface DBRealBride {
  id: string;
  brideName: string;
  location: string;
  weddingDate: string;
  category: string;
  robeWorn: string;
  image: string;
  quote: string;
  photographerCredit?: string;
  createdAt?: string;
}

export interface DatabaseSchema {
  products: DBProduct[];
  categories: DBCategory[];
  orders: DBOrder[];
  admins: DBAdmin[];
  activityLogs: DBActivityLog[];
  settings?: DBSiteSettings;
  realBrides?: DBRealBride[];
}

const DB_PATH = path.join(process.cwd(), 'data', 'db.json');
const TMP_DB_PATH = path.join('/tmp', 'db.json');

let memoryDatabase: DatabaseSchema | null = null;
let isSyncingFromBlob = false;
let hasInitialSynced = false;

/**
 * Sync persistent database from Vercel Blob when deployed on Vercel
 */
export async function syncDatabaseFromRemote(): Promise<DatabaseSchema | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN || isSyncingFromBlob) return memoryDatabase;
  try {
    isSyncingFromBlob = true;
    const { list } = await import('@vercel/blob');
    const res = await list({
      prefix: 'database/db.json',
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });
    const blobItem = res.blobs.find((b) => b.pathname === 'database/db.json');
    if (blobItem && blobItem.url) {
      const response = await fetch(`${blobItem.url}?_t=${Date.now()}`, {
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate' },
      });
      if (response.ok) {
        const remoteData = await response.json();
        if (remoteData && Array.isArray(remoteData.products) && remoteData.products.length > 0) {
          memoryDatabase = remoteData;
          try {
            fs.writeFileSync(TMP_DB_PATH, JSON.stringify(remoteData, null, 2), 'utf8');
          } catch {}
          return memoryDatabase;
        }
      }
    }
  } catch (err) {
    console.warn('Could not sync remote database from Vercel Blob:', err);
  } finally {
    isSyncingFromBlob = false;
  }
  return memoryDatabase;
}

export async function getDatabaseAsync(): Promise<DatabaseSchema> {
  if (!hasInitialSynced && process.env.BLOB_READ_WRITE_TOKEN) {
    hasInitialSynced = true;
    await syncDatabaseFromRemote();
  }
  return getDatabase();
}

export function getDatabase(): DatabaseSchema {
  if (memoryDatabase) {
    return memoryDatabase;
  }

  // 1. Try instance /tmp/db.json
  try {
    if (fs.existsSync(TMP_DB_PATH)) {
      const data = fs.readFileSync(TMP_DB_PATH, 'utf8');
      memoryDatabase = JSON.parse(data);
      return memoryDatabase!;
    }
  } catch {}

  // 2. Try repo bundled data/db.json
  try {
    if (fs.existsSync(DB_PATH)) {
      const data = fs.readFileSync(DB_PATH, 'utf8');
      memoryDatabase = JSON.parse(data);
      return memoryDatabase!;
    }
  } catch (err) {
    console.error('Error reading bundled database:', err);
  }

  return {
    products: [],
    categories: [],
    orders: [],
    admins: [],
    activityLogs: [],
  };
}

export async function saveDatabase(data: DatabaseSchema): Promise<void> {
  memoryDatabase = data;

  // 1. Safe local filesystem write (handles read-only Vercel serverless environment)
  let wroteSuccessfully = false;
  try {
    const dir = path.dirname(DB_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
    wroteSuccessfully = true;
  } catch (err) {
    // Expected on Vercel runtime where root filesystem is read-only EROFS
  }

  // Fallback to /tmp which is always writable on Vercel serverless instances
  if (!wroteSuccessfully) {
    try {
      fs.writeFileSync(TMP_DB_PATH, JSON.stringify(data, null, 2), 'utf8');
    } catch (tmpErr) {
      console.warn('Could not write to /tmp/db.json:', tmpErr);
    }
  }

  // 2. Persistent remote storage on Vercel Blob (persists across restarts and redeployments)
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      const { put } = await import('@vercel/blob');
      await put('database/db.json', JSON.stringify(data, null, 2), {
        access: 'public',
        addRandomSuffix: false,
        token: process.env.BLOB_READ_WRITE_TOKEN,
      });
    } catch (blobErr) {
      console.warn('Failed to write database to Vercel Blob:', blobErr);
    }
  }
}

export function logActivity(action: string, adminName: string = 'Admin'): void {
  const db = getDatabase();
  const newLog: DBActivityLog = {
    id: `log-${Date.now()}`,
    action,
    adminName,
    timestamp: new Date().toISOString(),
  };
  db.activityLogs = [newLog, ...(db.activityLogs || [])].slice(0, 50);
  saveDatabase(db).catch(() => {});
}
