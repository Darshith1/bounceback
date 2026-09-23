import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { brand } from "../data/products"

const links = [
  { to: "/", label: "Home" },
  { to: "/story", label: "Story" },
  { to: "/products", label: "Products" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(() => window.scrollY > 8)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-[#f7f7f5] transition-shadow duration-300 ${
        scrolled || open ? "shadow-[0_8px_24px_rgba(18,18,18,0.04)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-3 md:px-8 md:py-4">
        <Link to="/" className="inline-flex shrink-0">
          <img
            src="/brand/logo-gold.png"
            alt="Bounce Back cosmetics"
            className="h-11 w-auto max-w-[46vw] object-contain sm:h-12 sm:max-w-none md:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-0.5 rounded-full bg-white py-1.5 pr-1.5 pl-1.5 text-ink shadow-[0_8px_24px_rgba(18,18,18,0.06)] ring-1 ring-black/5 md:flex lg:gap-1 lg:pl-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `relative rounded-full px-3 py-2 text-sm font-medium lg:px-4 ${
                  isActive ? "text-ink" : "text-ink/70 hover:text-ink"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-mist"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp Bounce Back"
            className="grid size-9 place-items-center rounded-full bg-forest text-white transition-transform duration-200 hover:scale-105"
          >
            <WhatsAppIcon />
          </a>
        </nav>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full bg-white text-ink shadow-[0_8px_24px_rgba(18,18,18,0.06)] ring-1 ring-black/5 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="text-lg leading-none">{open ? "×" : "☰"}</span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-4 mb-3 flex flex-col gap-1 rounded-3xl bg-white p-2 text-ink shadow-lg ring-1 ring-black/5 md:hidden"
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm font-medium ${isActive ? "bg-mist" : "hover:bg-mist"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium text-forest hover:bg-mist"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
      <path d="M20.5 3.5A11 11 0 0 0 2.1 16.8L1 23l6.4-1.1A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.8.6.6-3.7-.2-.3A9.1 9.1 0 1 1 12 20.5Zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4 15 15 0 0 0 1.6.6 3.8 3.8 0 0 0 1.7.1 2.8 2.8 0 0 0 1.9-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  )
}
