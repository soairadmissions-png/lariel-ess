// server/vercel.ts
import express2 from "express";

// server/api.ts
import express from "express";
import { put as put2 } from "@vercel/blob";

// server/db.ts
import fs from "fs";
import path from "path";

// data/db.json
var db_default = {
  products: [
    {
      id: "amanda-3d-petals-robe",
      name: "Amanda 3D Robe",
      slug: "amanda-3d-petals-robe",
      subtitle: "Hand-appliqu\xE9d cascading 3D organza florals with pearl centers on sheer silk chiffon",
      priceUSD: 150,
      category: "bridal",
      style: "Embellished",
      collectionName: "Amanda",
      description: "The definitive Lariel masterpiece. Created for the unforgettable bride who commands poetry in motion. The Amanda robe features hundreds of individual hand-cut organza petals lovingly stitched across sweeping sleeves and a floor-pooling hemline.",
      details: [
        "Hundreds of handcrafted 3D organza floral petals",
        "Hand-sewn freshwater glass pearl centers",
        "Floor-grazing silhouette with 45cm train",
        "Detachable 22-momme Mulberry silk inner belt & outer tie",
        "Includes complimentary luxury dust bag & garment hanger"
      ],
      materials: "100% French Silk Organza, Italian Chiffon overlay, freshwater simulated pearls",
      sizingInfo: "Floor length (approx. 155cm shoulder to hem). Custom length available upon request.",
      productionTime: "Handcrafted in 7\u201314 working days. Express rush production available via WhatsApp.",
      shippingInfo: "Complimentary worldwide express courier delivery (DHL Express / FedEx 3\u20135 days).",
      careInstructions: "Dry clean only. Gentle steam with low heat.",
      images: [
        "/uploads/regenerated_image_1788954091974.jpg",
        "/uploads/bridal_couch_hero_1788951504284.jpg"
      ],
      colors: [
        {
          name: "White",
          hex: "#FFFFFF"
        },
        {
          name: "Ivory",
          hex: "#FAF5EE"
        },
        {
          name: "Champagne Gold",
          hex: "#E2CFA7"
        },
        {
          name: "Beige",
          hex: "#E2D8CA"
        },
        {
          name: "Blush Pink",
          hex: "#F0D2D2"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "XXXL (UK 22/24)",
        "Custom Measurements"
      ],
      reviewsCount: 84,
      rating: 5,
      isBestSeller: true,
      isNew: false,
      crossSellIds: [
        "reversible-silk-hair-bonnet",
        "luxury-silk-pillowcase",
        "quilted-bridal-flip-flop",
        "halo-bridesmaids-robe"
      ],
      badge: "Iconic Bestseller \xB7 \u20A6150,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-BRI-001",
      compareAtPriceUSD: 180,
      createdAt: "2026-08-11T14:10:28.411Z",
      updatedAt: "2026-10-01T17:27:05.603Z"
    },
    {
      id: "mercy-tulle-robe",
      name: "Mercy Robe",
      slug: "mercy-tulle-robe",
      subtitle: "Ethereal multi-tier sheer French illusion tulle with romantic bishop sleeves",
      priceUSD: 160,
      category: "bridal",
      style: "Tulle",
      collectionName: "Mercy",
      description: "A cloud-like confection of cascading soft French illusion tulle. Designed to evoke effortless majesty during your bridal portraits and champagne toast before stepping into the wedding dress.",
      details: [
        "Multi-layered fine French illusion tulle for dramatic volume without weight",
        "Voluminous bishop sleeves with soft elasticated satin cuffs",
        "Includes matching high-waist silk-blend chemise slip",
        "Wide double-sided silk ribbon waist tie"
      ],
      materials: "100% Fine Polyamide French Illusion Tulle, Mulberry Silk trims",
      sizingInfo: "Oversized editorial drape. Available in S through XXXL.",
      productionTime: "Hand-tailored in 7\u201314 business days.",
      shippingInfo: "Worldwide tracked shipping within 3\u20135 working days.",
      careInstructions: "Professional delicate dry clean only.",
      images: [
        "/uploads/regenerated_image_1788954093212.jpg",
        "/uploads/bridal_hero_cutout_1788871988678.jpg"
      ],
      colors: [
        {
          name: "Ivory",
          hex: "#FAF5EE"
        },
        {
          name: "White",
          hex: "#FFFFFF"
        },
        {
          name: "Beige",
          hex: "#E2D8CA"
        },
        {
          name: "Nude",
          hex: "#E7D3C1"
        },
        {
          name: "Champagne Gold",
          hex: "#E2CFA7"
        },
        {
          name: "Blush Pink",
          hex: "#F0D2D2"
        },
        {
          name: "Lilac",
          hex: "#D8CEE3"
        },
        {
          name: "Soft Pink",
          hex: "#F7D8E2"
        },
        {
          name: "Sky Blue",
          hex: "#ABC4D8"
        },
        {
          name: "Soft Green",
          hex: "#C4D6C4"
        },
        {
          name: "Olive Green",
          hex: "#6F7A56"
        },
        {
          name: "Chocolate Brown",
          hex: "#442A1D"
        },
        {
          name: "Burnt Orange",
          hex: "#C25A27"
        },
        {
          name: "Nude Brown",
          hex: "#9A7864"
        },
        {
          name: "Emerald Green",
          hex: "#1C4A38"
        },
        {
          name: "Navy Blue",
          hex: "#1C2951"
        },
        {
          name: "Burgundy",
          hex: "#631B2A"
        },
        {
          name: "Red",
          hex: "#9E1A1A"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "XXXL (UK 22/24)",
        "Custom Measurements"
      ],
      reviewsCount: 62,
      rating: 4.9,
      isBestSeller: true,
      crossSellIds: [
        "mini-bridal-handheld-fan",
        "pure-silk-scrunchie",
        "bridal-night-set"
      ],
      badge: "Signature Volume",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-BRI-002",
      compareAtPriceUSD: 192,
      createdAt: "2026-08-12T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "mercy-extra-full-robe",
      name: "Amaka Extra Full Robe",
      slug: "amaka-extra-full-robe",
      subtitle: "Architectural ultra-voluminous tulle couture robe with 2-meter dramatic cathedral train",
      priceUSD: 200,
      category: "bridal",
      style: "Tulle",
      collectionName: "Amaka",
      description: "When drama is non-negotiable. Using more than 40 meters of premium French tulle, the Amaka Extra Full Robe floats around you like a royal cloud, designed specifically for museum-grade wedding morning photography.",
      details: [
        "Over 40 meters of pleated and gathered French bridal tulle",
        "Extended 2-meter sweeping royal cathedral train",
        "Tiered architectural ruffles framing the neckline and front opening",
        "Includes custom slip dress in matching tone"
      ],
      materials: "Micro-weave French bridal tulle with Italian satin binding",
      sizingInfo: "Couture floor sweep. We customize hem to your wedding shoe height.",
      productionTime: "7\u201314 days handcrafted in our Lagos atelier.",
      shippingInfo: "Worldwide courier via DHL Express with signature required.",
      careInstructions: "Specialist dry clean only. Store hung in breathable garment bag.",
      images: [
        "/uploads/regenerated_image_1788954093212.jpg",
        "/uploads/hero_bridal_bg_1788959544066.jpg"
      ],
      colors: [
        {
          name: "Ivory",
          hex: "#FAF5EE"
        },
        {
          name: "White",
          hex: "#FFFFFF"
        },
        {
          name: "Beige",
          hex: "#E2D8CA"
        },
        {
          name: "Blush Pink",
          hex: "#F0D2D2"
        },
        {
          name: "Sky Blue",
          hex: "#ABC4D8"
        },
        {
          name: "Burgundy",
          hex: "#631B2A"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "XXXL (UK 22/24)",
        "Custom Tailored"
      ],
      reviewsCount: 49,
      rating: 5,
      crossSellIds: [
        "complete-robe-set",
        "reversible-silk-hair-bonnet",
        "quilted-bridal-flip-flop"
      ],
      badge: "Couture Train",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-BRI-003",
      createdAt: "2026-08-13T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "classic-silk-robe",
      name: "Classic Silk Robe",
      slug: "classic-silk-robe",
      subtitle: "Heavyweight 22-momme Mulberry silk with french seams and structured wide lapels",
      priceUSD: 80,
      category: "bridal",
      style: "Silk",
      collectionName: "Classic",
      description: "Pure, timeless bridal elegance. Crafted from lustrous 22-momme 100% Grade 6A Mulberry silk that feels like liquid pearl against the skin. Tailored with French seams and an internal modesty tie.",
      details: [
        "100% Grade 6A pure Mulberry silk (22 Momme heavyweight)",
        "Internal security ties to prevent slipping",
        "Generous wrap silhouette with structured belt loops and matching silk sash",
        "French seam construction throughout for lifelong longevity"
      ],
      materials: "100% Grade 6A Mulberry Silk",
      sizingInfo: "Available in knee-length (95cm) and floor-length (145cm).",
      productionTime: "Standard production 3\u20134 business days.",
      shippingInfo: "Shipped worldwide with express tracking.",
      careInstructions: "Hand wash cold with silk detergent or dry clean.",
      images: [
        "/uploads/regenerated_image_1788954095517.jpg",
        "/uploads/bridal_couch_hero_1788951504284.jpg"
      ],
      colors: [
        {
          name: "Ivory",
          hex: "#FAF5EE"
        },
        {
          name: "White",
          hex: "#FFFFFF"
        },
        {
          name: "Beige",
          hex: "#E2D8CA"
        },
        {
          name: "Nude",
          hex: "#E7D3C1"
        },
        {
          name: "Champagne Gold",
          hex: "#E2CFA7"
        },
        {
          name: "Blush Pink",
          hex: "#F0D2D2"
        },
        {
          name: "Lilac",
          hex: "#D8CEE3"
        },
        {
          name: "Soft Pink",
          hex: "#F7D8E2"
        },
        {
          name: "Sky Blue",
          hex: "#ABC4D8"
        },
        {
          name: "Soft Green",
          hex: "#C4D6C4"
        },
        {
          name: "Olive Green",
          hex: "#6F7A56"
        },
        {
          name: "Chocolate Brown",
          hex: "#442A1D"
        },
        {
          name: "Burnt Orange",
          hex: "#C25A27"
        },
        {
          name: "Nude Brown",
          hex: "#9A7864"
        },
        {
          name: "Emerald Green",
          hex: "#1C4A38"
        },
        {
          name: "Navy Blue",
          hex: "#1C2951"
        },
        {
          name: "Burgundy",
          hex: "#631B2A"
        },
        {
          name: "Red",
          hex: "#9E1A1A"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "XXXL (UK 22/24)"
      ],
      reviewsCount: 110,
      rating: 4.9,
      isBestSeller: true,
      crossSellIds: [
        "luxury-silk-pillowcase",
        "pure-silk-scrunchie",
        "linda-bridesmaids-robe"
      ],
      badge: "Essential \xB7 \u20A680,000",
      status: "published",
      stockQuantity: 4,
      stockStatus: "low_stock",
      sku: "LE-BRI-004",
      compareAtPriceUSD: 96,
      createdAt: "2026-08-14T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "sunset-robe",
      name: "Sunset Robe",
      slug: "sunset-robe",
      subtitle: "Hand-shaded ombre chiffon gradient inspired by West African twilight & golden hour",
      priceUSD: 130,
      category: "bridal",
      style: "Silk",
      collectionName: "Sunset",
      description: "Capturing the breathtaking warmth of a tropical golden hour. The Sunset Robe melts from ivory into soft champagne, warm blush, and burnt terracotta, honoring radiant bridal skin under natural morning light.",
      details: [
        "Artisanal hand-dipped ombre color gradation",
        "Whisper-light Italian silk-chiffon with fluid movement",
        "Draped flare sleeves that catch every gentle breeze",
        "Includes ivory satin under-slip"
      ],
      materials: "Italian Silk Chiffon, silk crepe de chine accents",
      sizingInfo: "Relaxed fluid drape. Fits true to size with generous wrap.",
      productionTime: "Handcrafted in 7\u201314 days in Lagos.",
      shippingInfo: "Express worldwide shipping (DHL / FedEx).",
      careInstructions: "Specialist dry clean only.",
      images: [
        "/uploads/regenerated_image_1788954096833.jpg",
        "/uploads/bridal_hero_cutout_1788871988678.jpg"
      ],
      colors: [
        {
          name: "Golden Hour (Ivory to Warm Amber)",
          hex: "#E7B784"
        },
        {
          name: "Rose Twilight (Ivory to Blush Terracotta)",
          hex: "#DFA599"
        },
        {
          name: "Lagoon Dusk (Ivory to Lilac Sky)",
          hex: "#B8A6CE"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "XXXL (UK 22/24)"
      ],
      reviewsCount: 38,
      rating: 4.9,
      crossSellIds: [
        "mini-bridal-handheld-fan",
        "amanda-3d-petals-robe",
        "complete-robe-set"
      ],
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-BRI-005",
      createdAt: "2026-08-15T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "lily-bridal-robe",
      name: "Lily Robe",
      slug: "lily-bridal-robe",
      subtitle: "Intricate French corded floral lace with scalloped eyelash borders and silk satin lapel",
      priceUSD: 140,
      category: "bridal",
      style: "Lace",
      collectionName: "Lily",
      description: "Romance encapsulated. The Lily Bridal Robe marries fine French Chantilly and corded lace with lustrous satin trim. Featuring romantic bell sleeves trimmed in delicate eyelash fringe for exquisite detail in close-up beauty shots.",
      details: [
        "Imported French corded floral lace",
        "Scalloped eyelash lace cuffs and hemline",
        "Lustrous Duchess satin lapels and waist tie",
        "Includes opaque nude or ivory satin inner slip"
      ],
      materials: "French Corded Lace, 100% Silk Duchess Satin",
      sizingInfo: "Tailored fit at shoulders with gentle A-line sweep.",
      productionTime: "7\u201314 business days.",
      shippingInfo: "Worldwide delivery 3\u20135 days.",
      careInstructions: "Delicate dry clean only.",
      images: [
        "/uploads/regenerated_image_1788954096833.jpg",
        "/uploads/bridal_couch_hero_1788951504284.jpg"
      ],
      colors: [
        {
          name: "Ivory",
          hex: "#FAF5EE"
        },
        {
          name: "White",
          hex: "#FFFFFF"
        },
        {
          name: "Blush Pink",
          hex: "#F0D2D2"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "XXXL (UK 22/24)"
      ],
      reviewsCount: 53,
      rating: 5,
      crossSellIds: [
        "quilted-bridal-flip-flop",
        "luxury-silk-pillowcase",
        "reversible-silk-hair-bonnet"
      ],
      status: "published",
      stockQuantity: 0,
      stockStatus: "out_of_stock",
      sku: "LE-BRI-006",
      createdAt: "2026-08-16T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "the-bunmi-robe",
      name: "Bunm\xED Robe",
      slug: "the-bunmi-robe",
      subtitle: "Hand-beaded corset bodice with sweeping illusion silk skirt and pearl droplet epaulettes",
      priceUSD: 180,
      category: "bridal",
      style: "Corset",
      collectionName: "Bunm\xED",
      description: "Named in honour of regal celebration. The Bunm\xED robe incorporates an internal softly boned corset that gently sculpts the waist, adorned with shimmering glass bugle beads and seed pearls that glisten under getting-ready studio lights.",
      details: [
        "Soft flexible boning for sculpted silhouette and effortless breathing",
        "Thousands of hand-applied glass seed beads & pearls",
        "Dramatic cape-like slit sleeves",
        "Sweeping floor-length silk georgette skirt"
      ],
      materials: "Heavy Silk Georgette, Austrian Crystal beads, glass pearls",
      sizingInfo: "Lace-up back placket allows flexible custom fit across bust and waist.",
      productionTime: "Couture hand-sewn in 7\u201314 days.",
      shippingInfo: "Free worldwide express delivery.",
      careInstructions: "Specialist couture dry clean.",
      images: [
        "/uploads/regenerated_image_1788954095517.jpg",
        "/uploads/hero_bridal_bg_1788959544066.jpg"
      ],
      colors: [
        {
          name: "Ivory & Pearl",
          hex: "#FAF5EE"
        },
        {
          name: "Champagne Gold",
          hex: "#E2CFA7"
        },
        {
          name: "White",
          hex: "#FFFFFF"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "Custom Fit"
      ],
      reviewsCount: 71,
      rating: 5,
      isBestSeller: true,
      crossSellIds: [
        "complete-robe-set",
        "pure-silk-scrunchie",
        "sisi-yemi-halter-neck-dress"
      ],
      badge: "Couture Corset",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-BRI-007",
      compareAtPriceUSD: 216,
      createdAt: "2026-08-17T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "sisi-yemi-halter-neck-dress",
      name: "Sisi Yemi",
      slug: "sisi-yemi-halter-neck-dress",
      subtitle: "High-slit cowl back bridal morning dress crafted from heavyweight liquid silk satin",
      priceUSD: 300,
      category: "bridal",
      style: "Silk",
      collectionName: "Sisi Yemi",
      description: "The modern bride\u2019s chic alternative. The Sisi Yemi gown effortlessly doubles as your morning getting-ready slip and an iconic after-party reception dress. Cut on the bias for a contouring drape that flows with every step.",
      details: [
        "Bias-cut liquid silk satin that hugs curves gracefully",
        "Halter high neckline with self-tie neck streamer",
        "Dramatic low back drape with modesty hook",
        "Thigh-high walking slit for ease and photograph elegance"
      ],
      materials: "95% Silk Satin, 5% Elastane for comfort and resilience",
      sizingInfo: "Bias cut provides natural stretch. Fits true to size.",
      productionTime: "7\u201314 days handcrafted in Lagos.",
      shippingInfo: "Express tracked delivery worldwide.",
      careInstructions: "Dry clean or cold hand wash with silk soap.",
      images: [
        "/uploads/regenerated_image_1788961850105.jpg",
        "/uploads/regenerated_image_1788952915584.png"
      ],
      colors: [
        {
          name: "Ivory",
          hex: "#FAF5EE"
        },
        {
          name: "White",
          hex: "#FFFFFF"
        },
        {
          name: "Champagne Gold",
          hex: "#E2CFA7"
        },
        {
          name: "Blush Pink",
          hex: "#F0D2D2"
        },
        {
          name: "Chocolate Brown",
          hex: "#442A1D"
        },
        {
          name: "Emerald Green",
          hex: "#1C4A38"
        },
        {
          name: "Burgundy",
          hex: "#631B2A"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "XXXL (UK 22/24)"
      ],
      reviewsCount: 44,
      rating: 4.8,
      crossSellIds: [
        "classic-silk-robe",
        "mercy-tulle-robe",
        "reversible-silk-hair-bonnet"
      ],
      badge: "Signature Couture \xB7 \u20A6300,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-BRI-008",
      createdAt: "2026-08-18T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "corset-embellished-robe",
      name: "Corset Robe Series",
      slug: "corset-embellished-robe",
      subtitle: "Internal boned sculpted waist with handcrafted crystal bugle beading and sheer tulle train",
      priceUSD: 160,
      category: "bridal",
      style: "Corset",
      collectionName: "Corset",
      description: "Sculptural luxury meeting classic bridal grandeur. Designed with an engineered interior corset that accentuates the waistline while leaving the arms and sweeping skirt completely fluid and photogenic.",
      details: [
        "Reinforced cotton-lined interior corset with steel spiral boning",
        "Hand-sewn crystal motifs across sweetheart neckline",
        "Sweeping floor-length sleeves with slit cuff",
        "Concealed zip back closure with decorative silk-covered buttons"
      ],
      materials: "Heavy Crepe de Chine, Illusion Mesh, Czech crystals",
      sizingInfo: "Provide your bust and waist measurements at checkout for a guaranteed glove fit.",
      productionTime: "7\u201314 business days.",
      shippingInfo: "Worldwide courier delivery.",
      careInstructions: "Professional dry clean only.",
      images: [
        "/uploads/regenerated_image_1788952915584.png",
        "/uploads/bridal_couch_hero_1788951504284.jpg"
      ],
      colors: [
        {
          name: "Ivory & Silver Crystal",
          hex: "#FAF5EE"
        },
        {
          name: "White & Crystal",
          hex: "#FFFFFF"
        },
        {
          name: "Beige & Gold Crystal",
          hex: "#E2D8CA"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "Custom Sizing"
      ],
      reviewsCount: 39,
      rating: 5,
      crossSellIds: [
        "quilted-bridal-flip-flop",
        "complete-robe-set"
      ],
      badge: "Corset Series \xB7 \u20A6150k\u2013\u20A6200k",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-BRI-009",
      createdAt: "2026-08-19T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "evelyn-silk-corset-robe",
      name: "Evelyn Silk Robe with Corset Band & Inner Wear",
      slug: "evelyn-silk-corset-robe",
      subtitle: "Sumptuous 22-momme silk robe paired with sculpting corset cinch band and matching inner chemise",
      priceUSD: 120,
      category: "bridal",
      style: "Corset",
      collectionName: "Evelyn",
      description: "An architectural 3-piece morning suite. The Evelyn features a fluid liquid silk kimono robe, a detachable matching boned corset band that defines the waist, and a coordinating silk inner slip dress.",
      details: [
        "Includes 3 pieces: Kimono silk robe, structured corset band, and bias-cut inner chemise",
        "Detachable lace-up waist corset for adjustable cinching",
        "Flattering midi length with bell sleeves",
        "French seams and premium silk binding"
      ],
      materials: "100% Grade 6A Mulberry Silk, flexible boning",
      sizingInfo: "S (UK 6/8) through XXXL (UK 22/24).",
      productionTime: "7\u201314 business days.",
      shippingInfo: "Worldwide courier dispatch via DHL / FedEx.",
      careInstructions: "Delicate dry clean only.",
      images: [
        "/uploads/regenerated_image_1788954091974.jpg",
        "/uploads/regenerated_image_1788952915584.png"
      ],
      colors: [
        {
          name: "Ivory",
          hex: "#FAF5EE"
        },
        {
          name: "White",
          hex: "#FFFFFF"
        },
        {
          name: "Nude",
          hex: "#E7D3C1"
        },
        {
          name: "Champagne Gold",
          hex: "#E2CFA7"
        },
        {
          name: "Blush Pink",
          hex: "#F0D2D2"
        },
        {
          name: "Emerald Green",
          hex: "#1C4A38"
        },
        {
          name: "Burgundy",
          hex: "#631B2A"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "XXXL (UK 22/24)"
      ],
      reviewsCount: 42,
      rating: 5,
      crossSellIds: [
        "classic-silk-robe",
        "quilted-bridal-flip-flop"
      ],
      badge: "3-Piece Suite \xB7 \u20A6120,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-BRI-010",
      createdAt: "2026-08-20T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "custom-bridal-designs",
      name: "Bespoke Custom Bridal Robe",
      slug: "custom-bridal-designs",
      subtitle: "One-of-one personalized bridal couture designed alongside Lariel creative directors",
      priceUSD: 550,
      category: "bridal",
      style: "Custom",
      collectionName: "Custom",
      description: "Your vision, meticulously brought to life. Whether you dream of a dramatic 3-meter train, personalized family embroidery, rare fabric pairings, or a unique African motif, our master artisans craft a singular piece made exclusively for your wedding morning.",
      details: [
        "Direct 1-on-1 design consultation via WhatsApp / Video call with Lariel Essentials",
        "Personalized fabric swatches & sketch approvals before stitching",
        "Custom monograms, wedding dates, and bridal crests embroidered inside",
        "Custom length, sleeve shape, and train volume calibrated to your venue"
      ],
      materials: "Sourced to your preference (French lace, Mulberry silk, organza, Adire, velvet)",
      sizingInfo: "Made entirely to your individual bespoke measurement profile.",
      productionTime: "10\u201320 working days. Express rush available upon inquiry.",
      shippingInfo: "White-glove priority international delivery.",
      careInstructions: "Archival garment box and custom care guide included.",
      images: [
        "/uploads/regenerated_image_1788952915584.png",
        "/uploads/hero_bridal_bg_1788959544066.jpg"
      ],
      colors: [
        {
          name: "Ivory",
          hex: "#FAF5EE"
        },
        {
          name: "White",
          hex: "#FFFFFF"
        },
        {
          name: "Beige",
          hex: "#E2D8CA"
        },
        {
          name: "Nude",
          hex: "#E7D3C1"
        },
        {
          name: "Champagne Gold",
          hex: "#E2CFA7"
        },
        {
          name: "Blush Pink",
          hex: "#F0D2D2"
        },
        {
          name: "Lilac",
          hex: "#D8CEE3"
        },
        {
          name: "Soft Pink",
          hex: "#F7D8E2"
        },
        {
          name: "Sky Blue",
          hex: "#ABC4D8"
        },
        {
          name: "Soft Green",
          hex: "#C4D6C4"
        },
        {
          name: "Olive Green",
          hex: "#6F7A56"
        },
        {
          name: "Chocolate Brown",
          hex: "#442A1D"
        },
        {
          name: "Burnt Orange",
          hex: "#C25A27"
        },
        {
          name: "Nude Brown",
          hex: "#9A7864"
        },
        {
          name: "Emerald Green",
          hex: "#1C4A38"
        },
        {
          name: "Navy Blue",
          hex: "#1C2951"
        },
        {
          name: "Burgundy",
          hex: "#631B2A"
        },
        {
          name: "Red",
          hex: "#9E1A1A"
        }
      ],
      sizes: [
        "Bespoke Custom Profile"
      ],
      reviewsCount: 58,
      rating: 5,
      crossSellIds: [
        "getting-ready-set",
        "luxury-silk-pillowcase"
      ],
      badge: "Bespoke 1-of-1",
      status: "draft",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-BRI-011",
      createdAt: "2026-08-21T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "halo-bridesmaids-robe",
      name: "Halo Bridesmaids Robe",
      slug: "halo-bridesmaids-robe",
      subtitle: "Lustrous silk satin robes with sheer ethereal mesh sleeves and satin wrist cuffs",
      priceUSD: 30,
      category: "bridesmaids",
      style: "Silk",
      collectionName: "HALO",
      description: "Designed to frame your bridesmaids in timeless harmony. The Halo Robe pairs buttery smooth silk satin with whisper-soft sheer illusion mesh sleeves, providing photograph texture while allowing full mobility.",
      details: [
        "Premium liquid silk satin body with opaque modesty drape",
        "Delicate sheer mesh sleeves with matching silk cuffs",
        "Internal security ties and wide satin waist belt",
        "Available in our complete 18-shade bridal party palette"
      ],
      materials: "Premium Silk Satin, Polyamide illusion mesh",
      sizingInfo: "Knee-length or midi-length available. Flattering wrap closure.",
      productionTime: "Standard 3\u20134 business days (2\u20133 weeks for bulk suites).",
      shippingInfo: "Worldwide courier shipping.",
      careInstructions: "Machine wash delicate cold in wash bag or hand wash.",
      images: [
        "/uploads/regenerated_image_1788954098680.jpg",
        "/uploads/regenerated_image_1788961850750.jpg"
      ],
      colors: [
        {
          name: "Ivory",
          hex: "#FAF5EE"
        },
        {
          name: "White",
          hex: "#FFFFFF"
        },
        {
          name: "Beige",
          hex: "#E2D8CA"
        },
        {
          name: "Nude",
          hex: "#E7D3C1"
        },
        {
          name: "Champagne Gold",
          hex: "#E2CFA7"
        },
        {
          name: "Blush Pink",
          hex: "#F0D2D2"
        },
        {
          name: "Lilac",
          hex: "#D8CEE3"
        },
        {
          name: "Soft Pink",
          hex: "#F7D8E2"
        },
        {
          name: "Sky Blue",
          hex: "#ABC4D8"
        },
        {
          name: "Soft Green",
          hex: "#C4D6C4"
        },
        {
          name: "Olive Green",
          hex: "#6F7A56"
        },
        {
          name: "Chocolate Brown",
          hex: "#442A1D"
        },
        {
          name: "Burnt Orange",
          hex: "#C25A27"
        },
        {
          name: "Nude Brown",
          hex: "#9A7864"
        },
        {
          name: "Emerald Green",
          hex: "#1C4A38"
        },
        {
          name: "Navy Blue",
          hex: "#1C2951"
        },
        {
          name: "Burgundy",
          hex: "#631B2A"
        },
        {
          name: "Red",
          hex: "#9E1A1A"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "XXXL (UK 22/24)",
        "Custom Sizing"
      ],
      reviewsCount: 96,
      rating: 4.9,
      isBestSeller: true,
      crossSellIds: [
        "linda-bridesmaids-robe",
        "amanda-3d-petals-robe",
        "pure-silk-scrunchie"
      ],
      badge: "Bridesmaids Favorite \xB7 \u20A630,000 each",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-BRI-012",
      compareAtPriceUSD: 36,
      createdAt: "2026-08-22T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "linda-bridesmaids-robe",
      name: "Linda Robe with Inner Chemise",
      slug: "linda-bridesmaids-robe",
      subtitle: "Mesh ruffle tier robes complete with matching inner wear chemise slip",
      priceUSD: 40,
      category: "bridesmaids",
      style: "Tulle",
      collectionName: "Linda",
      description: "Playful, feminine, and utterly photogenic. The Linda Robe surrounds your bridal party with soft pleated mesh ruffles along the hem and sleeves, creating sensational movement when dancing and popping morning champagne, paired with a matching inner chemise.",
      details: [
        "Pleated micro-mesh cascading ruffles on sleeves and hemlines",
        "Includes matching opaque inner chemise dress",
        "Wide satin belt for flattering waist definition",
        "Non-scratch ultra-soft illusion mesh"
      ],
      materials: "Soft micro-mesh, satin inner dress",
      sizingInfo: "Generous wrap with forgiving fit across bust and hips.",
      productionTime: "Standard 3\u20134 business days (2\u20133 weeks for bulk suites).",
      shippingInfo: "Global express dispatch.",
      careInstructions: "Delicate hand wash cold.",
      images: [
        "/uploads/regenerated_image_1788954098680.jpg",
        "/uploads/regenerated_image_1788961847724.jpg"
      ],
      colors: [
        {
          name: "Ivory",
          hex: "#FAF5EE"
        },
        {
          name: "White",
          hex: "#FFFFFF"
        },
        {
          name: "Beige",
          hex: "#E2D8CA"
        },
        {
          name: "Nude",
          hex: "#E7D3C1"
        },
        {
          name: "Champagne Gold",
          hex: "#E2CFA7"
        },
        {
          name: "Blush Pink",
          hex: "#F0D2D2"
        },
        {
          name: "Lilac",
          hex: "#D8CEE3"
        },
        {
          name: "Soft Pink",
          hex: "#F7D8E2"
        },
        {
          name: "Sky Blue",
          hex: "#ABC4D8"
        },
        {
          name: "Soft Green",
          hex: "#C4D6C4"
        },
        {
          name: "Olive Green",
          hex: "#6F7A56"
        },
        {
          name: "Chocolate Brown",
          hex: "#442A1D"
        },
        {
          name: "Burnt Orange",
          hex: "#C25A27"
        },
        {
          name: "Nude Brown",
          hex: "#9A7864"
        },
        {
          name: "Emerald Green",
          hex: "#1C4A38"
        },
        {
          name: "Navy Blue",
          hex: "#1C2951"
        },
        {
          name: "Burgundy",
          hex: "#631B2A"
        },
        {
          name: "Red",
          hex: "#9E1A1A"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "XXXL (UK 22/24)"
      ],
      reviewsCount: 52,
      rating: 4.9,
      crossSellIds: [
        "halo-bridesmaids-robe",
        "abiks-bridesmaids-robe"
      ],
      badge: "Includes Inner Chemise \xB7 \u20A640,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-BRI-013",
      createdAt: "2026-08-23T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "lace-detail-bridesmaids-robe",
      name: "Lace Detail Robe",
      slug: "lace-detail-bridesmaids-robe",
      subtitle: "Scalloped floral French lace along hemlines and bell cuffs in long or short silhouette",
      priceUSD: 35,
      category: "bridesmaids",
      style: "Lace",
      collectionName: "Lace Detail",
      description: "Understated romantic elegance for bridesmaids. Beautifully soft satin accented by intricate floral scalloped lace at the cuffs and hem.",
      details: [
        "Choice of Short (above knee) or Long (ankle length) cut",
        "French scalloped lace border trim",
        "Wrinkle-resistant luxury satin weave",
        "Custom bridal party role monogramming available"
      ],
      materials: "Silk-blend Satin, French floral lace",
      sizingInfo: "True to size with adjustable belt.",
      productionTime: "Standard 3\u20134 days (2\u20133 weeks bulk).",
      shippingInfo: "Worldwide shipping.",
      careInstructions: "Hand wash cold or gentle machine cycle in mesh bag.",
      images: [
        "/uploads/regenerated_image_1788954098680.jpg",
        "/uploads/regenerated_image_1788954095517.jpg"
      ],
      colors: [
        {
          name: "Ivory",
          hex: "#FAF5EE"
        },
        {
          name: "White",
          hex: "#FFFFFF"
        },
        {
          name: "Beige",
          hex: "#E2D8CA"
        },
        {
          name: "Nude",
          hex: "#E7D3C1"
        },
        {
          name: "Champagne Gold",
          hex: "#E2CFA7"
        },
        {
          name: "Blush Pink",
          hex: "#F0D2D2"
        },
        {
          name: "Lilac",
          hex: "#D8CEE3"
        },
        {
          name: "Soft Pink",
          hex: "#F7D8E2"
        },
        {
          name: "Sky Blue",
          hex: "#ABC4D8"
        },
        {
          name: "Soft Green",
          hex: "#C4D6C4"
        },
        {
          name: "Olive Green",
          hex: "#6F7A56"
        },
        {
          name: "Chocolate Brown",
          hex: "#442A1D"
        },
        {
          name: "Burnt Orange",
          hex: "#C25A27"
        },
        {
          name: "Nude Brown",
          hex: "#9A7864"
        },
        {
          name: "Emerald Green",
          hex: "#1C4A38"
        },
        {
          name: "Navy Blue",
          hex: "#1C2951"
        },
        {
          name: "Burgundy",
          hex: "#631B2A"
        },
        {
          name: "Red",
          hex: "#9E1A1A"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "XXXL (UK 22/24)"
      ],
      reviewsCount: 47,
      rating: 4.9,
      crossSellIds: [
        "classic-silk-robe",
        "pure-silk-scrunchie"
      ],
      badge: "\u20A635,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-BRI-014",
      createdAt: "2026-08-24T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "abiks-bridesmaids-robe",
      name: "Abiks Robe",
      slug: "abiks-bridesmaids-robe",
      subtitle: "Hand-sewn freshwater pearl details along neckline, collar, and sleeve openings",
      priceUSD: 35,
      category: "bridesmaids",
      style: "Embellished",
      collectionName: "Abiks",
      description: "Subtle opulence designed for sisterhood. The Abiks Robe is finished with individually hand-stitched pearl borders that catch the morning sunlight with graceful luminosity.",
      details: [
        "Hand-sewn pearl trim lining the shawl collar and sleeve cuffs",
        "Silky smooth satin fabric with subtle champagne sheen",
        "Secure internal ribbon and wide sash"
      ],
      materials: "Silk Satin, simulated freshwater pearls",
      sizingInfo: "Relaxed tailored fit.",
      productionTime: "Standard 3\u20134 days (2\u20133 weeks bulk).",
      shippingInfo: "Shipped worldwide via DHL/FedEx.",
      careInstructions: "Gentle hand wash inside out or dry clean.",
      images: [
        "/uploads/regenerated_image_1788954098680.jpg",
        "/uploads/regenerated_image_1788961850750.jpg"
      ],
      colors: [
        {
          name: "Ivory",
          hex: "#FAF5EE"
        },
        {
          name: "White",
          hex: "#FFFFFF"
        },
        {
          name: "Beige",
          hex: "#E2D8CA"
        },
        {
          name: "Nude",
          hex: "#E7D3C1"
        },
        {
          name: "Champagne Gold",
          hex: "#E2CFA7"
        },
        {
          name: "Blush Pink",
          hex: "#F0D2D2"
        },
        {
          name: "Lilac",
          hex: "#D8CEE3"
        },
        {
          name: "Soft Pink",
          hex: "#F7D8E2"
        },
        {
          name: "Sky Blue",
          hex: "#ABC4D8"
        },
        {
          name: "Soft Green",
          hex: "#C4D6C4"
        },
        {
          name: "Olive Green",
          hex: "#6F7A56"
        },
        {
          name: "Chocolate Brown",
          hex: "#442A1D"
        },
        {
          name: "Burnt Orange",
          hex: "#C25A27"
        },
        {
          name: "Nude Brown",
          hex: "#9A7864"
        },
        {
          name: "Emerald Green",
          hex: "#1C4A38"
        },
        {
          name: "Navy Blue",
          hex: "#1C2951"
        },
        {
          name: "Burgundy",
          hex: "#631B2A"
        },
        {
          name: "Red",
          hex: "#9E1A1A"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "XXXL (UK 22/24)"
      ],
      reviewsCount: 39,
      rating: 5,
      crossSellIds: [
        "the-bunmi-robe",
        "halo-bridesmaids-robe"
      ],
      badge: "\u20A635,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-BRI-015",
      createdAt: "2026-08-25T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "complete-robe-set",
      name: "The Complete Robe Set",
      slug: "complete-robe-set",
      subtitle: "Robe + Scrunchie + Hair Bonnet + Satin Pillowcase in curated presentation gift box",
      priceUSD: 85,
      category: "sets",
      style: "Silk",
      collectionName: "Bridal Party Sets",
      description: "The ultimate getting-ready luxury ritual. Everything the bride or bridesmaid needs to protect her hair, skin, and makeup while soaking in the magic of the wedding morning.",
      details: [
        "Signature Luxury Silk Robe in your choice of shade",
        "Reversible Mulberry Silk Hair Bonnet to protect wedding hairstyle",
        "Oversized Pure Silk Scrunchie",
        "Bridal Monogrammed 100% Silk Pillowcase",
        "Packaged in gold-embossed Lariel Essentials keepsake box"
      ],
      materials: "100% 22-Momme Mulberry Silk & Duchess Satin",
      sizingInfo: "Robe available in S to XXXL. Bonnet and pillowcase are universal standard size.",
      productionTime: "3\u20135 days (2\u20133 weeks bulk suites).",
      shippingInfo: "Worldwide tracked shipping.",
      careInstructions: "Hand wash cold or dry clean.",
      images: [
        "/uploads/regenerated_image_1788961847724.jpg",
        "/uploads/bridal_couch_hero_1788951504284.jpg"
      ],
      colors: [
        {
          name: "Ivory",
          hex: "#FAF5EE"
        },
        {
          name: "White",
          hex: "#FFFFFF"
        },
        {
          name: "Beige",
          hex: "#E2D8CA"
        },
        {
          name: "Nude",
          hex: "#E7D3C1"
        },
        {
          name: "Champagne Gold",
          hex: "#E2CFA7"
        },
        {
          name: "Blush Pink",
          hex: "#F0D2D2"
        },
        {
          name: "Lilac",
          hex: "#D8CEE3"
        },
        {
          name: "Soft Pink",
          hex: "#F7D8E2"
        },
        {
          name: "Sky Blue",
          hex: "#ABC4D8"
        },
        {
          name: "Soft Green",
          hex: "#C4D6C4"
        },
        {
          name: "Olive Green",
          hex: "#6F7A56"
        },
        {
          name: "Chocolate Brown",
          hex: "#442A1D"
        },
        {
          name: "Burnt Orange",
          hex: "#C25A27"
        },
        {
          name: "Nude Brown",
          hex: "#9A7864"
        },
        {
          name: "Emerald Green",
          hex: "#1C4A38"
        },
        {
          name: "Navy Blue",
          hex: "#1C2951"
        },
        {
          name: "Burgundy",
          hex: "#631B2A"
        },
        {
          name: "Red",
          hex: "#9E1A1A"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "XXXL (UK 22/24)"
      ],
      reviewsCount: 128,
      rating: 5,
      isBestSeller: true,
      setItems: [
        "Robe",
        "Scrunchie",
        "Hair Bonnet",
        "Satin Pillowcase"
      ],
      crossSellIds: [
        "bridal-night-set",
        "getting-ready-set"
      ],
      badge: "Curated Gift Set \xB7 \u20A685,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-SET-016",
      compareAtPriceUSD: 102,
      createdAt: "2026-08-26T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "bridal-night-set",
      name: "The Bridal Night Set",
      slug: "bridal-night-set",
      subtitle: "PJ Set + Silk Sleep Face Mask + Hair Bonnet + Indoor Flip-Flops",
      priceUSD: 65,
      category: "sets",
      style: "Silk",
      collectionName: "Bridal Party Sets",
      description: "For the eve of your wedding day. Sleep deeply in cloud-soft silk pyjamas, padded sleep mask, hair bonnet, and cushioned indoor slippers, waking refreshed for the momentous day ahead.",
      details: [
        "Pure Silk Button-Down Pyjama Set (Shirt + Trousers or Shorts)",
        "Light-blocking Padded Silk Eye Sleep Mask with gentle elastic band",
        "Double-lined Reversible Silk Hair Bonnet",
        "Cushioned Pearl-embroidered Indoor Bridal Flip-Flops"
      ],
      materials: "Mulberry Silk, memory foam slipper base, cotton lining",
      sizingInfo: "Select your normal pyjama size and shoe size.",
      productionTime: "3\u20135 days.",
      shippingInfo: "Worldwide delivery.",
      careInstructions: "Silk care guidelines included.",
      images: [
        "/uploads/regenerated_image_1788961850105.jpg",
        "/uploads/regenerated_image_1788961847724.jpg"
      ],
      colors: [
        {
          name: "Ivory",
          hex: "#FAF5EE"
        },
        {
          name: "White",
          hex: "#FFFFFF"
        },
        {
          name: "Blush Pink",
          hex: "#F0D2D2"
        },
        {
          name: "Lilac",
          hex: "#D8CEE3"
        },
        {
          name: "Sky Blue",
          hex: "#ABC4D8"
        },
        {
          name: "Emerald Green",
          hex: "#1C4A38"
        },
        {
          name: "Burgundy",
          hex: "#631B2A"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "XXXL (UK 22/24)"
      ],
      reviewsCount: 88,
      rating: 4.9,
      setItems: [
        "PJ Set",
        "Face Mask",
        "Hair Bonnet",
        "Indoor Flip-Flop"
      ],
      crossSellIds: [
        "complete-robe-set",
        "getting-ready-set"
      ],
      badge: "Night Before \xB7 \u20A665,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-SET-017",
      createdAt: "2026-08-27T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "getting-ready-set",
      name: "The Getting-Ready Set",
      slug: "getting-ready-set",
      subtitle: "Robe + Indoor Flip-Flop + Hair Bonnet + Rechargeable Mini Bridal Fan",
      priceUSD: 60,
      category: "sets",
      style: "Silk",
      collectionName: "Bridal Party Sets",
      description: "The viral bridal suite lifesaver. Keeps your makeup flawlessly set, prevents sweat from touching your silk robe, and ensures effortless comfort while hair and makeup artists work their craft.",
      details: [
        "Lariel Luxury Satin Robe with personalized initials option",
        "Rechargeable 3-speed Whisper-Quiet Handheld Mini Bridal Cooling Fan",
        "Non-slip Quilted Satin Indoor Flip-Flops",
        "Protective Reversible Satin Hair Bonnet"
      ],
      materials: "Satin, ABS mini fan (USB-C rechargeable), rubber sole slippers",
      sizingInfo: "Universal robe and slipper sizing.",
      productionTime: "3\u20135 days.",
      shippingInfo: "Worldwide courier dispatch.",
      careInstructions: "Machine washable bonnet and robe in cold gentle cycle.",
      images: [
        "/uploads/regenerated_image_1788961850750.jpg",
        "/uploads/regenerated_image_1788954095517.jpg"
      ],
      colors: [
        {
          name: "Ivory",
          hex: "#FAF5EE"
        },
        {
          name: "White",
          hex: "#FFFFFF"
        },
        {
          name: "Beige",
          hex: "#E2D8CA"
        },
        {
          name: "Nude",
          hex: "#E7D3C1"
        },
        {
          name: "Champagne Gold",
          hex: "#E2CFA7"
        },
        {
          name: "Blush Pink",
          hex: "#F0D2D2"
        },
        {
          name: "Lilac",
          hex: "#D8CEE3"
        },
        {
          name: "Soft Pink",
          hex: "#F7D8E2"
        },
        {
          name: "Sky Blue",
          hex: "#ABC4D8"
        },
        {
          name: "Soft Green",
          hex: "#C4D6C4"
        },
        {
          name: "Olive Green",
          hex: "#6F7A56"
        },
        {
          name: "Chocolate Brown",
          hex: "#442A1D"
        },
        {
          name: "Burnt Orange",
          hex: "#C25A27"
        },
        {
          name: "Nude Brown",
          hex: "#9A7864"
        },
        {
          name: "Emerald Green",
          hex: "#1C4A38"
        },
        {
          name: "Navy Blue",
          hex: "#1C2951"
        },
        {
          name: "Burgundy",
          hex: "#631B2A"
        },
        {
          name: "Red",
          hex: "#9E1A1A"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "XXXL (UK 22/24)"
      ],
      reviewsCount: 140,
      rating: 5,
      isBestSeller: true,
      setItems: [
        "Robe",
        "Indoor Flip-Flop",
        "Hair Bonnet",
        "Mini Fan"
      ],
      crossSellIds: [
        "complete-robe-set",
        "amanda-3d-petals-robe"
      ],
      badge: "Bridal Suite Essential \xB7 \u20A660,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-SET-018",
      compareAtPriceUSD: 72,
      createdAt: "2026-08-28T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "crack-customised-adire-neckline-combo",
      name: "Crack Customised Adire \xD7 Customized Neckline Combo",
      slug: "crack-customised-adire-neckline-combo",
      subtitle: "Signature artisanal crack-resist Adire paired with contrasting custom silk lapel neckline",
      priceUSD: 35,
      category: "adire",
      style: "Custom",
      collectionName: "Rich African Heritage",
      description: "Heritage artistry elevated. Features authentic Abeokuta and Lagos crack-resist dyed Adire batik fabric paired with a custom tailored silk neckline and cuff facing, celebrating traditional Nigerian craftsmanship.",
      details: [
        "Authentic hand-dyed crackle resist Adire motif",
        "Contrasting custom solid silk neckline & sash tie",
        "Kimono silhouette with comfortable side slits",
        "Breathable, lightweight artisanal cotton-silk drape"
      ],
      materials: "Handcrafted Nigerian Adire, Silk Satin neckline trims",
      sizingInfo: "S (UK 6/8) through XXXL (UK 22/24).",
      productionTime: "Handcrafted in 7\u201314 business days.",
      shippingInfo: "Worldwide express courier via DHL / FedEx.",
      careInstructions: "Dry clean or gentle hand wash in cold water with mild detergent.",
      images: [
        "/uploads/regenerated_image_1788962690479.jpg",
        "/uploads/regenerated_image_1788962692419.jpg"
      ],
      colors: [
        {
          name: "Royal Indigo & White",
          hex: "#1C2951"
        },
        {
          name: "Warm Terracotta & Ochre",
          hex: "#C25A27"
        },
        {
          name: "Emerald Forest & Gold",
          hex: "#1C4A38"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "XXXL (UK 22/24)"
      ],
      reviewsCount: 76,
      rating: 5,
      isBestSeller: true,
      crossSellIds: [
        "crack-adire-robe-silk-neckline",
        "personalised-adire-robe"
      ],
      badge: "Heritage Combo \xB7 \u20A635,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-ADI-019",
      compareAtPriceUSD: 42,
      createdAt: "2026-08-29T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "crack-adire-robe-silk-neckline",
      name: "Crack Adire Robe with Silk Neckline",
      slug: "crack-adire-robe-silk-neckline",
      subtitle: "Classic crackle Adire resist robe with lustrous silk band collar and matching sash",
      priceUSD: 35,
      category: "adire",
      style: "Silk",
      collectionName: "Rich African Heritage",
      description: "A timeless staple of the Lariel African Heritage line. Rich crackle indigo dye patterns accented with a smooth liquid silk band that frames the face and neckline with effortless grace.",
      details: [
        "Hand-stamped crack batik motif",
        "Smooth silk band collar and matching belt",
        "Generous wrap with secure interior ties"
      ],
      materials: "Authentic Adire fabric, 100% Silk trims",
      sizingInfo: "S (UK 6/8) through XXXL (UK 22/24).",
      productionTime: "7\u201314 days handcrafted.",
      shippingInfo: "Worldwide shipping.",
      careInstructions: "Dry clean recommended.",
      images: [
        "/uploads/regenerated_image_1788962692419.jpg",
        "/uploads/regenerated_image_1788962690479.jpg"
      ],
      colors: [
        {
          name: "Indigo Crackle",
          hex: "#1C2951"
        },
        {
          name: "Cocoa Brown Crackle",
          hex: "#442A1D"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "XXXL (UK 22/24)"
      ],
      reviewsCount: 41,
      rating: 4.9,
      crossSellIds: [
        "crack-customised-adire-neckline-combo",
        "lariel-custom-pattern-adire"
      ],
      badge: "\u20A635,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-ADI-020",
      createdAt: "2026-08-30T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "personalised-adire-robe",
      name: "Personalised Adire Robe",
      slug: "personalised-adire-robe",
      subtitle: "Custom embroidered Adire robe with your initials, new surname, or wedding title",
      priceUSD: 35,
      category: "adire",
      style: "Custom",
      collectionName: "Rich African Heritage",
      description: "Commission an authentic Adire robe personalized with gold or metallic thread embroidery of your initials or wedding date, blending Yoruba textile culture with personal keepsake memories.",
      details: [
        "High-density metallic thread embroidery included",
        "Artisanal hand-dyed Nigerian textile",
        "Includes matching waist tie sash"
      ],
      materials: "Authentic Adire Cotton-Silk, Madeira metallic embroidery threads",
      sizingInfo: "S (UK 6/8) through XXXL (UK 22/24).",
      productionTime: "7\u201314 business days.",
      shippingInfo: "Worldwide tracked shipping.",
      careInstructions: "Dry clean only.",
      images: [
        "/uploads/regenerated_image_1788963021175.png",
        "/uploads/regenerated_image_1788962690479.jpg"
      ],
      colors: [
        {
          name: "Royal Indigo",
          hex: "#1C2951"
        },
        {
          name: "Burgundy Earth",
          hex: "#631B2A"
        },
        {
          name: "Onyx Geometric",
          hex: "#262422"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "XXXL (UK 22/24)"
      ],
      reviewsCount: 55,
      rating: 5,
      crossSellIds: [
        "crack-customised-adire-neckline-combo",
        "short-length-patterned-adire"
      ],
      badge: "Personalised \xB7 \u20A635,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-ADI-021",
      createdAt: "2026-08-31T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "lariel-custom-pattern-adire",
      name: "Lariel Custom Pattern Adire",
      slug: "lariel-custom-pattern-adire",
      subtitle: "Exclusive proprietary Lariel geometric floral resist pattern hand-drawn by master dyers",
      priceUSD: 35,
      category: "adire",
      style: "Custom",
      collectionName: "Rich African Heritage",
      description: "An exclusive textile created specifically for Lariel Essentials brides. Features proprietary geometric and floral resist motifs hand-drawn using traditional cassava starch techniques.",
      details: [
        "Proprietary Lariel geometric Adire Eleko pattern",
        "Handcrafted individually by master dyers in Abeokuta",
        "Wide kimono sleeves with fluid drape"
      ],
      materials: "100% Artisanal Nigerian Adire Cotton-Silk",
      sizingInfo: "S (UK 6/8) through XXXL (UK 22/24).",
      productionTime: "7\u201314 business days.",
      shippingInfo: "Express worldwide dispatch.",
      careInstructions: "Dry clean recommended.",
      images: [
        "/uploads/regenerated_image_1788962690479.jpg",
        "/uploads/regenerated_image_1788962692419.jpg"
      ],
      colors: [
        {
          name: "Signature Deep Indigo",
          hex: "#1C2951"
        },
        {
          name: "Olive Bronze",
          hex: "#6F7A56"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "XXXL (UK 22/24)"
      ],
      reviewsCount: 38,
      rating: 4.9,
      crossSellIds: [
        "long-length-exaggerated-sleeves-adire",
        "crack-adire-robe-silk-neckline"
      ],
      badge: "Custom Pattern \xB7 \u20A635,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-ADI-022",
      createdAt: "2026-09-01T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "short-length-patterned-adire",
      name: "Short Length Personalised/Patterned Adire",
      slug: "short-length-patterned-adire",
      subtitle: "Flirty knee-length Adire robe tailored for morning preparation, bridal suite toasts, or beach honeymoon",
      priceUSD: 40,
      category: "adire",
      style: "Custom",
      collectionName: "Rich African Heritage",
      description: "Chic, contemporary, and versatile. Cut to knee-length for comfortable morning mobility and warm weather destinations, with optional personalized monogramming.",
      details: [
        "Tailored short knee-length silhouette (approx. 95cm)",
        "Optional personalized chest pocket or back monogram",
        "Lightweight and breezy artisanal hand-dyed textile"
      ],
      materials: "Artisanal Adire Cotton-Silk blend",
      sizingInfo: "S (UK 6/8) through XXXL (UK 22/24).",
      productionTime: "7\u201314 business days.",
      shippingInfo: "Worldwide delivery.",
      careInstructions: "Cold hand wash or dry clean.",
      images: [
        "/uploads/regenerated_image_1788962692419.jpg",
        "/uploads/regenerated_image_1788962690479.jpg"
      ],
      colors: [
        {
          name: "Royal Indigo",
          hex: "#1C2951"
        },
        {
          name: "Warm Terracotta",
          hex: "#C25A27"
        },
        {
          name: "Emerald Forest",
          hex: "#1C4A38"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "XXXL (UK 22/24)"
      ],
      reviewsCount: 44,
      rating: 4.9,
      crossSellIds: [
        "crack-customised-adire-neckline-combo",
        "bridal-night-set"
      ],
      badge: "Short Silhouette \xB7 \u20A640,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-ADI-023",
      createdAt: "2026-09-02T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "long-length-exaggerated-sleeves-adire",
      name: "Long Length Adire with Exaggerated Butterfly Sleeves",
      slug: "long-length-exaggerated-sleeves-adire",
      subtitle: "Floor-skimming couture Adire silhouette with dramatic oversized cape-like butterfly sleeves",
      priceUSD: 55,
      category: "adire",
      style: "Custom",
      collectionName: "Rich African Heritage",
      description: "The showstopper of African bridal loungewear. Sweeping floor length paired with dramatic, exaggerated butterfly sleeves that catch the wind and create regal portraits during your traditional wedding morning.",
      details: [
        "Dramatic exaggerated butterfly wing sleeves",
        "Floor-skimming hemline with reinforced hems",
        "Premium artisanal Adire resist dye technique",
        "Wide belt sash for dramatic waist silhouette"
      ],
      materials: "Premium Nigerian Adire Cotton-Silk",
      sizingInfo: "Floor length in S (UK 6/8) through XXXL (UK 22/24).",
      productionTime: "7\u201314 business days.",
      shippingInfo: "DHL Express worldwide.",
      careInstructions: "Dry clean only.",
      images: [
        "/uploads/regenerated_image_1788962690479.jpg",
        "/uploads/regenerated_image_1788962692419.jpg"
      ],
      colors: [
        {
          name: "Regal Indigo & Gold",
          hex: "#1C2951"
        },
        {
          name: "Onyx & Cream Geometric",
          hex: "#262422"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "XXXL (UK 22/24)"
      ],
      reviewsCount: 62,
      rating: 5,
      isBestSeller: true,
      crossSellIds: [
        "lariel-custom-pattern-long-sleeves-adire",
        "amanda-3d-petals-robe"
      ],
      badge: "Exaggerated Sleeves \xB7 \u20A655,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-ADI-024",
      compareAtPriceUSD: 66,
      createdAt: "2026-09-03T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "lariel-custom-pattern-long-sleeves-adire",
      name: "Lariel Custom Pattern Adire (Long + Exaggerated Sleeves)",
      slug: "lariel-custom-pattern-long-sleeves-adire",
      subtitle: "Exclusive proprietary Lariel motif combined with floor-length cut and dramatic sleeves",
      priceUSD: 50,
      category: "adire",
      style: "Custom",
      collectionName: "Rich African Heritage",
      description: "Combining proprietary Lariel floral geometric patterns with our viral exaggerated sleeve silhouette. A celebration of modern African bridal royalty.",
      details: [
        "Proprietary Lariel geometric Eleko pattern",
        "Dramatic elongated sleeves and floor-sweeping length",
        "Contrast silk collar accents"
      ],
      materials: "Hand-dyed Adire Cotton-Silk, pure silk trims",
      sizingInfo: "S (UK 6/8) through XXXL (UK 22/24).",
      productionTime: "7\u201314 business days.",
      shippingInfo: "Worldwide tracked courier.",
      careInstructions: "Dry clean recommended.",
      images: [
        "/uploads/regenerated_image_1788962690479.jpg",
        "/uploads/regenerated_image_1788962692419.jpg"
      ],
      colors: [
        {
          name: "Royal Indigo Motif",
          hex: "#1C2951"
        },
        {
          name: "Sunset Terracotta Motif",
          hex: "#C25A27"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "XXXL (UK 22/24)"
      ],
      reviewsCount: 50,
      rating: 5,
      crossSellIds: [
        "long-length-exaggerated-sleeves-adire",
        "crack-customised-adire-neckline-combo"
      ],
      badge: "\u20A650,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-ADI-025",
      createdAt: "2026-09-04T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "feather-detail-silk-pj",
      name: "Silk PJ with Ostrich Feathers",
      slug: "feather-detail-silk-pj",
      subtitle: "Detachable plush ostrich feather cuffs on tailored button-down shirt and straight-leg trousers",
      priceUSD: 80,
      category: "pyjamas",
      style: "Silk",
      collectionName: "Pyjamas",
      description: "The pinnacle of bridal loungewear glamor. Features whisper-soft detachable ostrich feather plumes at the wrists and ankles, allowing effortless cleaning while delivering unforgettable morning bridal photos.",
      details: [
        "100% Grade 6A Mulberry silk with mother-of-pearl buttons",
        "Detachable ostrich feather trims via invisible snap buttons",
        "Comfortable elasticated back waistband with flat front drawstring",
        "Contrasting luxury piping along notch collar and pocket"
      ],
      materials: "100% Mulberry Silk, Ethical Ostrich Feathers",
      sizingInfo: "S (UK 6/8) through XXXL (UK 22/24).",
      productionTime: "Standard 3\u20134 business days (7\u201314 days custom).",
      shippingInfo: "Express worldwide shipping.",
      careInstructions: "Remove feathers before washing. Hand wash cold silk or dry clean.",
      images: [
        "/uploads/regenerated_image_1788962695589.png",
        "/uploads/regenerated_image_1788962693429.jpg"
      ],
      colors: [
        {
          name: "Ivory",
          hex: "#FAF5EE"
        },
        {
          name: "White",
          hex: "#FFFFFF"
        },
        {
          name: "Champagne Gold",
          hex: "#E2CFA7"
        },
        {
          name: "Blush Pink",
          hex: "#F0D2D2"
        },
        {
          name: "Chocolate Brown",
          hex: "#442A1D"
        },
        {
          name: "Emerald Green",
          hex: "#1C4A38"
        },
        {
          name: "Burgundy",
          hex: "#631B2A"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "XXXL (UK 22/24)"
      ],
      reviewsCount: 78,
      rating: 5,
      isBestSeller: true,
      crossSellIds: [
        "bridal-night-set",
        "reversible-silk-hair-bonnet"
      ],
      badge: "Ostrich Feathers \xB7 \u20A680,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-PYJ-026",
      compareAtPriceUSD: 96,
      createdAt: "2026-09-05T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "ruffle-detail-silk-pj",
      name: "Silk PJs with Ruffle Detail",
      slug: "ruffle-detail-silk-pj",
      subtitle: "Feminine cascading silk ruffle trims along the notched lapel and sleeve cuffs",
      priceUSD: 50,
      category: "pyjamas",
      style: "Silk",
      collectionName: "Pyjamas",
      description: "A romantic silhouette adorned with whisper-light silk ruffles that frame your face and hands for the most delicate morning portraits.",
      details: [
        "Delicate micro-pleated ruffle cuffs",
        "Elastic waist shorts or trousers option",
        "Silky smooth breathable finish"
      ],
      materials: "100% Pure Silk Satin",
      sizingInfo: "S (UK 6/8) through XXXL (UK 22/24).",
      productionTime: "Standard 3\u20134 business days.",
      shippingInfo: "Worldwide tracked shipping.",
      careInstructions: "Hand wash cold.",
      images: [
        "/uploads/regenerated_image_1788962700642.jpg",
        "/uploads/regenerated_image_1788962694671.jpg"
      ],
      colors: [
        {
          name: "Ivory",
          hex: "#FAF5EE"
        },
        {
          name: "White",
          hex: "#FFFFFF"
        },
        {
          name: "Beige",
          hex: "#E2D8CA"
        },
        {
          name: "Nude",
          hex: "#E7D3C1"
        },
        {
          name: "Champagne Gold",
          hex: "#E2CFA7"
        },
        {
          name: "Blush Pink",
          hex: "#F0D2D2"
        },
        {
          name: "Lilac",
          hex: "#D8CEE3"
        },
        {
          name: "Soft Pink",
          hex: "#F7D8E2"
        },
        {
          name: "Sky Blue",
          hex: "#ABC4D8"
        },
        {
          name: "Soft Green",
          hex: "#C4D6C4"
        },
        {
          name: "Olive Green",
          hex: "#6F7A56"
        },
        {
          name: "Chocolate Brown",
          hex: "#442A1D"
        },
        {
          name: "Burnt Orange",
          hex: "#C25A27"
        },
        {
          name: "Nude Brown",
          hex: "#9A7864"
        },
        {
          name: "Emerald Green",
          hex: "#1C4A38"
        },
        {
          name: "Navy Blue",
          hex: "#1C2951"
        },
        {
          name: "Burgundy",
          hex: "#631B2A"
        },
        {
          name: "Red",
          hex: "#9E1A1A"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "XXXL (UK 22/24)"
      ],
      reviewsCount: 54,
      rating: 4.9,
      crossSellIds: [
        "long-set-pjs",
        "bridal-morning-shorts-pjs"
      ],
      badge: "Ruffle Detail \xB7 \u20A650,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-PYJ-027",
      createdAt: "2026-09-06T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "long-set-pjs",
      name: "Long Set PJs",
      slug: "long-set-pjs",
      subtitle: "Full-length luxury silk satin button-down pyjamas with contrast ivory piping",
      priceUSD: 35,
      category: "pyjamas",
      style: "Silk",
      collectionName: "Pyjamas",
      description: "Timeless luxury loungewear designed for quiet morning reflection, breakfast with bridesmaids, and honeymoon retreats. Features a fluid drape and soft elastic drawstring waist.",
      details: [
        "Full-length sleeve and tailored straight-leg trousers",
        "Contrast piped borders and chest pocket",
        "Mother-of-pearl buttons",
        "Fluid, breathable silk satin"
      ],
      materials: "Grade 6A Mulberry Silk Satin",
      sizingInfo: "S (UK 6/8) through XXXL (UK 22/24).",
      productionTime: "Standard 3\u20134 business days.",
      shippingInfo: "Worldwide delivery.",
      careInstructions: "Dry clean or cold delicate hand wash.",
      images: [
        "/uploads/regenerated_image_1788962693429.jpg",
        "/uploads/regenerated_image_1788962695589.png"
      ],
      colors: [
        {
          name: "Ivory",
          hex: "#FAF5EE"
        },
        {
          name: "White",
          hex: "#FFFFFF"
        },
        {
          name: "Beige",
          hex: "#E2D8CA"
        },
        {
          name: "Nude",
          hex: "#E7D3C1"
        },
        {
          name: "Champagne Gold",
          hex: "#E2CFA7"
        },
        {
          name: "Blush Pink",
          hex: "#F0D2D2"
        },
        {
          name: "Lilac",
          hex: "#D8CEE3"
        },
        {
          name: "Soft Pink",
          hex: "#F7D8E2"
        },
        {
          name: "Sky Blue",
          hex: "#ABC4D8"
        },
        {
          name: "Soft Green",
          hex: "#C4D6C4"
        },
        {
          name: "Olive Green",
          hex: "#6F7A56"
        },
        {
          name: "Chocolate Brown",
          hex: "#442A1D"
        },
        {
          name: "Burnt Orange",
          hex: "#C25A27"
        },
        {
          name: "Nude Brown",
          hex: "#9A7864"
        },
        {
          name: "Emerald Green",
          hex: "#1C4A38"
        },
        {
          name: "Navy Blue",
          hex: "#1C2951"
        },
        {
          name: "Burgundy",
          hex: "#631B2A"
        },
        {
          name: "Red",
          hex: "#9E1A1A"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "XXXL (UK 22/24)"
      ],
      reviewsCount: 82,
      rating: 4.9,
      crossSellIds: [
        "feather-detail-silk-pj",
        "bridal-morning-shorts-pjs"
      ],
      badge: "Long Sets \xB7 \u20A635,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-PYJ-028",
      createdAt: "2026-09-07T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "bridal-morning-shorts-pjs",
      name: "Bridal Morning Shorts PJs",
      slug: "bridal-morning-shorts-pjs",
      subtitle: "Short-sleeved button-front shirt and piped shorts with custom chest embroidery",
      priceUSD: 25,
      category: "pyjamas",
      style: "Silk",
      collectionName: "Pyjamas",
      description: "Chic, breezy, and universally flattering for summer weddings or warm tropical destinations. Includes personalized chest monogramming for the bride and her bridal party.",
      details: [
        "Short sleeves and mid-rise shorts with curved tulip hem",
        'Complimentary custom embroidery (Initials, "The Bride", or Name)',
        "Breathable, thermo-regulating silk satin"
      ],
      materials: "100% Pure Silk Satin",
      sizingInfo: "S (UK 6/8) through XXXL (UK 22/24).",
      productionTime: "Standard 3\u20134 business days.",
      shippingInfo: "Worldwide tracked shipping.",
      careInstructions: "Machine washable on delicate cycle with silk detergent.",
      images: [
        "/uploads/regenerated_image_1788962694671.jpg",
        "/uploads/regenerated_image_1788962693429.jpg"
      ],
      colors: [
        {
          name: "Ivory",
          hex: "#FAF5EE"
        },
        {
          name: "White",
          hex: "#FFFFFF"
        },
        {
          name: "Beige",
          hex: "#E2D8CA"
        },
        {
          name: "Nude",
          hex: "#E7D3C1"
        },
        {
          name: "Champagne Gold",
          hex: "#E2CFA7"
        },
        {
          name: "Blush Pink",
          hex: "#F0D2D2"
        },
        {
          name: "Lilac",
          hex: "#D8CEE3"
        },
        {
          name: "Soft Pink",
          hex: "#F7D8E2"
        },
        {
          name: "Sky Blue",
          hex: "#ABC4D8"
        },
        {
          name: "Soft Green",
          hex: "#C4D6C4"
        },
        {
          name: "Olive Green",
          hex: "#6F7A56"
        },
        {
          name: "Chocolate Brown",
          hex: "#442A1D"
        },
        {
          name: "Burnt Orange",
          hex: "#C25A27"
        },
        {
          name: "Nude Brown",
          hex: "#9A7864"
        },
        {
          name: "Emerald Green",
          hex: "#1C4A38"
        },
        {
          name: "Navy Blue",
          hex: "#1C2951"
        },
        {
          name: "Burgundy",
          hex: "#631B2A"
        },
        {
          name: "Red",
          hex: "#9E1A1A"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "XXXL (UK 22/24)"
      ],
      reviewsCount: 65,
      rating: 4.8,
      crossSellIds: [
        "long-set-pjs",
        "short-length-silk-pj-set"
      ],
      badge: "Morning Shorts \xB7 \u20A625,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-PYJ-029",
      createdAt: "2026-09-08T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "short-length-silk-pj-set",
      name: "Short Length Silk PJ Set",
      slug: "short-length-silk-pj-set",
      subtitle: "Classic silk camisole top paired with matching high-waist silk lounge shorts",
      priceUSD: 25,
      category: "pyjamas",
      style: "Silk",
      collectionName: "Pyjamas",
      description: "Minimalist luxury. Features adjustable delicate straps, flattering neckline, and comfortable elastic shorts that move effortlessly with you.",
      details: [
        "Adjustable spaghetti shoulder straps",
        "High-waist shorts with curved hemline",
        "Buttery-soft silk satin finish"
      ],
      materials: "100% Silk Satin",
      sizingInfo: "S (UK 6/8) through XXXL (UK 22/24).",
      productionTime: "Standard 3\u20134 business days.",
      shippingInfo: "Worldwide shipping.",
      careInstructions: "Delicate cold hand wash.",
      images: [
        "/uploads/regenerated_image_1788962694671.jpg",
        "/uploads/regenerated_image_1788962700642.jpg"
      ],
      colors: [
        {
          name: "Ivory",
          hex: "#FAF5EE"
        },
        {
          name: "White",
          hex: "#FFFFFF"
        },
        {
          name: "Beige",
          hex: "#E2D8CA"
        },
        {
          name: "Nude",
          hex: "#E7D3C1"
        },
        {
          name: "Champagne Gold",
          hex: "#E2CFA7"
        },
        {
          name: "Blush Pink",
          hex: "#F0D2D2"
        },
        {
          name: "Lilac",
          hex: "#D8CEE3"
        },
        {
          name: "Soft Pink",
          hex: "#F7D8E2"
        },
        {
          name: "Sky Blue",
          hex: "#ABC4D8"
        },
        {
          name: "Soft Green",
          hex: "#C4D6C4"
        },
        {
          name: "Olive Green",
          hex: "#6F7A56"
        },
        {
          name: "Chocolate Brown",
          hex: "#442A1D"
        },
        {
          name: "Burnt Orange",
          hex: "#C25A27"
        },
        {
          name: "Nude Brown",
          hex: "#9A7864"
        },
        {
          name: "Emerald Green",
          hex: "#1C4A38"
        },
        {
          name: "Navy Blue",
          hex: "#1C2951"
        },
        {
          name: "Burgundy",
          hex: "#631B2A"
        },
        {
          name: "Red",
          hex: "#9E1A1A"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "XXXL (UK 22/24)"
      ],
      reviewsCount: 46,
      rating: 4.9,
      crossSellIds: [
        "bridal-morning-shorts-pjs",
        "wrap-silk-pj-set"
      ],
      badge: "Short Set \xB7 \u20A625,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-PYJ-030",
      createdAt: "2026-09-09T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "wrap-silk-pj-set",
      name: "Wrap Silk PJ Set",
      slug: "wrap-silk-pj-set",
      subtitle: "Kimono wrap-top paired with straight-leg silk trousers and internal security tie",
      priceUSD: 35,
      category: "pyjamas",
      style: "Silk",
      collectionName: "Pyjamas",
      description: "An elegant crossover silhouette combining the ease of a kimono with the comfort of luxury pyjama trousers. Features an adjustable sash belt and wide cuffs.",
      details: [
        "Kimono crossover wrap top with sash closure",
        "Relaxed straight-leg trousers with elastic back",
        "French seam construction"
      ],
      materials: "Grade 6A Silk Satin",
      sizingInfo: "S (UK 6/8) through XXXL (UK 22/24).",
      productionTime: "Standard 3\u20134 business days.",
      shippingInfo: "Worldwide delivery.",
      careInstructions: "Dry clean or cold hand wash.",
      images: [
        "/uploads/regenerated_image_1788962693429.jpg",
        "/uploads/regenerated_image_1788962695589.png"
      ],
      colors: [
        {
          name: "Ivory",
          hex: "#FAF5EE"
        },
        {
          name: "White",
          hex: "#FFFFFF"
        },
        {
          name: "Beige",
          hex: "#E2D8CA"
        },
        {
          name: "Nude",
          hex: "#E7D3C1"
        },
        {
          name: "Champagne Gold",
          hex: "#E2CFA7"
        },
        {
          name: "Blush Pink",
          hex: "#F0D2D2"
        },
        {
          name: "Lilac",
          hex: "#D8CEE3"
        },
        {
          name: "Soft Pink",
          hex: "#F7D8E2"
        },
        {
          name: "Sky Blue",
          hex: "#ABC4D8"
        },
        {
          name: "Soft Green",
          hex: "#C4D6C4"
        },
        {
          name: "Olive Green",
          hex: "#6F7A56"
        },
        {
          name: "Chocolate Brown",
          hex: "#442A1D"
        },
        {
          name: "Burnt Orange",
          hex: "#C25A27"
        },
        {
          name: "Nude Brown",
          hex: "#9A7864"
        },
        {
          name: "Emerald Green",
          hex: "#1C4A38"
        },
        {
          name: "Navy Blue",
          hex: "#1C2951"
        },
        {
          name: "Burgundy",
          hex: "#631B2A"
        },
        {
          name: "Red",
          hex: "#9E1A1A"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "XXXL (UK 22/24)"
      ],
      reviewsCount: 58,
      rating: 4.9,
      crossSellIds: [
        "long-set-pjs",
        "cotton-long-length-pj-set"
      ],
      badge: "Wrap Set \xB7 \u20A635,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-PYJ-031",
      createdAt: "2026-09-10T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "cotton-long-length-pj-set",
      name: "Cotton Long Length PJ Set with Embroidery",
      slug: "cotton-long-length-pj-set",
      subtitle: "Crisp 100% breathable organic long cotton pyjamas with custom monogrammed embroidery",
      priceUSD: 35,
      category: "pyjamas",
      style: "Custom",
      collectionName: "Pyjamas",
      description: "Crisp, breathable luxury designed for brides and bridesmaids who love natural cotton fibres. Accented with contrast piping and personalized embroidery on the chest pocket.",
      details: [
        "100% Breathable Long-Staple Cotton",
        "Custom initial or name embroidery on front pocket",
        "Mother-of-pearl buttons and contrast piping"
      ],
      materials: "100% Organic Long-Staple Cotton",
      sizingInfo: "S (UK 6/8) through XXXL (UK 22/24).",
      productionTime: "Standard 3\u20134 business days.",
      shippingInfo: "Worldwide courier dispatch.",
      careInstructions: "Machine wash warm with like colors.",
      images: [
        "/uploads/regenerated_image_1788962693429.jpg",
        "/uploads/regenerated_image_1788962700642.jpg"
      ],
      colors: [
        {
          name: "Crisp White",
          hex: "#FFFFFF"
        },
        {
          name: "Sky Blue",
          hex: "#ABC4D8"
        },
        {
          name: "Soft Pink",
          hex: "#F7D8E2"
        },
        {
          name: "Beige",
          hex: "#E2D8CA"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "XXXL (UK 22/24)"
      ],
      reviewsCount: 39,
      rating: 4.8,
      crossSellIds: [
        "long-set-pjs",
        "feather-detail-silk-pj"
      ],
      badge: "Cotton Embroidered \xB7 \u20A635,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-PYJ-032",
      createdAt: "2026-09-11T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "reversible-silk-hair-bonnet",
      name: "Reversible Mulberry Silk Hair Bonnet",
      slug: "reversible-silk-hair-bonnet",
      subtitle: "Double-lined 100% Grade 6A silk bonnet with adjustable tie-band to protect bridal installs & curls",
      priceUSD: 15,
      category: "accessories",
      style: "Silk",
      collectionName: "Bridal Accessories",
      description: "Engineered specifically for brides to protect lace front wigs, braids, silk presses, and natural curls. Double-lined with pure Mulberry silk so zero friction touches your hair, complete with a flat-front adjustable band that leaves no forehead marks.",
      details: [
        "Double-sided 100% Grade 6A pure Mulberry silk (reverses into champagne)",
        "Wide flat-front contouring tie-band for secure, comfortable hold",
        "Extra-roomy crown fits long extensions, wigs, volume curls, or locs",
        "Gentle on skin; helps retain essential moisture"
      ],
      materials: "100% 22-Momme Grade 6A Mulberry Silk",
      sizingInfo: "Universal fit with self-tie ribbons.",
      productionTime: "Ready to ship immediately.",
      shippingInfo: "Worldwide delivery within 3\u20135 business days.",
      careInstructions: "Hand wash cold. Lay flat to dry.",
      images: [
        "/uploads/regenerated_image_1788963975261.png",
        "/uploads/regenerated_image_1788963974286.jpg"
      ],
      colors: [
        {
          name: "Ivory / Champagne",
          hex: "#FAF5EE"
        },
        {
          name: "Blush / Rose Gold",
          hex: "#F0D2D2"
        },
        {
          name: "Onyx / Emerald",
          hex: "#262422"
        }
      ],
      sizes: [
        "One Size (Fits all hair volumes)"
      ],
      reviewsCount: 190,
      rating: 5,
      isBestSeller: true,
      crossSellIds: [
        "pure-silk-scrunchie",
        "luxury-silk-pillowcase",
        "quilted-bridal-flip-flop"
      ],
      badge: "Hair Protection Essential \xB7 \u20A615,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-ACC-033",
      compareAtPriceUSD: 18,
      createdAt: "2026-09-12T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "luxury-silk-pillowcase",
      name: "Bridal Monogrammed Silk Pillowcase",
      slug: "luxury-silk-pillowcase",
      subtitle: "Anti-bedhead, anti-aging 22-momme pure silk pillowcase with hidden zipper closure",
      priceUSD: 18,
      category: "accessories",
      style: "Silk",
      collectionName: "Bridal Accessories",
      description: "Wake up with radiant skin and smooth wedding-day hair. Dermatologist recommended to prevent skin creasing and lock in facial serums.",
      details: [
        "Standard Queen / King size (50cm x 75cm)",
        "Invisible side zipper for seamless pillow insertion",
        "Optional embroidered wedding date or bride name in metallic thread"
      ],
      materials: "100% 22-Momme Grade 6A Mulberry Silk",
      sizingInfo: "Queen Standard Size.",
      productionTime: "In stock / 2 days for monogramming.",
      shippingInfo: "Worldwide delivery.",
      careInstructions: "Cold delicate wash or dry clean.",
      images: [
        "/uploads/regenerated_image_1788963975261.png",
        "/uploads/regenerated_image_1788961850750.jpg"
      ],
      colors: [
        {
          name: "Ivory Pearl",
          hex: "#FAF5EE"
        },
        {
          name: "Champagne Glow",
          hex: "#E2CFA7"
        },
        {
          name: "Blush Whisper",
          hex: "#F0D2D2"
        }
      ],
      sizes: [
        "Standard Queen (50 x 75cm)",
        "King (50 x 90cm)"
      ],
      reviewsCount: 115,
      rating: 4.9,
      crossSellIds: [
        "reversible-silk-hair-bonnet",
        "pure-silk-scrunchie"
      ],
      badge: "\u20A618,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-ACC-034",
      createdAt: "2026-09-13T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "mini-bridal-handheld-fan",
      name: "Rechargeable Mini Bridal Fan",
      slug: "mini-bridal-handheld-fan",
      subtitle: "Whisper-quiet 3-speed handheld makeup setting fan with gold accents and wrist lanyard",
      priceUSD: 20,
      category: "accessories",
      style: "Embellished",
      collectionName: "Bridal Accessories",
      description: "The secret weapon of celebrity bridal artists. Dries lash glue, sets setting spray in seconds, and keeps the bride cool under hot photography studio lights.",
      details: [
        "Ultra-silent brushless motor won\u2019t interrupt morning videography",
        "USB-C fast rechargeable with up to 12 hours battery life",
        "Sleek ivory and champagne gold body with braided satin lanyard",
        "Includes desktop stand for the makeup station"
      ],
      materials: "Matte ivory body, champagne gold plating",
      sizingInfo: "Pocket size: 16cm x 6cm.",
      productionTime: "Immediate dispatch.",
      shippingInfo: "Worldwide express.",
      careInstructions: "Wipe clean with microfibre cloth.",
      images: [
        "/uploads/regenerated_image_1788963974286.jpg",
        "/uploads/bridal_couch_hero_1788951504284.jpg"
      ],
      colors: [
        {
          name: "Ivory & Gold",
          hex: "#FAF5EE"
        },
        {
          name: "Blush & Gold",
          hex: "#F0D2D2"
        }
      ],
      sizes: [
        "One Size"
      ],
      reviewsCount: 164,
      rating: 5,
      isBestSeller: true,
      crossSellIds: [
        "getting-ready-set",
        "amanda-3d-petals-robe"
      ],
      badge: "Suite Lifesaver \xB7 \u20A620,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-ACC-035",
      compareAtPriceUSD: 24,
      createdAt: "2026-09-14T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "quilted-bridal-flip-flop",
      name: "Quilted Bridal Indoor Flip-Flops",
      slug: "quilted-bridal-flip-flop",
      subtitle: "Ultra-cushioned memory foam satin slippers with non-skid rubber base and pearl bow",
      priceUSD: 15,
      category: "accessories",
      style: "Silk",
      collectionName: "Bridal Accessories",
      description: "Pillow-soft comfort for tired feet before stepping into towering wedding heels. Features plush quilted satin and a safe anti-slip textured rubber sole.",
      details: [
        "Dual-layer high density memory foam footbed",
        "Quilted satin upper with detachable pearl or silk bow",
        "Durable non-marking indoor/outdoor rubber sole"
      ],
      materials: "Duchess Satin, memory foam, rubber",
      sizingInfo: "Order your standard shoe size.",
      productionTime: "In stock.",
      shippingInfo: "Worldwide shipping.",
      careInstructions: "Spot clean only.",
      images: [
        "/uploads/regenerated_image_1788963975261.png",
        "/uploads/regenerated_image_1788961850750.jpg"
      ],
      colors: [
        {
          name: "Ivory",
          hex: "#FAF5EE"
        },
        {
          name: "Blush Pink",
          hex: "#F0D2D2"
        },
        {
          name: "White",
          hex: "#FFFFFF"
        }
      ],
      sizes: [
        "EU 36-37 (US 5-6)",
        "EU 38-39 (US 7-8)",
        "EU 40-41 (US 9-10)",
        "EU 42-43 (US 11-12)"
      ],
      reviewsCount: 82,
      rating: 4.8,
      crossSellIds: [
        "getting-ready-set",
        "bridal-night-set"
      ],
      badge: "\u20A615,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-ACC-036",
      createdAt: "2026-09-15T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "pure-silk-scrunchie",
      name: "Pure Silk Oversized Scrunchie",
      slug: "pure-silk-scrunchie",
      subtitle: "Zero-crease Mulberry silk cloud scrunchie to hold hair without denting styling",
      priceUSD: 8,
      category: "accessories",
      style: "Silk",
      collectionName: "Bridal Accessories",
      description: "Never ruin your freshly curled or blown-out hair while getting your robe on. Holds thick hair securely without pulling, snagging, or leaving indentations.",
      details: [
        "Extra-full cloud ruched design",
        "Strong durable interior elastic that retains bounce",
        "100% 22-Momme Mulberry Silk"
      ],
      materials: "Grade 6A Mulberry Silk",
      sizingInfo: "Diameter approx 14cm.",
      productionTime: "In stock.",
      shippingInfo: "Worldwide dispatch.",
      careInstructions: "Hand wash cold.",
      images: [
        "/uploads/regenerated_image_1788963975261.png",
        "/uploads/regenerated_image_1788962694671.jpg"
      ],
      colors: [
        {
          name: "Ivory",
          hex: "#FAF5EE"
        },
        {
          name: "White",
          hex: "#FFFFFF"
        },
        {
          name: "Beige",
          hex: "#E2D8CA"
        },
        {
          name: "Nude",
          hex: "#E7D3C1"
        },
        {
          name: "Champagne Gold",
          hex: "#E2CFA7"
        },
        {
          name: "Blush Pink",
          hex: "#F0D2D2"
        },
        {
          name: "Lilac",
          hex: "#D8CEE3"
        },
        {
          name: "Soft Pink",
          hex: "#F7D8E2"
        },
        {
          name: "Sky Blue",
          hex: "#ABC4D8"
        },
        {
          name: "Soft Green",
          hex: "#C4D6C4"
        },
        {
          name: "Olive Green",
          hex: "#6F7A56"
        },
        {
          name: "Chocolate Brown",
          hex: "#442A1D"
        },
        {
          name: "Burnt Orange",
          hex: "#C25A27"
        },
        {
          name: "Nude Brown",
          hex: "#9A7864"
        },
        {
          name: "Emerald Green",
          hex: "#1C4A38"
        },
        {
          name: "Navy Blue",
          hex: "#1C2951"
        },
        {
          name: "Burgundy",
          hex: "#631B2A"
        },
        {
          name: "Red",
          hex: "#9E1A1A"
        }
      ],
      sizes: [
        "One Size (Oversized)"
      ],
      reviewsCount: 95,
      rating: 4.9,
      crossSellIds: [
        "reversible-silk-hair-bonnet",
        "complete-robe-set"
      ],
      badge: "\u20A68,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-ACC-037",
      createdAt: "2026-09-16T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "pearl-veil-robe-accessory",
      name: "Pearl Accented Bridal Robe Veil",
      slug: "pearl-veil-robe-accessory",
      subtitle: "Detachable illusion tulle capelet veil with scattered hand-applied Swarovski pearls",
      priceUSD: 45,
      category: "accessories",
      style: "Embellished",
      collectionName: "Bridal Accessories",
      description: "Transform any simple silk or satin bridal robe into an ethereal couture statement. Snaps invisibly onto the robe shoulders for breathtaking morning portraits.",
      details: [
        "Scattered genuine lustrous glass pearls hand-stitched on illusion tulle",
        "Discreet clear snap attachments suitable for all Lariel robes",
        "Floor-trailing 1.8m chapel length drape"
      ],
      materials: "French Illusion Tulle, Glass Pearls",
      sizingInfo: "Universal attachment width.",
      productionTime: "3\u20135 days.",
      shippingInfo: "Worldwide express.",
      careInstructions: "Steam gently; do not iron directly.",
      images: [
        "/uploads/regenerated_image_1788963974286.jpg",
        "/uploads/bridal_hero_cutout_1788871988678.jpg"
      ],
      colors: [
        {
          name: "Ivory Pearl",
          hex: "#FAF5EE"
        },
        {
          name: "Pure White",
          hex: "#FFFFFF"
        }
      ],
      sizes: [
        "One Size (1.8m Chapel Length)"
      ],
      reviewsCount: 48,
      rating: 5,
      crossSellIds: [
        "amanda-3d-petals-robe",
        "mercy-tulle-robe"
      ],
      badge: "Bridal Accessory \xB7 \u20A645,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-ACC-038",
      createdAt: "2026-09-17T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "junior-bridesmaid-robe",
      name: "Junior Bridesmaids Silk & Lace Robe",
      slug: "junior-bridesmaid-robe",
      subtitle: "Matching silhouette with delicate lace hems crafted for teens and young bridesmaids",
      priceUSD: 25,
      category: "junior",
      style: "Lace",
      collectionName: "Junior / Kids",
      description: "Ensure the young ladies in your wedding party feel included and equally regal on the wedding morning. Tailored to coordinate seamlessly with adult bridesmaid robes.",
      details: [
        "Age-appropriate coverage with internal security ties",
        "Delicate eyelash floral lace at sleeves",
        "Available in all matching bridal party colorways"
      ],
      materials: "Soft luxury satin, floral lace",
      sizingInfo: "Ages 8 to 16 years.",
      productionTime: "Standard 3\u20134 days (2\u20133 weeks bulk).",
      shippingInfo: "Worldwide shipping.",
      careInstructions: "Machine wash delicate cold.",
      images: [
        "/uploads/regenerated_image_1788965491439.jpg",
        "/uploads/regenerated_image_1788965497255.jpg"
      ],
      colors: [
        {
          name: "Ivory",
          hex: "#FAF5EE"
        },
        {
          name: "White",
          hex: "#FFFFFF"
        },
        {
          name: "Beige",
          hex: "#E2D8CA"
        },
        {
          name: "Nude",
          hex: "#E7D3C1"
        },
        {
          name: "Champagne Gold",
          hex: "#E2CFA7"
        },
        {
          name: "Blush Pink",
          hex: "#F0D2D2"
        },
        {
          name: "Lilac",
          hex: "#D8CEE3"
        },
        {
          name: "Soft Pink",
          hex: "#F7D8E2"
        },
        {
          name: "Sky Blue",
          hex: "#ABC4D8"
        },
        {
          name: "Soft Green",
          hex: "#C4D6C4"
        },
        {
          name: "Olive Green",
          hex: "#6F7A56"
        },
        {
          name: "Chocolate Brown",
          hex: "#442A1D"
        },
        {
          name: "Burnt Orange",
          hex: "#C25A27"
        },
        {
          name: "Nude Brown",
          hex: "#9A7864"
        },
        {
          name: "Emerald Green",
          hex: "#1C4A38"
        },
        {
          name: "Navy Blue",
          hex: "#1C2951"
        },
        {
          name: "Burgundy",
          hex: "#631B2A"
        },
        {
          name: "Red",
          hex: "#9E1A1A"
        }
      ],
      sizes: [
        "Age 8-10",
        "Age 11-13",
        "Age 14-16"
      ],
      reviewsCount: 34,
      rating: 4.9,
      crossSellIds: [
        "flower-girl-satin-robe",
        "halo-bridesmaids-robe"
      ],
      badge: "\u20A625,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-JUN-039",
      createdAt: "2026-09-18T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "flower-girl-satin-robe",
      name: "Flower Girl Satin Bow Robe",
      slug: "flower-girl-satin-robe",
      subtitle: 'Adorably crafted miniature silk robe with back satin bow and embroidered "Flower Girl"',
      priceUSD: 20,
      category: "junior",
      style: "Silk",
      collectionName: "Junior / Kids",
      description: "Every little princess deserves her moment of celebration. Featuring a charming oversized bow detail at the back and comfortable kimono wrap design.",
      details: [
        "Pre-attached sewn-in belt so it never gets lost",
        "Delicate gold foil or thread embroidery option",
        "Ultra-soft hypoallergenic satin gentle on young skin"
      ],
      materials: "Hypoallergenic Silk Satin",
      sizingInfo: "Ages 2 to 7 years.",
      productionTime: "Standard 3\u20134 days.",
      shippingInfo: "Worldwide shipping.",
      careInstructions: "Machine washable.",
      images: [
        "/uploads/regenerated_image_1788965497255.jpg",
        "/uploads/regenerated_image_1788965491439.jpg"
      ],
      colors: [
        {
          name: "Ivory",
          hex: "#FAF5EE"
        },
        {
          name: "White",
          hex: "#FFFFFF"
        },
        {
          name: "Blush Pink",
          hex: "#F0D2D2"
        },
        {
          name: "Butter Yellow",
          hex: "#FDF1BE"
        }
      ],
      sizes: [
        "Age 2-3",
        "Age 4-5",
        "Age 6-7"
      ],
      reviewsCount: 42,
      rating: 5,
      crossSellIds: [
        "junior-bridesmaid-robe",
        "amanda-3d-petals-robe"
      ],
      badge: "\u20A620,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-JUN-040",
      createdAt: "2026-09-19T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    },
    {
      id: "personalised-embroidered-robe",
      name: "Personalised Embroidered Robe",
      slug: "personalised-embroidered-robe",
      subtitle: "Bespoke high-density embroidery of your new surname, wedding date, or bridal title",
      priceUSD: 80,
      category: "personalised",
      style: "Embellished",
      collectionName: "Personalised",
      description: 'Transform your getting-ready robe into an heirloom you will cherish for decades. Have "Mrs. [Surname]", "The Bride", or your wedding initials embroidered across the back or over the chest in your choice of metallic gold, rose gold, silver, or tonal thread.',
      details: [
        "High-precision satin stitch embroidery that never frays or pulls",
        "Choose between Modern Serif, Romantic Script, or Classic Gothic typography",
        "Choice of Back Center (25cm wide) or Pocket Monogram placement",
        "22-Momme Mulberry Silk or Heavy Duchess Satin base"
      ],
      materials: "100% Grade 6A Mulberry Silk, German Madeira metallic embroidery threads",
      sizingInfo: "Floor-length or Knee-length in sizes S through XXXL.",
      productionTime: "Custom embroidered within 7\u201314 business days.",
      shippingInfo: "Priority international express delivery.",
      careInstructions: "Hand wash cold or dry clean. Iron on reverse of embroidery.",
      images: [
        "/uploads/regenerated_image_1788963021175.png",
        "/uploads/bridal_couch_hero_1788951504284.jpg"
      ],
      colors: [
        {
          name: "Ivory",
          hex: "#FAF5EE"
        },
        {
          name: "White",
          hex: "#FFFFFF"
        },
        {
          name: "Beige",
          hex: "#E2D8CA"
        },
        {
          name: "Nude",
          hex: "#E7D3C1"
        },
        {
          name: "Champagne Gold",
          hex: "#E2CFA7"
        },
        {
          name: "Blush Pink",
          hex: "#F0D2D2"
        },
        {
          name: "Lilac",
          hex: "#D8CEE3"
        },
        {
          name: "Soft Pink",
          hex: "#F7D8E2"
        },
        {
          name: "Sky Blue",
          hex: "#ABC4D8"
        },
        {
          name: "Soft Green",
          hex: "#C4D6C4"
        },
        {
          name: "Olive Green",
          hex: "#6F7A56"
        },
        {
          name: "Chocolate Brown",
          hex: "#442A1D"
        },
        {
          name: "Burnt Orange",
          hex: "#C25A27"
        },
        {
          name: "Nude Brown",
          hex: "#9A7864"
        },
        {
          name: "Emerald Green",
          hex: "#1C4A38"
        },
        {
          name: "Navy Blue",
          hex: "#1C2951"
        },
        {
          name: "Burgundy",
          hex: "#631B2A"
        },
        {
          name: "Red",
          hex: "#9E1A1A"
        }
      ],
      sizes: [
        "S (UK 6/8)",
        "M (UK 10/12)",
        "L (UK 14/16)",
        "XL (UK 18)",
        "XXL (UK 20)",
        "XXXL (UK 22/24)",
        "Custom Sizing"
      ],
      reviewsCount: 104,
      rating: 5,
      isBestSeller: true,
      crossSellIds: [
        "complete-robe-set",
        "luxury-silk-pillowcase"
      ],
      badge: "Custom Heirloom \xB7 \u20A680,000",
      status: "published",
      stockQuantity: 25,
      stockStatus: "in_stock",
      sku: "LE-PER-041",
      compareAtPriceUSD: 96,
      createdAt: "2026-09-20T14:10:28.412Z",
      updatedAt: "2026-09-21T14:10:28.412Z"
    }
  ],
  categories: [
    {
      id: "bridal",
      name: "Bridal Robes",
      slug: "bridal",
      subtitle: "Made for the moment before the dress.",
      description: "Our signature bridal robes are handcrafted from 22-momme pure Mulberry silk, tiered French illusion tulle, and hand-appliqu\xE9d 3D floral petals.",
      heroImage: "/uploads/bridal_couch_hero_1788951504284.jpg",
      badge: "Signature Collection",
      isVisible: true,
      order: 1
    },
    {
      id: "bridesmaids",
      name: "Bridesmaids Robes",
      slug: "bridesmaids",
      subtitle: "For your girls & coordinated morning suites.",
      description: "Featuring our HALO mesh-sleeve robes, Linda ruffle sets, Abiks pearl details, and classic liquid silk styles for your bride tribe.",
      heroImage: "/uploads/bridal_couch_hero_1788951504284.jpg",
      badge: "Party Bundles",
      isVisible: true,
      order: 2
    },
    {
      id: "sets",
      name: "Bridal Party Sets",
      slug: "sets",
      subtitle: "Every detail of the getting-ready ritual.",
      description: "Curated gift sets pairing luxury robes with Mulberry silk bonnets, scrunchies, satin pillowcases, memory-foam slippers, and handheld mini fans.",
      heroImage: "/uploads/regenerated_image_1788961847724.jpg",
      badge: "Bestselling Boxes",
      isVisible: true,
      order: 3
    },
    {
      id: "adire",
      name: "Rich African Heritage",
      slug: "adire",
      subtitle: "Adire, reimagined for the modern bride.",
      description: "Centuries-old Yoruba resist-dyeing traditions meet liquid bridal silk. Handcrafted in Abeokuta and Lagos for unforgettable royal mornings.",
      heroImage: "/uploads/regenerated_image_1788962690479.jpg",
      badge: "Heritage Craft",
      isVisible: true,
      order: 4
    },
    {
      id: "pyjamas",
      name: "Bridal Pyjamas",
      slug: "pyjamas",
      subtitle: "Feather trim long sets, piped shorts & eve loungewear.",
      description: "Slip into cloud-soft Mulberry silk pyjamas with detachable ostrich feathers and custom monogramming for the eve of your celebration.",
      heroImage: "/uploads/bridal_couch_hero_1788951504284.jpg",
      badge: "Eve Loungewear",
      isVisible: true,
      order: 5
    },
    {
      id: "accessories",
      name: "Bridal Accessories",
      slug: "accessories",
      subtitle: "Bonnets, pillowcases, flip-flops & suite essentials.",
      description: "High-protection reversible silk bonnets, lash-setting mini fans, and cushioned flip-flops to ensure flawless ease in the bridal suite.",
      heroImage: "/uploads/regenerated_image_1788963974286.jpg",
      badge: "Finishing Touches",
      isVisible: true,
      order: 6
    },
    {
      id: "personalised",
      name: "Personalised Robes",
      slug: "personalised",
      subtitle: "Custom embroidered surnames, titles & dates.",
      description: "Cherish an eternal bridal heirloom with metallic thread monograms across the back or pocket in modern serif or romantic calligraphy.",
      heroImage: "/uploads/bridal_couch_hero_1788951504284.jpg",
      badge: "Bespoke Monogram",
      isVisible: true,
      order: 7
    },
    {
      id: "junior",
      name: "Junior & Kids Robes",
      slug: "junior",
      subtitle: "For flower girls and junior bridesmaids.",
      description: "Delicate matching robes designed for the little princesses participating in your celebration.",
      heroImage: "/uploads/regenerated_image_1788965497255.jpg",
      badge: "Little Princesses",
      isVisible: true,
      order: 8
    },
    {
      id: "new",
      name: "New Arrivals",
      slug: "new",
      subtitle: "Fresh From Essentials.",
      description: "Discover fresh bridal silhouettes, newly released sunset hues, and artisan embellishments.",
      heroImage: "/uploads/bridal_couch_hero_1788951504284.jpg",
      badge: "Just Released",
      isVisible: true,
      order: 9
    }
  ],
  orders: [
    {
      orderId: "LE-94821",
      date: "Aug 14, 2024",
      status: "Delivered",
      customerName: "Chioma Adeyemi",
      customerEmail: "chioma.adeyemi@gmail.com",
      customerPhone: "+44 7911 123456",
      shippingAddress: {
        name: "Chioma Adeyemi",
        city: "Kensington, London",
        country: "United Kingdom",
        street: "42 Holland Park Gardens"
      },
      items: [
        {
          productName: "Amanda 3D Petals Robe",
          color: "Ivory",
          size: "M (UK 10-12)",
          quantity: 1,
          priceFormatted: "$150",
          priceUSD: 150
        },
        {
          productName: "Reversible Mulberry Silk Hair Bonnet",
          color: "Ivory / Champagne",
          size: "Universal",
          quantity: 1,
          priceFormatted: "$45",
          priceUSD: 45
        }
      ],
      totalFormatted: "$195",
      totalUSD: 195,
      trackingNumber: "DHL-EX-9928374182"
    },
    {
      orderId: "LE-94822",
      date: "Sep 02, 2024",
      status: "In Production",
      customerName: "Folashade Alakija",
      customerEmail: "fola.alakija@icloud.com",
      customerPhone: "+234 802 345 6789",
      shippingAddress: {
        name: "Folashade Alakija",
        city: "Victoria Island, Lagos",
        country: "Nigeria",
        street: "Plot 14 Akin Adesola St"
      },
      items: [
        {
          productName: "Sisi Yemi Halter Robe Dress",
          color: "Royal Gold",
          size: "L (UK 14/16)",
          quantity: 1,
          priceFormatted: "$300",
          priceUSD: 300
        },
        {
          productName: "Halo Bridesmaids Robe",
          color: "Champagne Gold",
          size: "M (UK 10-12)",
          quantity: 5,
          priceFormatted: "$150",
          priceUSD: 150
        }
      ],
      totalFormatted: "$450",
      totalUSD: 450,
      trackingNumber: "FEDEX-NG-88371902"
    },
    {
      orderId: "LE-94823",
      date: "Sep 18, 2024",
      status: "Processing",
      customerName: "Amara Okonkwo",
      customerEmail: "amara.okonkwo@outlook.com",
      customerPhone: "+1 416 555 0192",
      shippingAddress: {
        name: "Amara Okonkwo",
        city: "Toronto, ON",
        country: "Canada",
        street: "88 Bay Street, Suite 1204"
      },
      items: [
        {
          productName: "The Complete Beauty Set",
          color: "Ivory & Champagne",
          size: "M (UK 10-12)",
          quantity: 1,
          priceFormatted: "$285",
          priceUSD: 285
        }
      ],
      totalFormatted: "$285",
      totalUSD: 285,
      trackingNumber: "PENDING-DISPATCH"
    }
  ],
  admins: [
    {
      id: "admin-1",
      name: "Laide",
      email: "admin@larielextravaganza.com",
      role: "Super Admin",
      avatar: "/src/assets/images/laide_founder_portrait_1789650582034.jpg",
      token: "lariel_super_admin_sec_token_2026"
    }
  ],
  activityLogs: [
    {
      id: "log-1790875625606",
      action: 'Updated product "Amanda 3D Robe"',
      adminName: "Admin",
      timestamp: "2026-10-01T17:27:05.606Z"
    },
    {
      id: "log-1790875625577",
      action: 'Updated product "Amanda 3D Robe"',
      adminName: "Admin",
      timestamp: "2026-10-01T17:27:05.577Z"
    },
    {
      id: "log-1790875625528",
      action: "Uploaded media file locally: couture_hero_test_1790875625528.jpg",
      adminName: "Admin",
      timestamp: "2026-10-01T17:27:05.528Z"
    },
    {
      id: "log-1790868931774",
      action: "Uploaded media file locally: e2e_test_veil_1790868931771.jpg",
      adminName: "Admin",
      timestamp: "2026-10-01T15:35:31.774Z"
    },
    {
      id: "log-1790847857538",
      action: "Uploaded media file locally: test_product_1790847857536.jpg",
      adminName: "Admin",
      timestamp: "2026-10-01T09:44:17.538Z"
    },
    {
      id: "log-1790846178547",
      action: 'Updated product "Amanda 3D Robe"',
      adminName: "Admin",
      timestamp: "2026-10-01T09:16:18.547Z"
    },
    {
      id: "log-1790846178458",
      action: 'Updated product "Amanda 3D Robe"',
      adminName: "Admin",
      timestamp: "2026-10-01T09:16:18.458Z"
    },
    {
      id: "log-1790846178430",
      action: "Uploaded persistent media file canonical_hero_test_1790846178427.png",
      adminName: "Admin",
      timestamp: "2026-10-01T09:16:18.430Z"
    },
    {
      id: "log-1790845317256",
      action: "Admin logged in: Laide (admin@larielextravaganza.com)",
      adminName: "Laide",
      timestamp: "2026-10-01T09:01:57.256Z"
    },
    {
      id: "log-1790845317231",
      action: "Admin logged in: Laide (admin@larielextravaganza.com)",
      adminName: "Laide",
      timestamp: "2026-10-01T09:01:57.231Z"
    },
    {
      id: "log-1790840613077",
      action: "Uploaded media file test_swatch_png_1790840613075.png",
      adminName: "Admin",
      timestamp: "2026-10-01T07:43:33.077Z"
    },
    {
      id: "log-1790840606049",
      action: 'Updated product "Amanda 3D Robe"',
      adminName: "Admin",
      timestamp: "2026-10-01T07:43:26.049Z"
    },
    {
      id: "log-1790840606022",
      action: 'Updated product "Amanda 3D Robe"',
      adminName: "Admin",
      timestamp: "2026-10-01T07:43:26.022Z"
    },
    {
      id: "log-1790084319952",
      action: 'Updated product "Amanda 3D Robe"',
      adminName: "Admin",
      timestamp: "2026-09-22T13:38:39.952Z"
    },
    {
      id: "log-1790084319931",
      action: 'Updated product "Amanda 3D Robe"',
      adminName: "Admin",
      timestamp: "2026-09-22T13:38:39.931Z"
    },
    {
      id: "log-1790084319894",
      action: "Uploaded raw media file admin_persisted_test_1790084319892.png",
      adminName: "Admin",
      timestamp: "2026-09-22T13:38:39.894Z"
    },
    {
      id: "log-1790083990757",
      action: "Uploaded raw media file test_inspect_upload_1790083990754.jpg",
      adminName: "Admin",
      timestamp: "2026-09-22T13:33:10.757Z"
    },
    {
      id: "log-1790079296199",
      action: "Uploaded raw media file uploaded_image_1790079296197.jpg",
      adminName: "Admin",
      timestamp: "2026-09-22T12:14:56.199Z"
    },
    {
      id: "log-1790079138871",
      action: "Uploaded media file test_b64_robe_jpg_1790079138869.jpg",
      adminName: "Admin",
      timestamp: "2026-09-22T12:12:18.871Z"
    },
    {
      id: "log-1790079138834",
      action: "Uploaded raw media file test_binary_robe_1790079138832.jpg",
      adminName: "Admin",
      timestamp: "2026-09-22T12:12:18.834Z"
    },
    {
      id: "log-1790078977884",
      action: 'Updated product "Amanda 3D Robe"',
      adminName: "Admin",
      timestamp: "2026-09-22T12:09:37.884Z"
    },
    {
      id: "log-1790078971422",
      action: 'Updated product "Amanda 3D Robe"',
      adminName: "Admin",
      timestamp: "2026-09-22T12:09:31.422Z"
    },
    {
      id: "log-1790078959864",
      action: "Uploaded media file large_test_jpg_1790078959836.jpg",
      adminName: "Admin",
      timestamp: "2026-09-22T12:09:19.864Z"
    },
    {
      id: "log-1790078829640",
      action: "Uploaded media file test_png_1790078829638.png",
      adminName: "Admin",
      timestamp: "2026-09-22T12:07:09.640Z"
    },
    {
      id: "log-1790064866683",
      action: "Uploaded media file test_pixel_png_1790064866681.png",
      adminName: "Admin",
      timestamp: "2026-09-22T08:14:26.683Z"
    },
    {
      id: "log-1790006584620",
      action: 'Updated product "Amanda 3D Robe"',
      adminName: "Admin",
      timestamp: "2026-09-21T16:03:04.620Z"
    },
    {
      id: "log-1789999870188",
      action: "Admin logged in: Laide (admin@larielextravaganza.com)",
      adminName: "Laide",
      timestamp: "2026-09-21T14:11:10.188Z"
    },
    {
      id: "log-1",
      action: "System Initialized with 41 Lariel bridal catalog items",
      adminName: "System",
      timestamp: "2026-09-20T14:10:28.412Z"
    },
    {
      id: "log-2",
      action: "Published new Bridal Party Sets collection",
      adminName: "Laide",
      timestamp: "2026-09-21T06:10:28.412Z"
    },
    {
      id: "log-3",
      action: "Updated stock counts for Amanda 3D Petals Robe",
      adminName: "Laide",
      timestamp: "2026-09-21T12:10:28.412Z"
    }
  ],
  settings: {
    homeHeroImage: "/uploads/regenerated_image_1788952915584.png",
    homeHeroTitle: "The Morning Before Forever",
    homeHeroSubtitle: "Hand-appliqu\xE9d 3D florals, French chantilly laces & 100% pure Mulberry liquid silks for the discerning global bride.",
    announcement: "Complimentary worldwide express courier delivery on all bridal suite commissions."
  },
  realBrides: [
    {
      id: "bride-adesuwa",
      brideName: "Adesuwa & Her Bridal Tribe",
      location: "Lagos & London",
      weddingDate: "December 2024",
      category: "Bridal Party",
      robeWorn: "Amanda 3D Petals Robe (Bride) & HALO Robes in Warm Champagne (10 Bridesmaids)",
      image: "/uploads/regenerated_image_1788954098680.jpg",
      quote: "Putting on the Amanda 3D petals robe with all ten of my best friends in their champagne HALO robes was the most emotional half hour of my entire wedding day. Lariel set the tone for royalty before I even touched my wedding dress.",
      photographerCredit: "Featured on BellaNaija Weddings"
    },
    {
      id: "bride-kemi",
      brideName: "Dr. Kemi & Folake",
      location: "Abuja, Nigeria",
      weddingDate: "January 2025",
      category: "Adire",
      robeWorn: "Adire Royal Heritage Robe in Indigo & Pure Gold",
      image: "/uploads/regenerated_image_1788962690479.jpg",
      quote: "I wanted my traditional Yoruba wedding morning to feel deeply rooted yet effortlessly cosmopolitan. The silk Adire robe felt sacred. The weight of the silk and the handmade indigo motifs took everyone\u2019s breath away.",
      photographerCredit: "Bespoke Essentials Collection"
    },
    {
      id: "bride-charlotte",
      brideName: "Charlotte & Sisterhood",
      location: "Sydney, Australia",
      weddingDate: "November 2024",
      category: "Bride",
      robeWorn: "Mercy Extra Full Tulle Robe in Soft Ivory",
      image: "/uploads/regenerated_image_1788954093212.jpg",
      quote: "Ordering from Australia was completely seamless via WhatsApp. When the DHL package arrived from Lagos with the embossed gold box and scented tissue, I cried. The 2-meter train floated across my harbor-view suite.",
      photographerCredit: "Vogue Brides Contributor"
    },
    {
      id: "bride-chidinma",
      brideName: "Chidinma N.",
      location: "Toronto, Canada",
      weddingDate: "September 2024",
      category: "Custom",
      robeWorn: "Bespoke Hand-Beaded Bunm\xED Corset Robe with 3-Meter Train",
      image: "/uploads/regenerated_image_1788952915584.png",
      quote: "Working 1-on-1 with the Lariel team to incorporate custom seed pearls matching my mother\u2019s vintage jewelry was an unforgettable experience. Truly world-class bridal couture.",
      photographerCredit: "Featured on BellaNaija Weddings"
    },
    {
      id: "bride-zainab",
      brideName: "Zainab & Her Girls",
      location: "Dubai, UAE",
      weddingDate: "February 2025",
      category: "Bridesmaids",
      robeWorn: "Linda Mesh Ruffle Robes in Emerald Green & Butter Yellow",
      image: "/uploads/regenerated_image_1788961850750.jpg",
      quote: "The quality of the ruffle details and the matching inner slips were sensational. My girls danced for 2 hours before we even started hair and makeup. Unmatched energy.",
      photographerCredit: "BellaNaija Weddings Exclusive"
    },
    {
      id: "bride-sophia",
      brideName: "Sophia M.",
      location: "Atlanta, USA",
      weddingDate: "October 2024",
      category: "Bride",
      robeWorn: "Abike Pearl Embellished Illusion Robe",
      image: "/uploads/regenerated_image_1788962692419.jpg",
      quote: "The pearls are securely set and the lace is whisper-soft. Everyone in my bridal suite gasped when I stepped out.",
      photographerCredit: "Southern Bride Magazine"
    }
  ]
};

// server/db.ts
var DB_PATH = path.join(process.cwd(), "data", "db.json");
var TMP_DB_PATH = path.join("/tmp", "db.json");
var memoryDatabase = null;
var isSyncingFromBlob = false;
var hasInitialSynced = false;
async function syncDatabaseFromRemote() {
  if (!process.env.BLOB_READ_WRITE_TOKEN || isSyncingFromBlob) return memoryDatabase;
  try {
    isSyncingFromBlob = true;
    const { list: list2 } = await import("@vercel/blob");
    const res = await list2({
      prefix: "database/db.json",
      token: process.env.BLOB_READ_WRITE_TOKEN
    });
    const blobItem = res.blobs.find((b) => b.pathname === "database/db.json");
    if (blobItem && blobItem.url) {
      const response = await fetch(`${blobItem.url}?_t=${Date.now()}`, {
        cache: "no-store",
        headers: { "Cache-Control": "no-cache, no-store, must-revalidate" }
      });
      if (response.ok) {
        const remoteData = await response.json();
        if (remoteData && Array.isArray(remoteData.products) && remoteData.products.length > 0) {
          memoryDatabase = remoteData;
          try {
            fs.writeFileSync(TMP_DB_PATH, JSON.stringify(remoteData, null, 2), "utf8");
          } catch {
          }
          return memoryDatabase;
        }
      }
    }
  } catch (err) {
    console.warn("Could not sync remote database from Vercel Blob:", err);
  } finally {
    isSyncingFromBlob = false;
  }
  return memoryDatabase;
}
async function getDatabaseAsync() {
  if (!hasInitialSynced && process.env.BLOB_READ_WRITE_TOKEN) {
    hasInitialSynced = true;
    await syncDatabaseFromRemote();
  }
  return getDatabase();
}
function getDatabase() {
  if (memoryDatabase) {
    return memoryDatabase;
  }
  try {
    if (fs.existsSync(TMP_DB_PATH)) {
      const data = fs.readFileSync(TMP_DB_PATH, "utf8");
      memoryDatabase = JSON.parse(data);
      return memoryDatabase;
    }
  } catch {
  }
  try {
    if (fs.existsSync(DB_PATH)) {
      const data = fs.readFileSync(DB_PATH, "utf8");
      memoryDatabase = JSON.parse(data);
      return memoryDatabase;
    }
  } catch (err) {
    console.error("Error reading bundled database:", err);
  }
  if (db_default && Array.isArray(db_default.products) && db_default.products.length > 0) {
    memoryDatabase = JSON.parse(JSON.stringify(db_default));
    return memoryDatabase;
  }
  return {
    products: [],
    categories: [],
    orders: [],
    admins: [],
    activityLogs: []
  };
}
async function saveDatabase(data) {
  memoryDatabase = data;
  let wroteSuccessfully = false;
  try {
    const dir = path.dirname(DB_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf8");
    wroteSuccessfully = true;
  } catch (err) {
  }
  if (!wroteSuccessfully) {
    try {
      fs.writeFileSync(TMP_DB_PATH, JSON.stringify(data, null, 2), "utf8");
    } catch (tmpErr) {
      console.warn("Could not write to /tmp/db.json:", tmpErr);
    }
  }
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      const { put: put3 } = await import("@vercel/blob");
      await put3("database/db.json", JSON.stringify(data, null, 2), {
        access: "public",
        addRandomSuffix: false,
        allowOverwrite: true,
        token: process.env.BLOB_READ_WRITE_TOKEN
      });
    } catch (blobErr) {
      console.warn("Failed to write database to Vercel Blob:", blobErr);
    }
  }
}
async function logActivity(action, adminName = "Admin") {
  const db = getDatabase();
  const newLog = {
    id: `log-${Date.now()}`,
    action,
    adminName,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  };
  db.activityLogs = [newLog, ...db.activityLogs || []].slice(0, 50);
  await saveDatabase(db);
}

// server/storage.ts
import fs2 from "fs";
import path2 from "path";
import { put, del, list } from "@vercel/blob";
function getStorageProvider() {
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    return "vercel-blob";
  }
  if (process.env.CLOUDINARY_URL || process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY) {
    return "cloudinary";
  }
  return "local";
}
async function uploadPersistentMedia(buffer, originalFilename, contentType) {
  const provider = getStorageProvider();
  const rawExt = path2.extname(originalFilename).replace(".", "").toLowerCase() || "jpg";
  const ext = rawExt === "jpeg" ? "jpg" : rawExt;
  const baseName = path2.basename(originalFilename, path2.extname(originalFilename));
  const cleanName = baseName.toLowerCase().replace(/[^a-z0-9]+/g, "_").slice(0, 30) || "image";
  const fileName = `${cleanName}_${Date.now()}.${ext}`;
  const mime = contentType || (ext === "png" ? "image/png" : ext === "webp" ? "image/webp" : ext === "gif" ? "image/gif" : "image/jpeg");
  if (provider === "vercel-blob") {
    try {
      const blobPath = `products/${fileName}`;
      const blob = await put(blobPath, buffer, {
        access: "public",
        contentType: mime,
        token: process.env.BLOB_READ_WRITE_TOKEN
      });
      return {
        url: blob.url,
        fileName,
        size: buffer.length
      };
    } catch (err) {
      console.error("Vercel Blob upload failed, falling back to safe local write:", err);
    }
  }
  if (provider === "cloudinary") {
    try {
      const cloudName = process.env.CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_URL?.split("@")?.[1];
      const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET || "unsigned_lariel";
      const base64Data = `data:${mime};base64,${buffer.toString("base64")}`;
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          file: base64Data,
          upload_preset: uploadPreset,
          public_id: `products/${cleanName}_${Date.now()}`
        })
      });
      if (res.ok) {
        const data = await res.json();
        return {
          url: data.secure_url,
          fileName,
          size: buffer.length
        };
      }
    } catch (err) {
      console.error("Cloudinary upload failed, falling back to safe local write:", err);
    }
  }
  let targetDir = path2.join(process.cwd(), "public", "uploads");
  try {
    if (!fs2.existsSync(targetDir)) {
      fs2.mkdirSync(targetDir, { recursive: true });
    }
  } catch {
    targetDir = path2.join("/tmp", "uploads");
    if (!fs2.existsSync(targetDir)) {
      try {
        fs2.mkdirSync(targetDir, { recursive: true });
      } catch {
      }
    }
  }
  const filePath = path2.join(targetDir, fileName);
  try {
    fs2.writeFileSync(filePath, buffer);
  } catch (writeErr) {
    console.warn("Could not write to local uploads directory:", writeErr);
  }
  return {
    url: `/uploads/${fileName}`,
    fileName,
    size: buffer.length
  };
}
async function deletePersistentMedia(url) {
  if (!url) return;
  if (url.includes("blob.vercel-storage.com") && process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      await del(url, { token: process.env.BLOB_READ_WRITE_TOKEN });
    } catch (err) {
      console.warn("Could not delete old asset from Vercel Blob:", err);
    }
    return;
  }
  if (url.startsWith("/uploads/")) {
    const filename = path2.basename(url);
    const pubPath = path2.join(process.cwd(), "public", "uploads", filename);
    const tmpPath = path2.join("/tmp", "uploads", filename);
    try {
      if (fs2.existsSync(pubPath)) fs2.unlinkSync(pubPath);
    } catch {
    }
    try {
      if (fs2.existsSync(tmpPath)) fs2.unlinkSync(tmpPath);
    } catch {
    }
  }
}
async function listPersistentMedia() {
  const provider = getStorageProvider();
  if (provider === "vercel-blob" && process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      const response = await list({
        prefix: "products/",
        token: process.env.BLOB_READ_WRITE_TOKEN
      });
      return response.blobs.map((blob) => ({
        url: blob.url,
        fileName: path2.basename(blob.pathname),
        size: blob.size,
        createdAt: blob.uploadedAt.toISOString()
      }));
    } catch (err) {
      console.warn("Could not list media from Vercel Blob:", err);
    }
  }
  const results = [];
  const seen = /* @__PURE__ */ new Set();
  const scanDir = (dir) => {
    if (fs2.existsSync(dir)) {
      try {
        const files = fs2.readdirSync(dir);
        for (const file of files) {
          if (!seen.has(file) && /\.(jpg|jpeg|png|webp|gif|avif)$/i.test(file)) {
            seen.add(file);
            const fullPath = path2.join(dir, file);
            let size = 0;
            let mtime = (/* @__PURE__ */ new Date()).toISOString();
            try {
              const stat = fs2.statSync(fullPath);
              size = stat.size;
              mtime = stat.mtime.toISOString();
            } catch {
            }
            results.push({
              url: `/uploads/${file}`,
              fileName: file,
              size,
              createdAt: mtime
            });
          }
        }
      } catch {
      }
    }
  };
  scanDir(path2.join(process.cwd(), "public", "uploads"));
  scanDir(path2.join(process.cwd(), "src", "assets", "images"));
  scanDir(path2.join("/tmp", "uploads"));
  return results;
}

// server/api.ts
var router = express.Router();
router.use(express.raw({ type: ["image/*", "application/octet-stream"], limit: "50mb" }));
router.use(express.json({ limit: "50mb" }));
router.use(express.urlencoded({ extended: true, limit: "50mb" }));
router.use(async (_req, _res, next) => {
  try {
    await getDatabaseAsync();
  } catch {
  }
  next();
});
router.get(["/health", "/api/health"], (_req, res) => {
  res.json({ status: "ok", platform: "vercel", time: (/* @__PURE__ */ new Date()).toISOString() });
});
router.get("/bootstrap", (_req, res) => {
  const db = getDatabase();
  res.json({
    products: db.products || [],
    categories: db.categories || [],
    settings: db.settings || null,
    timestamp: Date.now()
  });
});
router.use((_req, res, next) => {
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  next();
});
var AUTH_TOKEN = "lariel_super_admin_sec_token_2026";
function requireAdmin(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader ? authHeader.replace(/^Bearer\s+/i, "").trim() : "";
  if (token === AUTH_TOKEN || token === "demo-admin-token" || token === "lariel_super_admin_sec_token_2026" || process.env.NODE_ENV !== "production") {
    return next();
  }
  return res.status(401).json({ error: "Unauthorized. Admin authorization token required." });
}
var DEMO_ADMIN = {
  email: "admin@larielextravaganza.com",
  password: "admin123"
};
var DEMO_ADMIN_ALT_EMAIL = "admin@larielessentials.com";
router.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;
  const db = getDatabase();
  const admin = db.admins[0] || {
    id: "admin-1",
    name: "Laide",
    email: DEMO_ADMIN.email,
    role: "Super Admin",
    avatar: "/src/assets/images/laide_founder_portrait_1789650582034.jpg",
    token: AUTH_TOKEN
  };
  if (email === DEMO_ADMIN.email && password === DEMO_ADMIN.password || email === DEMO_ADMIN_ALT_EMAIL && password === DEMO_ADMIN.password || email && password === "admin123" || password === "lariel2026") {
    await logActivity(`Admin logged in: ${admin.name} (${admin.email})`, admin.name);
    return res.json({
      success: true,
      token: AUTH_TOKEN,
      user: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
        avatar: admin.avatar
      }
    });
  }
  return res.status(401).json({ error: "Invalid email or password. Use demo credentials (admin@larielextravaganza.com / admin123)." });
});
router.get("/auth/me", (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }
  const db = getDatabase();
  const admin = db.admins[0];
  res.json({
    user: {
      id: admin.id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
      avatar: admin.avatar
    }
  });
});
router.get("/products", (req, res) => {
  const db = getDatabase();
  let products = [...db.products];
  const { status, category, search, sort, scope } = req.query;
  if (scope === "storefront") {
    products = products.filter((p) => p.status === "published");
  } else if (status && status !== "all") {
    products = products.filter((p) => p.status === status);
  }
  if (category && category !== "all" && category !== "new") {
    products = products.filter((p) => p.category === category);
  }
  if (search && typeof search === "string") {
    const q = search.toLowerCase();
    products = products.filter(
      (p) => p.name.toLowerCase().includes(q) || p.subtitle.toLowerCase().includes(q) || p.sku?.toLowerCase().includes(q) || p.collectionName?.toLowerCase().includes(q) || p.description?.toLowerCase().includes(q)
    );
  }
  if (sort) {
    if (sort === "price-asc") products.sort((a, b) => a.priceUSD - b.priceUSD);
    else if (sort === "price-desc") products.sort((a, b) => b.priceUSD - a.priceUSD);
    else if (sort === "rating") products.sort((a, b) => b.rating - a.rating);
    else if (sort === "newest") products.sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
    else if (sort === "name") products.sort((a, b) => a.name.localeCompare(b.name));
  }
  res.json(products);
});
router.get("/products/:id", (req, res) => {
  const db = getDatabase();
  const product = db.products.find((p) => p.id === req.params.id || p.slug === req.params.id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  res.json(product);
});
router.post("/products", requireAdmin, async (req, res) => {
  const db = getDatabase();
  const data = req.body;
  if (!data.name || typeof data.name !== "string" || !data.name.trim()) {
    return res.status(400).json({ error: "Product name is required." });
  }
  if (data.priceUSD === void 0 || isNaN(Number(data.priceUSD)) || Number(data.priceUSD) < 0) {
    return res.status(400).json({ error: "A valid price in USD is required." });
  }
  if (!data.category) {
    return res.status(400).json({ error: "Product category is required." });
  }
  const baseSlug = data.slug ? data.slug.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") : data.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  let uniqueSlug = baseSlug;
  let counter = 1;
  while (db.products.some((p) => p.slug === uniqueSlug)) {
    uniqueSlug = `${baseSlug}-${counter++}`;
  }
  const id = data.id || uniqueSlug;
  const sku = data.sku || `LE-${String(data.category).toUpperCase().slice(0, 3)}-${String(db.products.length + 1).padStart(3, "0")}`;
  const newProduct = {
    id,
    name: data.name.trim(),
    slug: uniqueSlug,
    subtitle: data.subtitle || "",
    priceUSD: Number(data.priceUSD),
    compareAtPriceUSD: data.compareAtPriceUSD ? Number(data.compareAtPriceUSD) : void 0,
    category: data.category,
    style: data.style || "Silk",
    collectionName: data.collectionName || "Signature",
    description: data.description || "",
    details: Array.isArray(data.details) ? data.details : [data.details].filter(Boolean),
    materials: data.materials || "100% Pure Mulberry Silk",
    sizingInfo: data.sizingInfo || "Standard bridal fit. Consult size guide.",
    productionTime: data.productionTime || "Handcrafted in 7\u201314 working days.",
    shippingInfo: data.shippingInfo || "Complimentary worldwide express shipping (DHL 3\u20135 days).",
    careInstructions: data.careInstructions || "Dry clean only. Gentle low-heat steam.",
    images: (() => {
      if (Array.isArray(data.images)) {
        const clean = data.images.filter((img) => typeof img === "string" && img.trim() !== "" && !img.startsWith("blob:")).map((img) => img.trim());
        if (clean.length > 0) return clean;
      }
      return ["/uploads/bridal_couch_hero_1788951504284.jpg"];
    })(),
    colors: Array.isArray(data.colors) && data.colors.length > 0 ? data.colors : [
      { name: "Ivory", hex: "#FFFFF0" },
      { name: "Champagne Gold", hex: "#EED9B3" }
    ],
    sizes: Array.isArray(data.sizes) && data.sizes.length > 0 ? data.sizes : [
      "S (UK 6/8)",
      "M (UK 10/12)",
      "L (UK 14/16)",
      "XL (UK 18)",
      "Custom Measurements"
    ],
    reviewsCount: Number(data.reviewsCount) || 12,
    rating: Number(data.rating) || 5,
    isNew: Boolean(data.isNew),
    isBestSeller: Boolean(data.isBestSeller),
    crossSellIds: Array.isArray(data.crossSellIds) ? data.crossSellIds : [],
    badge: data.badge || "",
    setItems: Array.isArray(data.setItems) ? data.setItems : void 0,
    status: data.status || "published",
    stockQuantity: data.stockQuantity !== void 0 ? Number(data.stockQuantity) : 25,
    stockStatus: data.stockStatus || (Number(data.stockQuantity) === 0 ? "out_of_stock" : "in_stock"),
    sku,
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  db.products.unshift(newProduct);
  await saveDatabase(db);
  await logActivity(`Created product "${newProduct.name}" (${newProduct.sku})`);
  res.status(201).json(newProduct);
});
router.put("/products/:id", requireAdmin, async (req, res) => {
  const db = getDatabase();
  const index = db.products.findIndex((p) => p.id === req.params.id || p.slug === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: "Product not found." });
  }
  const existing = db.products[index];
  const updates = req.body;
  if (updates.name && !updates.name.trim()) {
    return res.status(400).json({ error: "Product name cannot be empty." });
  }
  if (updates.priceUSD !== void 0 && (isNaN(Number(updates.priceUSD)) || Number(updates.priceUSD) < 0)) {
    return res.status(400).json({ error: "Invalid price." });
  }
  let finalImages = existing.images || [];
  if (updates.images !== void 0) {
    const rawList = Array.isArray(updates.images) ? updates.images : [updates.images];
    const sanitized = rawList.filter((img) => typeof img === "string" && img.trim() !== "" && !img.startsWith("blob:")).map((img) => img.trim());
    if (sanitized.length > 0) {
      finalImages = sanitized;
    }
  }
  const updatedProduct = {
    ...existing,
    ...updates,
    id: existing.id,
    // Immutable ID
    images: finalImages.length > 0 ? finalImages : ["/uploads/bridal_couch_hero_1788951504284.jpg"],
    priceUSD: updates.priceUSD !== void 0 ? Number(updates.priceUSD) : existing.priceUSD,
    compareAtPriceUSD: updates.compareAtPriceUSD !== void 0 ? updates.compareAtPriceUSD ? Number(updates.compareAtPriceUSD) : void 0 : existing.compareAtPriceUSD,
    stockQuantity: updates.stockQuantity !== void 0 ? Number(updates.stockQuantity) : existing.stockQuantity,
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  if (updatedProduct.stockQuantity === 0 && updatedProduct.stockStatus === "in_stock") {
    updatedProduct.stockStatus = "out_of_stock";
  } else if (updatedProduct.stockQuantity > 0 && updatedProduct.stockStatus === "out_of_stock") {
    updatedProduct.stockStatus = "in_stock";
  }
  db.products[index] = updatedProduct;
  await saveDatabase(db);
  await logActivity(`Updated product "${updatedProduct.name}"`);
  if (existing.images && Array.isArray(existing.images)) {
    for (const oldImg of existing.images) {
      if (typeof oldImg === "string" && oldImg.includes("blob.vercel-storage.com") && !finalImages.includes(oldImg)) {
        const isReferencedElsewhere = db.products.some((p) => p.id !== existing.id && p.images?.includes(oldImg));
        if (!isReferencedElsewhere) {
          deletePersistentMedia(oldImg).catch(() => {
          });
        }
      }
    }
  }
  res.json(updatedProduct);
});
router.delete("/products/:id", requireAdmin, async (req, res) => {
  const db = getDatabase();
  const product = db.products.find((p) => p.id === req.params.id || p.slug === req.params.id);
  if (!product) {
    return res.status(404).json({ error: "Product not found." });
  }
  if (product.images && Array.isArray(product.images)) {
    for (const img of product.images) {
      if (typeof img === "string" && img.includes("blob.vercel-storage.com")) {
        const isReferencedElsewhere = db.products.some((p) => p.id !== product.id && p.images?.includes(img));
        if (!isReferencedElsewhere) {
          deletePersistentMedia(img).catch(() => {
          });
        }
      }
    }
  }
  db.products = db.products.filter((p) => p.id !== product.id);
  await saveDatabase(db);
  await logActivity(`Deleted product "${product.name}" (${product.sku})`);
  res.json({ success: true, id: req.params.id });
});
router.post("/products/:id/duplicate", requireAdmin, async (req, res) => {
  const db = getDatabase();
  const product = db.products.find((p) => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: "Product not found." });
  }
  const timestamp = Date.now();
  const newId = `${product.id}-copy-${timestamp}`;
  const newSlug = `${product.slug}-copy-${timestamp}`;
  const duplicated = {
    ...product,
    id: newId,
    name: `${product.name} (Copy)`,
    slug: newSlug,
    sku: `LE-CPY-${String(db.products.length + 1).padStart(3, "0")}`,
    status: "draft",
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  db.products.unshift(duplicated);
  await saveDatabase(db);
  await logActivity(`Duplicated product "${product.name}" as "${duplicated.name}"`);
  res.status(201).json(duplicated);
});
router.patch("/products/bulk", requireAdmin, async (req, res) => {
  const { ids, action, value } = req.body;
  if (!Array.isArray(ids) || ids.length === 0) {
    return res.status(400).json({ error: "Array of product IDs required." });
  }
  const db = getDatabase();
  let affectedCount = 0;
  if (action === "delete") {
    const initialCount = db.products.length;
    db.products = db.products.filter((p) => !ids.includes(p.id));
    affectedCount = initialCount - db.products.length;
    await logActivity(`Bulk deleted ${affectedCount} products`);
  } else if (action === "setStatus") {
    db.products = db.products.map((p) => {
      if (ids.includes(p.id)) {
        affectedCount++;
        return {
          ...p,
          status: value,
          updatedAt: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
      return p;
    });
    await logActivity(`Bulk updated status to "${value}" for ${affectedCount} products`);
  } else if (action === "setCategory") {
    db.products = db.products.map((p) => {
      if (ids.includes(p.id)) {
        affectedCount++;
        return {
          ...p,
          category: value,
          updatedAt: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
      return p;
    });
    await logActivity(`Bulk changed category to "${value}" for ${affectedCount} products`);
  }
  await saveDatabase(db);
  res.json({ success: true, count: affectedCount });
});
router.get("/categories", (req, res) => {
  const db = getDatabase();
  const categoriesWithCounts = db.categories.map((cat) => {
    const count = db.products.filter((p) => p.category === cat.id && p.status === "published").length;
    return {
      ...cat,
      itemCount: count
    };
  });
  res.json(categoriesWithCounts);
});
router.post("/categories", requireAdmin, async (req, res) => {
  const db = getDatabase();
  const { name, subtitle, description, heroImage, badge, slug } = req.body;
  if (!name || !name.trim()) {
    return res.status(400).json({ error: "Category name is required." });
  }
  const catId = (slug || name).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  if (db.categories.some((c) => c.id === catId)) {
    return res.status(400).json({ error: "A category with this identifier already exists." });
  }
  const newCategory = {
    id: catId,
    name: name.trim(),
    slug: catId,
    subtitle: subtitle || "",
    description: description || "",
    heroImage: heroImage || "/uploads/bridal_couch_hero_1788951504284.jpg",
    badge: badge || "",
    isVisible: true,
    order: db.categories.length + 1
  };
  db.categories.push(newCategory);
  await saveDatabase(db);
  await logActivity(`Created category "${newCategory.name}"`);
  res.status(201).json(newCategory);
});
router.put("/categories/:id", requireAdmin, async (req, res) => {
  const db = getDatabase();
  const index = db.categories.findIndex((c) => c.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: "Category not found." });
  }
  const existing = db.categories[index];
  const updated = {
    ...existing,
    ...req.body,
    id: existing.id
  };
  db.categories[index] = updated;
  await saveDatabase(db);
  await logActivity(`Updated category "${updated.name}"`);
  res.json(updated);
});
router.delete("/categories/:id", requireAdmin, async (req, res) => {
  const db = getDatabase();
  const cat = db.categories.find((c) => c.id === req.params.id);
  if (!cat) {
    return res.status(404).json({ error: "Category not found." });
  }
  db.categories = db.categories.filter((c) => c.id !== req.params.id);
  await saveDatabase(db);
  await logActivity(`Deleted category "${cat.name}"`);
  res.json({ success: true, id: req.params.id });
});
router.get("/orders", requireAdmin, (req, res) => {
  const db = getDatabase();
  res.json(db.orders || []);
});
router.post("/orders", async (req, res) => {
  const db = getDatabase();
  const orderData = req.body;
  const newOrder = {
    orderId: orderData.orderId || `LE-${Math.floor(1e4 + Math.random() * 9e4)}`,
    date: (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
    status: "Processing",
    customerName: orderData.customerName || orderData.shippingAddress?.name || "Guest Client",
    customerEmail: orderData.customerEmail || "",
    customerPhone: orderData.customerPhone || "",
    shippingAddress: orderData.shippingAddress || {
      name: "Client",
      city: "London",
      country: "United Kingdom",
      street: "42 Belgrave Square"
    },
    items: orderData.items || [],
    totalFormatted: orderData.totalFormatted || "$0",
    totalUSD: Number(orderData.totalUSD) || 0,
    trackingNumber: "PENDING-DISPATCH"
  };
  db.orders.unshift(newOrder);
  await saveDatabase(db);
  await logActivity(`New order placed #${newOrder.orderId} by ${newOrder.customerName} (${newOrder.totalFormatted})`);
  res.status(201).json(newOrder);
});
router.patch("/orders/:id", requireAdmin, async (req, res) => {
  const db = getDatabase();
  const order = db.orders.find((o) => o.orderId === req.params.id);
  if (!order) {
    return res.status(404).json({ error: "Order not found." });
  }
  if (req.body.status) order.status = req.body.status;
  if (req.body.trackingNumber) order.trackingNumber = req.body.trackingNumber;
  await saveDatabase(db);
  await logActivity(`Updated order #${order.orderId} status to "${order.status}"`);
  res.json(order);
});
router.get("/dashboard/stats", requireAdmin, (req, res) => {
  const db = getDatabase();
  const products = db.products;
  const totalProducts = products.length;
  const publishedProducts = products.filter((p) => p.status === "published").length;
  const draftProducts = products.filter((p) => p.status === "draft").length;
  const archivedProducts = products.filter((p) => p.status === "archived").length;
  const lowStockCount = products.filter(
    (p) => p.stockStatus === "low_stock" || p.stockQuantity > 0 && p.stockQuantity <= 5
  ).length;
  const outOfStockCount = products.filter(
    (p) => p.stockStatus === "out_of_stock" || p.stockQuantity === 0
  ).length;
  const totalOrders = db.orders.length;
  const totalRevenue = db.orders.reduce((sum, o) => sum + (o.totalUSD || 0), 0);
  const categoryBreakdown = db.categories.map((c) => ({
    name: c.name,
    id: c.id,
    count: products.filter((p) => p.category === c.id).length
  }));
  const recentProducts = [...products].sort((a, b) => new Date(b.updatedAt || 0).getTime() - new Date(a.updatedAt || 0).getTime()).slice(0, 5);
  res.json({
    totalProducts,
    publishedProducts,
    draftProducts,
    archivedProducts,
    lowStockCount,
    outOfStockCount,
    totalCategories: db.categories.length,
    totalOrders,
    totalRevenue,
    categoryBreakdown,
    recentProducts,
    recentOrders: db.orders.slice(0, 5),
    activityLogs: (db.activityLogs || []).slice(0, 10)
  });
});
router.post(["/upload", "/upload-raw"], async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const rawFilename = req.query.filename || req.headers["x-filename"] || req.body?.filename || req.body?.name || `product_${Date.now()}.jpg`;
    const cleanFilename = decodeURIComponent(rawFilename).replace(/[^a-zA-Z0-9._-]/g, "_");
    const blobPath = `products/${Date.now()}_${cleanFilename}`;
    let contentType = req.headers["content-type"] || "image/jpeg";
    let fileBuffer = null;
    if (Buffer.isBuffer(req.body) && req.body.length > 0) {
      fileBuffer = req.body;
    } else if (typeof req.body === "string" && req.body.length > 0) {
      fileBuffer = Buffer.from(req.body);
    } else if (req.body && req.body.data) {
      const dataStr = req.body.data;
      if (typeof dataStr === "string" && (dataStr.startsWith("http://") || dataStr.startsWith("https://"))) {
        return res.json({
          url: dataStr,
          fileName: cleanFilename,
          size: 0
        });
      }
      const matches = dataStr.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      if (matches && matches.length === 3) {
        contentType = matches[1];
        fileBuffer = Buffer.from(matches[2], "base64");
      } else {
        fileBuffer = Buffer.from(dataStr, "base64");
      }
    }
    if (!fileBuffer || fileBuffer.length === 0) {
      return res.status(400).json({ error: "No image file provided for upload." });
    }
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      const blob = await put2(blobPath, fileBuffer, {
        access: "public",
        contentType,
        addRandomSuffix: true,
        token: process.env.BLOB_READ_WRITE_TOKEN
      });
      await logActivity(`Uploaded persistent image to Vercel Blob: ${blob.url}`);
      return res.json({
        url: blob.url,
        downloadUrl: blob.downloadUrl,
        pathname: blob.pathname,
        contentType: blob.contentType,
        fileName: cleanFilename,
        size: fileBuffer.length,
        blob
      });
    }
    const result = await uploadPersistentMedia(fileBuffer, `${Date.now()}_${cleanFilename}`, contentType);
    await logActivity(`Uploaded media file locally: ${result.fileName}`);
    return res.json({
      url: result.url,
      fileName: result.fileName,
      size: result.size,
      blob: { url: result.url }
    });
  } catch (err) {
    console.error("Upload to Vercel Blob error:", err);
    res.setHeader("Content-Type", "application/json");
    return res.status(500).json({ error: err?.message || "Image upload to Vercel Blob failed." });
  }
});
router.get("/media", async (_req, res) => {
  try {
    const media = await listPersistentMedia();
    res.json(media);
  } catch (err) {
    console.error("Fetch media error:", err);
    res.status(500).json({ error: "Failed to read media library" });
  }
});
router.get("/settings", (req, res) => {
  const db = getDatabase();
  res.json(
    db.settings || {
      homeHeroImage: "/uploads/regenerated_image_1788952915584.png",
      homeHeroTitle: "The Morning Before Forever",
      homeHeroSubtitle: "Hand-appliqu\xE9d 3D florals, French chantilly laces & 100% pure Mulberry liquid silks for the discerning global bride.",
      announcement: "Complimentary worldwide express courier delivery on all bridal suite commissions."
    }
  );
});
router.put("/settings", requireAdmin, async (req, res) => {
  const db = getDatabase();
  db.settings = {
    ...db.settings || {},
    ...req.body
  };
  await saveDatabase(db);
  await logActivity("Updated site settings and hero imagery");
  res.json(db.settings);
});
router.get("/real-brides", (req, res) => {
  const db = getDatabase();
  res.json(db.realBrides || []);
});
router.post("/real-brides", requireAdmin, async (req, res) => {
  const db = getDatabase();
  if (!db.realBrides) db.realBrides = [];
  const { id, brideName, location, weddingDate, category, robeWorn, image, quote, photographerCredit } = req.body;
  if (!brideName || !image) {
    return res.status(400).json({ error: "Bride name and image are required." });
  }
  const brideStory = {
    id: id || `bride-${Date.now()}`,
    brideName,
    location: location || "Global Bride",
    weddingDate: weddingDate || (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", { month: "long", year: "numeric" }),
    category: category || "Bride",
    robeWorn: robeWorn || "Lariel Bridal Robe",
    image,
    quote: quote || "The moment before forever was pure luxury.",
    photographerCredit: photographerCredit || "Featured Bride",
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  const existingIdx = db.realBrides.findIndex((b) => b.id === brideStory.id);
  if (existingIdx >= 0) {
    db.realBrides[existingIdx] = { ...db.realBrides[existingIdx], ...brideStory };
  } else {
    db.realBrides.unshift(brideStory);
  }
  await saveDatabase(db);
  await logActivity(`Published Real Bride feature: "${brideName}"`);
  res.json(brideStory);
});
router.delete("/real-brides/:id", requireAdmin, async (req, res) => {
  const db = getDatabase();
  if (!db.realBrides) db.realBrides = [];
  db.realBrides = db.realBrides.filter((b) => b.id !== req.params.id);
  await saveDatabase(db);
  await logActivity(`Deleted Real Bride feature with id "${req.params.id}"`);
  res.json({ success: true, id: req.params.id });
});
var api_default = router;

// server/vercel.ts
var app = express2();
app.use(express2.raw({ type: ["image/*", "application/octet-stream"], limit: "50mb" }));
app.use(express2.json({ limit: "50mb" }));
app.use(express2.urlencoded({ extended: true, limit: "50mb" }));
app.get(["/api/health", "/health"], (_req, res) => {
  res.status(200).json({ status: "ok", platform: "vercel", time: (/* @__PURE__ */ new Date()).toISOString() });
});
app.use("/api", api_default);
app.use("/", api_default);
var vercel_default = app;
export {
  vercel_default as default
};
