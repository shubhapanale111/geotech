import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export type FaqItem = {
  question: string
  answer: string
}

export function FaqAccordion({
  items,
  className,
  tone = 'light',
}: {
  items: FaqItem[]
  className?: string
  tone?: 'light' | 'plain'
}) {
  return (
    <div className={cn('divide-y divide-border', className)}>
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary
            className={cn(
              'flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-medium text-foreground marker:hidden [&::-webkit-details-marker]:hidden',
              tone === 'light' && 'px-4',
            )}
          >
            <span className="uppercase tracking-wide">{item.question}</span>
            <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <div className={cn('pb-4 text-sm leading-relaxed text-muted-foreground', tone === 'light' && 'px-4')}>
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  )
}
