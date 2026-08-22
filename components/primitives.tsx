import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Eyebrow({
  children,
  className,
  withRule = false,
  tone = 'primary',
}: {
  children: React.ReactNode
  className?: string
  withRule?: boolean
  tone?: 'primary' | 'muted' | 'orange' | 'white'
}) {
  const toneClasses = {
    primary: 'text-primary',
    orange: 'text-primary',
    muted: 'text-muted-foreground',
    white: 'text-white/90',
  }

  const ruleToneClasses = {
    primary: 'bg-primary',
    orange: 'bg-primary',
    muted: 'bg-muted-foreground',
    white: 'bg-white/60',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase',
        toneClasses[tone],
        className,
      )}
    >
      {withRule && <span className={cn('h-px w-8', ruleToneClasses[tone])} aria-hidden="true" />}
      {children}
    </span>
  )
}

export function CheckItem({
  children,
  className,
  iconClassName,
}: {
  children: React.ReactNode
  className?: string
  iconClassName?: string
}) {
  return (
    <li className={cn('flex items-center gap-2.5 text-sm', className)}>
      <Check className={cn('size-4 shrink-0 text-primary', iconClassName)} strokeWidth={2.5} />
      <span>{children}</span>
    </li>
  )
}

export function Stat({
  value,
  label,
  className,
  valueClassName,
  labelClassName,
}: {
  value: string
  label: string
  className?: string
  valueClassName?: string
  labelClassName?: string
}) {
  return (
    <div className={className}>
      <p className={cn('font-display text-3xl font-extrabold tracking-tight', valueClassName)}>
        {value}
      </p>
      <p
        className={cn(
          'mt-1 text-[0.7rem] font-semibold tracking-[0.15em] text-muted-foreground uppercase',
          labelClassName,
        )}
      >
        {label}
      </p>
    </div>
  )
}

