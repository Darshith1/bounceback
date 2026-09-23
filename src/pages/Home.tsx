import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { FloatingProduct } from "../components/FloatingProduct"
import { Magnetic } from "../components/Magnetic"
import { Marquee } from "../components/Marquee"
import { Reveal } from "../components/Reveal"
import { Stage3D, TiltCard } from "../components/TiltCard"
import { faqs, standards } from "../data/story"
import { orderLink, products } from "../data/products"

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Home() {
  return (
    <div className="pt-2 md:pt-4">
      <Hero />
      <TrustStrip />
      <Standards />
      <Ritual />
      <Bestsellers />
      <Faq />
    </div>
  )
}

function Hero() {
  return (
    <section className="px-4 pb-6 md:px-8">
      <div className="mx-auto grid max-w-[1400px] items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
        <motion.div variants={rise} initial="hidden" animate="show">
          <p className="text-xs font-medium tracking-[0.22em] text-forest uppercase">
            Natural hair care · Accra
          </p>
          <h1 className="mt-4 font-sans font-semibold leading-[0.9] tracking-[-0.03em] text-forest text-[clamp(2.8rem,11vw,8.6rem)]">
            bounce
            <br />
            <span className="text-gold-gradient shine-sweep">back.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-forest/80">
            A natural hair oil and a hair cream, made in Ghana.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Magnetic>
              <Link
                to="/products"
                className="inline-flex rounded-full bg-forest px-6 py-3 text-sm font-medium text-white shadow-[0_16px_36px_rgba(20,61,43,0.28)] transition-transform duration-200 hover:scale-[1.03]"
              >
                See the products
              </Link>
            </Magnetic>
            <Magnetic strength={12}>
              <Link
                to="/story"
                className="inline-flex rounded-full border border-forest/30 bg-white px-6 py-3 text-sm font-medium text-forest transition-transform duration-200 hover:scale-[1.03]"
              >
                Our story
              </Link>
            </Magnetic>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-forest/70">
            <span>100% natural</span>
            <span>Made in Ghana</span>
            <span>Hair Oil and 120g Cream</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <Stage3D className="relative mx-auto h-[340px] w-full max-w-md sm:h-[460px] sm:max-w-lg lg:h-[560px] lg:max-w-none">
            <FloatingProduct
              src="/products/cutouts/hair-oil-float.png"
              alt="Hair Oil bottle"
              className="absolute bottom-0 left-[2%] h-[94%] w-[46%] max-w-[240px]"
              imgClassName="h-full w-full object-contain object-bottom"
              delay={0.2}
              float={10}
            />
            <FloatingProduct
              src="/products/cutouts/hair-cream-black-front.png"
              alt="Hair Cream jar"
              className="absolute right-0 bottom-0 h-[68%] w-[58%] max-w-[340px]"
              imgClassName="h-full w-full object-contain object-bottom"
              delay={0.8}
              float={8}
            />
          </Stage3D>
        </motion.div>
      </div>
    </section>
  )
}

function TrustStrip() {
  return (
    <Reveal delay={0.1} className="px-4 md:px-8">
      <div className="mx-auto max-w-[1400px] border-y border-forest/10 py-4">
        <Marquee
          items={["100% Natural", "Made in Ghana", "FDA Listed", "Cruelty-Free Ritual", "Small Batch"]}
        />
      </div>
    </Reveal>
  )
}

const flipProducts = [
  { src: "/products/cutouts/hair-oil-float.png", alt: "Hair Oil" },
  { src: "/products/cutouts/hair-cream-black-front.png", alt: "Hair Cream" },
]

function ProductFlip() {
  const [index, setIndex] = useState(0)
  const reduce = useReducedMotion()
  const product = flipProducts[index]

  useEffect(() => {
    if (reduce) return
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % flipProducts.length)
    }, 2000)
    return () => window.clearInterval(timer)
  }, [reduce])

  return (
    <div className="relative mx-auto mt-4 h-56 w-[70%] max-w-[240px]" style={{ perspective: 900 }}>
      <AnimatePresence mode="wait">
        <motion.img
          key={product.src}
          src={product.src}
          alt={product.alt}
          initial={reduce ? false : { rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={reduce ? undefined : { rotateY: -90, opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_20px_24px_rgba(12,40,28,0.25)]"
        />
      </AnimatePresence>
    </div>
  )
}

function Standards() {
  return (
    <section className="px-4 py-8 md:px-8 md:py-12">
      <Reveal>
        <div className="bg-grain mx-auto grid max-w-[1400px] gap-6 overflow-hidden rounded-[28px] bg-gradient-to-br from-forest via-forest to-forest-deep px-4 py-6 text-white shadow-[0_30px_60px_-20px_rgba(12,40,28,0.5)] sm:px-6 sm:py-8 md:grid-cols-[1.15fr_0.85fr] md:gap-8 md:rounded-[40px] md:px-12 md:py-12">
          <div className="pr-14 md:pr-0">
            <h2 className="max-w-md font-display font-semibold tracking-[-0.02em] text-[clamp(1.9rem,6vw,4.2rem)] leading-[0.95]">
              How we look after your hair.
            </h2>
            <p className="mt-4 max-w-md text-white/75">
              The ingredients are the ones printed on the pack. We use herbs and oils from Ghana, and we keep the routine simple.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {standards.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.08} y={16}>
                  <div className="group">
                    <span className="text-xs font-medium text-gold">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="mt-1 font-medium">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">{item.body}</p>
                    <span className="mt-2 block h-px w-8 bg-gold/50 transition-all duration-300 group-hover:w-16" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-[28px] bg-white/95 p-6 text-ink shadow-inner backdrop-blur-sm">
            <div>
              <p className="text-xs font-medium tracking-[0.18em] text-forest uppercase">How to use</p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">Hair Oil and Hair Cream.</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                Warm the oil into the scalp and through the hair. Massage the cream in twice a day.
              </p>
            </div>
            <ProductFlip />
            <Magnetic strength={10} className="w-fit">
              <Link
                to="/products"
                className="mt-4 inline-flex w-fit rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-transform duration-200 hover:scale-[1.03]"
              >
                See the products
              </Link>
            </Magnetic>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function Ritual() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08])

  return (
    <section ref={ref} className="px-4 py-8 md:px-8 md:py-14">
      <div className="mx-auto grid max-w-[1400px] items-center gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden rounded-[32px] ring-1 ring-forest/10">
            <motion.img
              src="/products/hair-cream-label.png"
              alt="Hair Cream label, made in Ghana"
              style={reduce ? undefined : { scale }}
              className="h-[320px] w-full object-cover object-[62%_center] md:h-[460px]"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            <p className="text-sm font-medium text-forest">The story</p>
            <h2 className="mt-3 max-w-lg font-display font-semibold tracking-[-0.015em] text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[0.98]">
              Hair that gets its bounce back.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-ink/70">
              Made in Ghana by Mabvin Ventures. Hair Oil is castor, argan, coconut, and herbs. Hair Cream is moringa, neem, hibiscus, and shea butter.
            </p>
            <Magnetic strength={10} className="mt-6">
              <Link
                to="/story"
                className="inline-flex rounded-full border border-ink/15 px-5 py-2.5 text-sm font-medium transition-colors duration-200 hover:border-gold hover:text-gold-deep"
              >
                Read the story
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Bestsellers() {
  return (
    <section className="px-4 py-8 md:px-8 md:py-14">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display font-semibold tracking-[-0.02em] text-[clamp(2.2rem,4vw,3.6rem)]">
              The collection
            </h2>
            <Magnetic strength={10}>
              <Link
                to="/products"
                className="inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-transform duration-200 hover:scale-[1.03]"
              >
                See the products
              </Link>
            </Magnetic>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.1} className="h-full">
              <TiltCard className="h-full">
                <Link
                  to={`/products/${product.slug}`}
                  className="flex h-full flex-col rounded-[28px] bg-white p-5 ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-[0_30px_60px_-25px_rgba(12,40,28,0.35)] md:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-forest px-3 py-1 text-xs font-medium text-white">
                      {product.badge}
                    </span>
                    <span className="text-sm text-ink/50">{product.size}</span>
                  </div>
                  <div className="grid min-h-[180px] place-items-center py-4 sm:min-h-[280px]">
                    <img
                      src={product.hero}
                      alt={product.name}
                      className="max-h-[180px] w-auto max-w-[78%] object-contain drop-shadow-[0_24px_24px_rgba(12,40,28,0.22)] sm:max-h-[280px]"
                    />
                  </div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                    {product.name}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink/65">{product.tagline}</p>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="px-4 py-8 md:px-8 md:py-16">
      <div className="mx-auto grid max-w-[1400px] items-start gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div>
            <h2 className="font-display font-semibold tracking-[-0.02em] text-[clamp(2.2rem,4vw,3.4rem)]">
              Questions
            </h2>
            <div className="mt-6 flex flex-col gap-3">
              {faqs.map((item, index) => {
                const active = open === index
                return (
                  <button
                    key={item.q}
                    type="button"
                    onClick={() => setOpen(active ? -1 : index)}
                    className={`rounded-[24px] bg-white px-5 py-4 text-left ring-1 transition-shadow duration-300 ${
                      active ? "shadow-[0_16px_40px_-20px_rgba(12,40,28,0.35)] ring-forest/15" : "ring-black/5"
                    }`}
                  >
                    <span className="flex items-center justify-between gap-4">
                      <span className="min-w-0 font-medium">{item.q}</span>
                      <motion.span
                        animate={{ rotate: active ? 45 : 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="grid size-8 shrink-0 place-items-center rounded-full bg-forest text-white"
                      >
                        +
                      </motion.span>
                    </span>
                    <AnimatePresence initial={false}>
                      {active && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/70">{item.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                )
              })}
            </div>
            <Magnetic strength={10} className="mt-6">
              <a
                href={orderLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-forest px-5 py-3 text-sm font-medium text-white shadow-[0_16px_36px_rgba(20,61,43,0.28)] transition-transform duration-200 hover:scale-[1.03]"
              >
                Order on WhatsApp
              </a>
            </Magnetic>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-[32px] ring-1 ring-forest/10">
            <img
              src="/products/hair-oil-label.png"
              alt="Hair Oil label with ingredients"
              className="h-[360px] w-full object-cover md:h-full md:min-h-[420px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
