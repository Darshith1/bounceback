import { motion, useReducedMotion } from "framer-motion"

type Props = {
  items: string[]
  className?: string
}

export function Marquee({ items, className = "" }: Props) {
  const reduce = useReducedMotion()
  const loop = [...items, ...items]

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#f7f7f5] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#f7f7f5] to-transparent" />
      <motion.div
        className="flex w-max items-center gap-10 whitespace-nowrap py-1"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 24, ease: "linear", repeat: Infinity }}
      >
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-3 text-sm font-medium tracking-[0.2em] text-forest/60 uppercase"
          >
            {item}
            <span aria-hidden className="text-gold">
              ✦
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
