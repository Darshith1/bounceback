import { useState, type FormEvent } from "react"
import { Reveal } from "../components/Reveal"

const CAREERS_EMAIL = "xcellentdesign76@gmail.com"

type Status = "idle" | "sent"

function applicationMail(fields: {
  name: string
  email: string
  phone: string
  role: string
  location: string
  message: string
}) {
  const body = [
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Phone: ${fields.phone}`,
    `What they would like to do: ${fields.role}`,
    `Based in: ${fields.location || "Not given"}`,
    "",
    fields.message,
  ].join("\n")

  return `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(`Career application from ${fields.name}`)}&body=${encodeURIComponent(body)}`
}

export function Careers() {
  const [status, setStatus] = useState<Status>("idle")
  const [mailto, setMailto] = useState("")

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    if (String(data.get("_honey") || "").trim()) return

    const href = applicationMail({
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      role: String(data.get("role") || "").trim(),
      location: String(data.get("location") || "").trim(),
      message: String(data.get("message") || "").trim(),
    })

    setMailto(href)
    window.location.href = href
    form.reset()
    setStatus("sent")
  }

  return (
    <div className="px-4 pt-4 pb-10 md:px-8 md:pt-6">
      <div className="mx-auto grid max-w-[1100px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <Reveal>
          <div>
            <p className="text-xs font-medium tracking-[0.22em] text-forest uppercase">Careers</p>
            <h1 className="mt-3 font-display font-semibold leading-[0.9] tracking-[-0.02em] text-[clamp(2.4rem,8vw,5.5rem)]">
              Come work with us.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/70">
              Bounce Back is a small team in Accra. If you would like to join, leave your details below. We read every note and write back.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-[32px] bg-white p-5 ring-1 ring-black/5 sm:p-8">
            {status === "sent" ? (
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-tight">Thank you.</h2>
                <p className="mt-3 max-w-md leading-relaxed text-ink/70">
                  Your email app should be open, with your details already written to {CAREERS_EMAIL}. Press send there and it will reach us.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={mailto}
                    className="inline-flex rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-white"
                  >
                    Open the email again
                  </a>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="inline-flex rounded-full border border-ink/15 px-5 py-2.5 text-sm font-medium hover:border-gold hover:text-gold-deep"
                  >
                    Send another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4">
                <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                <Field label="Your name" name="name" autoComplete="name" required />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Email" name="email" type="email" autoComplete="email" required />
                  <Field label="Phone" name="phone" type="tel" autoComplete="tel" required />
                </div>
                <Field label="What you would like to do" name="role" required />
                <Field label="Where you are based" name="location" autoComplete="address-level2" />
                <label className="grid gap-1.5 text-sm font-medium text-ink">
                  A little about you
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="resize-y rounded-2xl bg-mist px-4 py-3 font-normal text-ink ring-1 ring-transparent outline-none placeholder:text-ink/35 focus:ring-forest/30"
                    placeholder="Tell us about your experience."
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 inline-flex w-fit rounded-full bg-forest px-6 py-3 text-sm font-medium text-white shadow-[0_16px_36px_rgba(20,61,43,0.28)] transition-transform duration-200 hover:scale-[1.03]"
                >
                  Send my details
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </div>
  )
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  autoComplete?: string
}) {
  return (
    <label className="grid gap-1.5 text-sm font-medium text-ink">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="rounded-2xl bg-mist px-4 py-3 font-normal text-ink ring-1 ring-transparent outline-none focus:ring-forest/30"
      />
    </label>
  )
}
