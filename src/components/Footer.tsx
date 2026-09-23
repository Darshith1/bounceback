import { Link } from "react-router-dom"
import { brand } from "../data/products"

const pages = [
  { to: "/", label: "Home" },
  { to: "/story", label: "Story" },
  { to: "/products", label: "Products" },
]

export function Footer() {
  return (
    <footer className="mt-16 bg-forest text-white">
      <div className="mx-auto max-w-[1400px] px-5 pt-8 pb-20 md:px-10 md:pt-10 md:pr-56 md:pb-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.6fr_1fr] lg:gap-10">
          <div>
            <img src="/brand/logo-gold.png" alt="Bounce Back cosmetics" className="h-12 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
              A hair oil and a hair cream, made in Ghana.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/90">
              {brand.producer}
              <br />
              {brand.location}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.16em] text-gold uppercase">Pages</p>
            <nav className="mt-3 flex flex-col gap-2 text-sm">
              {pages.map((page) => (
                <Link key={page.to} to={page.to} className="w-fit text-white/90 hover:text-gold">
                  {page.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.16em] text-gold uppercase">Contact</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <a href={brand.phoneHref} className="w-fit text-white/90 hover:text-gold">
                {brand.phone}
              </a>
              <a href={brand.altPhoneHref} className="w-fit text-white/90 hover:text-gold">
                {brand.altPhone}
              </a>
              <a href={brand.whatsapp} target="_blank" rel="noreferrer" className="w-fit text-white/90 hover:text-gold">
                WhatsApp
              </a>
              <span className="text-white/60">{brand.fda}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/15 pt-5 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Bounce Back Cosmetics. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a
              href="https://citrusv.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-gold hover:text-white"
            >
              Citrus Vision
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
