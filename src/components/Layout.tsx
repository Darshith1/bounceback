import { Footer } from "./Footer"
import { Magnetic } from "./Magnetic"
import { Navbar } from "./Navbar"
import { PageTransition } from "./PageTransition"
import { brand } from "../data/products"

export function Layout() {
  return (
    <div className="min-h-svh overflow-x-hidden bg-[#f7f7f5] text-ink">
      <Navbar />
      <PageTransition />
      <Footer />
      <div className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 md:right-6">
        <Magnetic strength={10}>
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="relative flex items-center gap-2 rounded-full bg-forest px-4 py-3 text-sm font-medium text-white shadow-[0_18px_40px_rgba(20,61,43,0.35)] transition-transform duration-200 hover:scale-105"
          >
            <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-forest/40 [animation-duration:2.4s]" />
            Order on WhatsApp
          </a>
        </Magnetic>
      </div>
    </div>
  )
}
