export const brand = {
  phone: "+233 246 835 125",
  phoneHref: "tel:+233246835125",
  altPhone: "026 779 1741",
  altPhoneHref: "tel:+233267791741",
  whatsapp: "https://wa.me/233246835125",
  location: "Oyarifa, Teiman, Accra",
  producer: "Mabvin Ventures",
  fda: "FDA/CO26-6050",
}

export function orderLink(product?: string) {
  const text = product
    ? `Hello Bounce Back, I would like to order ${product}.`
    : "Hello Bounce Back, I would like to order."
  return `${brand.whatsapp}?text=${encodeURIComponent(text)}`
}

export type Product = {
  slug: string
  name: string
  size: string
  badge: string
  tagline: string
  summary: string
  ingredients: string[]
  directions: string[]
  hero: string
  gallery: { src: string; alt: string }[]
  label: string
}

export const products: Product[] = [
  {
    slug: "hair-oil",
    name: "Hair Oil",
    size: "Dropper bottle",
    badge: "100% natural",
    tagline: "Made especially for your precious hair.",
    summary:
      "100% natural hair oil made from natural herbs and extracts, made especially for your precious hair.",
    ingredients: ["Castor oil", "Argan oil", "Olive oil", "Coconut oil", "Mixed herbs"],
    directions: [
      "Warm a few drops between your palms.",
      "Massage into the scalp and through the lengths.",
    ],
    hero: "/products/cutouts/hair-oil-float.png",
    gallery: [
      { src: "/products/cutouts/hair-oil-float.png", alt: "Bounce Back Hair Oil bottle" },
      { src: "/products/cutouts/hair-oil-open.png", alt: "Hair Oil with the dropper open" },
      { src: "/products/cutouts/hair-oil-dropper.png", alt: "Gold oil in the dropper" },
    ],
    label: "/products/hair-oil-label.png",
  },
  {
    slug: "hair-cream",
    name: "Hair Cream",
    size: "120g",
    badge: "Twice daily",
    tagline: "Massage into scalp and hair.",
    summary:
      "A 120g cream with moringa, neem, rosemary, hibiscus, and shea butter. Massage it into the scalp and hair two times a day.",
    ingredients: [
      "Moringa powder",
      "Neem powder",
      "Rosemary powder",
      "Cloves",
      "Fenugreek seed",
      "Hibiscus flower",
      "Avocado seed powder",
      "Flaxseed",
      "Black seed powder",
      "Shea butter",
    ],
    directions: [
      "Take a small amount and warm it in your hands.",
      "Massage thoroughly into the scalp and hair.",
      "Use two times daily. Store in a cool, dry place.",
    ],
    hero: "/products/cutouts/hair-cream-black-front.png",
    gallery: [
      { src: "/products/cutouts/hair-cream-black-front.png", alt: "Bounce Back Hair Cream jar" },
      { src: "/products/cutouts/hair-cream-black-angle.png", alt: "Hair Cream jar at an angle" },
      { src: "/products/cutouts/hair-cream-lid.png", alt: "Hair Cream lid with the Bounce Back logo" },
    ],
    label: "/products/hair-cream-label.png",
  },
]

export function getProduct(slug: string | undefined) {
  return products.find((product) => product.slug === slug)
}
