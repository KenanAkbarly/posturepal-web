'use client'

import { useLocale } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { cn } from '@/lib/utils'

export function LanguageSwitcher({ className }: { className?: string }): React.JSX.Element {
  const locale = useLocale()
  const pathname = usePathname()

  return (
    <div className={cn('flex items-center gap-1 text-xs', className)}>
      {routing.locales.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="mx-1 text-muted-foreground/40">·</span>}
          <Link
            href={pathname}
            locale={l}
            className={cn(
              'rounded px-1.5 py-0.5 uppercase tracking-wider transition-colors',
              l === locale
                ? 'font-semibold text-foreground'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {l}
          </Link>
        </span>
      ))}
    </div>
  )
}
