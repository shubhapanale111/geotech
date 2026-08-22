import Link from 'next/link'

export function OrangeCta({
  title,
  description,
  primary,
  secondary,
}: {
  title: string
  description: string
  primary: { label: string; href: string }
  secondary?: { label: string; href: string }
}) {
  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="container-page text-center">
        <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold tracking-tight text-balance uppercase sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/90">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href={primary.href}
            className="rounded-md bg-navy px-6 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy/90"
          >
            {primary.label}
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-white/10"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
