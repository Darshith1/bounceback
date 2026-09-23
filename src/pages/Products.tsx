import { Link } from "react-router-dom"
import { Magnetic } from "../components/Magnetic"
import { Reveal } from "../components/Reveal"
import { TiltCard } from "../components/TiltCard"
import { orderLink, products } from "../data/products"

export function Products() {
  return (
    <div className="px-4 pt-4 pb-12 md:px-8 md:pt-6">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.22em] text-forest uppercase">Catalog</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <h1 className="font-display font-semibold leading-[0.9] tracking-[-0.02em] text-[clamp(2.4rem,8vw,6rem)]">
              Hair oil.
              <br />
              Hair cream.
            </h1>
            <Magnetic strength={10}>
              <a
                href={orderLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition-transform duration-200 hover:scale-[1.03]"
              >
                Order on WhatsApp
              </a>
            </Magnetic>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.1}>
              <TiltCard intensity={7}>
                <article className="flex h-full flex-col rounded-[32px] bg-white p-6 ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-[0_30px_70px_-30px_rgba(12,40,28,0.4)] md:p-8">
                  <div className="flex items-center justify-between text-sm">
                    <span className="rounded-full bg-forest px-3 py-1 text-xs font-medium text-white">
                      {product.badge}
                    </span>
                    <span className="text-ink/50">{product.size}</span>
                  </div>
                  <Link
                    to={`/products/${product.slug}`}
                    className="grid min-h-[220px] place-items-center py-4 sm:min-h-[340px] sm:py-6"
                  >
                    <img
                      src={product.hero}
                      alt={product.name}
                      className="max-h-[220px] w-auto max-w-[80%] object-contain drop-shadow-[0_28px_28px_rgba(12,40,28,0.22)] sm:max-h-[340px]"
                    />
                  </Link>
                  <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                    {product.name}
                  </h2>
                  <p className="mt-2 max-w-md leading-relaxed text-ink/70">{product.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {product.ingredients.slice(0, 4).map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-mist px-3 py-1 text-xs ring-1 ring-transparent transition-colors duration-200 hover:ring-gold/40"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <Magnetic strength={8} className="mt-6 w-fit">
                    <Link
                      to={`/products/${product.slug}`}
                      className="inline-flex w-fit rounded-full border border-ink/15 px-5 py-2.5 text-sm font-medium transition-colors duration-200 hover:border-gold hover:text-gold-deep"
                    >
                      View {product.name}
                    </Link>
                  </Magnetic>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
