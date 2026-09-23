import { Link } from "react-router-dom"
import { Magnetic } from "../components/Magnetic"
import { Reveal } from "../components/Reveal"
import { chapters } from "../data/story"
import { brand } from "../data/products"

export function Story() {
  return (
    <div className="px-4 pt-4 pb-10 md:px-8 md:pt-6">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.22em] text-forest uppercase">The story</p>
          <h1 className="mt-3 max-w-3xl font-display font-semibold leading-[0.9] tracking-[-0.02em] text-[clamp(2.4rem,8vw,6.5rem)]">
            Hair that gets its bounce back.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/70">
            Bounce Back is a hair care line from {brand.producer} in Ghana. Hair Oil and Hair Cream each have their own ingredients, printed on the pack.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-[32px] ring-1 ring-forest/10">
            <img
              src="/products/hair-cream-label.png"
              alt="Bounce Back Hair Cream, produced in Ghana"
              className="h-[280px] w-full object-cover object-[70%_center] md:h-[420px]"
            />
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col gap-12">
          {chapters.map((chapter, index) => (
            <Reveal key={chapter.id} delay={index * 0.06}>
              <article className="grid items-center gap-6 border-t border-black/10 pt-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
                <p className="text-sm font-medium tracking-[0.16em] text-forest uppercase">
                  {chapter.kicker}
                </p>
                <div>
                  <h2 className="font-display font-semibold tracking-[-0.015em] text-[clamp(1.8rem,3vw,2.6rem)] leading-tight">
                    {chapter.title}
                  </h2>
                  <p className="mt-3 max-w-xl leading-relaxed text-ink/70">{chapter.body}</p>
                  {index === 1 && (
                    <img
                      src="/products/hair-oil-label.png"
                      alt="Hair Oil ingredients"
                      className="mt-6 overflow-hidden rounded-[24px]"
                    />
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="bg-grain mt-14 overflow-hidden rounded-[32px] bg-gradient-to-br from-forest via-forest to-forest-deep px-6 py-8 text-white shadow-[0_30px_60px_-25px_rgba(12,40,28,0.5)] md:px-10">
            <p className="text-sm text-white/70">{brand.producer}</p>
            <p className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">{brand.location}</p>
            <p className="mt-2 text-white/75">
              {brand.phone} · {brand.altPhone} · {brand.fda}
            </p>
            <Magnetic strength={10} className="mt-6">
              <Link
                to="/products"
                className="inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink transition-transform duration-200 hover:scale-[1.03]"
              >
                See the products
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
