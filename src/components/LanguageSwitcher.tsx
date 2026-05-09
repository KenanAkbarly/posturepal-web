'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'
import { cn } from '@/lib/utils'
import { routing } from '@/i18n/routing'

export function LanguageSwitcher({ className }: { className?: string }): React.JSX.Element {
  const locale = useLocale()
  const pathname = usePathname()

  function pathFor(target: string): string {
    const segments = pathname.split('/').filter(Boolean)
    if (routing.locales.includes(segments[0] as 'en' | 'tr')) {
      segments.shift()
    }
    const rest = segments.join('/')
    if (target === routing.defaultLocale) {
      return rest ? `/${rest}` : '/'
    }
    return rest ? `/${target}/${rest}` : `/${target}`
  }

  return (
    <div className={cn('flex items-center gap-1 text-xs', className)}>
      {routing.locales.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="mx-1 text-muted-foreground/40">·</span>}
          <Link
            href={pathFor(l)}
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
