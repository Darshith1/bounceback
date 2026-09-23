import { useState } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { Magnetic } from "../components/Magnetic"
import { Reveal } from "../components/Reveal"
import { Stage3D } from "../components/TiltCard"
import { getProduct, orderLink, products } from "../data/products"

export function ProductDetail() {
  const { slug } = useParams()
  const product = getProduct(slug)
  const [active, setActive] = useState(0)

  if (!product) return <Navigate to="/products" replace />

  const shot = product.gallery[active] ?? product.gallery[0]
  const others = products.filter((item) => item.slug !== product.slug)

  return (
    <div className="px-4 pt-4 pb-12 md:px-8 md:pt-6">
      <div className="mx-auto grid max-w-[1400px] items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div>
            <Stage3D className="rounded-[32px] bg-white ring-1 ring-black/5">
              <div className="grid min-h-[260px] place-items-center overflow-hidden p-5 sm:min-h-[420px] sm:p-8 md:min-h-[560px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={shot.src}
                    src={shot.src}
                    alt={shot.alt}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="max-h-[240px] w-auto max-w-full object-contain drop-shadow-[0_30px_30px_rgba(12,40,28,0.25)] sm:max-h-[420px] md:max-h-[480px]"
                  />
                </AnimatePresence>
              </div>
            </Stage3D>
            <div className="mt-4 flex flex-wrap gap-3">
              {product.gallery.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`grid h-16 w-16 place-items-center overflow-hidden rounded-2xl bg-white ring-2 transition-all duration-200 sm:h-24 sm:w-24 ${
                    index === active
                      ? "shadow-[0_10px_30px_-12px_rgba(198,160,53,0.6)] ring-gold"
                      : "ring-transparent hover:ring-forest/20"
                  }`}
                >
                  <img src={image.src} alt="" className="max-h-12 max-w-[80%] object-contain sm:max-h-20" />
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-forest uppercase">{product.badge}</p>
            <h1 className="mt-2 font-display font-semibold tracking-[-0.02em] text-[clamp(2.5rem,8vw,5.2rem)] leading-[0.9]">
              {product.name}
            </h1>
            <p className="mt-3 text-ink/50">{product.size}</p>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink/75">{product.summary}</p>

            <Magnetic strength={12} className="mt-7">
              <a
                href={orderLink(product.name)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-ink px-6 py-3 text-sm font-medium text-white shadow-[0_18px_40px_-16px_rgba(20,61,43,0.5)] transition-transform duration-200 hover:scale-[1.03]"
              >
                Order {product.name}
              </a>
            </Magnetic>

            <div className="mt-10">
              <h2 className="text-sm font-medium tracking-[0.16em] uppercase">Ingredients</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {product.ingredients.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-white px-3 py-1.5 text-sm ring-1 ring-black/5 transition-colors duration-200 hover:ring-gold/40"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-sm font-medium tracking-[0.16em] uppercase">How to use</h2>
              <ol className="mt-3 flex flex-col gap-3">
                {product.directions.map((step, index) => (
                  <li key={step} className="flex gap-3 text-ink/75">
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-forest text-xs text-white">
                      {index + 1}
                    </span>
                    <span className="pt-0.5 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="mx-auto mt-14 max-w-[1400px] overflow-hidden rounded-[32px] ring-1 ring-forest/10">
          <img
            src={product.label}
            alt={`${product.name} label`}
            className="h-[240px] w-full object-cover md:h-[340px]"
          />
        </div>
      </Reveal>

      {others.map((other, index) => (
        <Reveal key={other.slug} delay={index * 0.05}>
          <div className="mx-auto mt-8 flex max-w-[1400px] flex-col items-start justify-between gap-4 rounded-[28px] bg-white p-5 ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-[0_20px_50px_-25px_rgba(12,40,28,0.35)] sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <img src={other.hero} alt="" className="h-16 w-auto object-contain sm:h-20" />
              <div>
                <p className="text-sm text-ink/50">Also in the range</p>
                <p className="font-display text-xl font-semibold">{other.name}</p>
              </div>
            </div>
            <Magnetic strength={8}>
              <Link
                to={`/products/${other.slug}`}
                className="inline-flex rounded-full bg-forest px-4 py-2 text-sm text-white transition-transform duration-200 hover:scale-105"
              >
                View
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
