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
            aria-label="Order on WhatsApp"
            className="relative grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_rgba(37,211,102,0.4)] transition-transform duration-200 hover:scale-105"
          >
            <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40 [animation-duration:2.4s]" />
            <WhatsAppIcon />
          </a>
        </Magnetic>
      </div>
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-8 fill-current" aria-hidden="true">
      <path d="M20.5 3.5A11 11 0 0 0 2.1 16.8L1 23l6.4-1.1A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.8.6.6-3.7-.2-.3A9.1 9.1 0 1 1 12 20.5Zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4 15 15 0 0 0 1.6.6 3.8 3.8 0 0 0 1.7.1 2.8 2.8 0 0 0 1.9-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  )
}
