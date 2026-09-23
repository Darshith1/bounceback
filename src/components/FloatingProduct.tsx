import { motion, useReducedMotion } from "framer-motion"

type Props = {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  delay?: number
  float?: number
}

export function FloatingProduct({
  src,
  alt,
  className = "",
  imgClassName = "h-auto w-full",
  delay = 0,
  float = 14,
}: Props) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      animate={reduce ? undefined : { y: [0, -float, 0] }}
      transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <img
        src={src}
        alt={alt}
        draggable={false}
        className={`select-none drop-shadow-[0_28px_28px_rgba(12,40,28,0.28)] ${imgClassName}`}
      />
    </motion.div>
  )
}
