'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Menu, Sparkles, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'

export function Header(): React.JSX.Element {
  const t = useTranslations('nav')
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#features', label: t('features') },
    { href: '#how-it-works', label: t('howItWorks') },
    { href: '#privacy', label: t('privacy') },
    { href: '#download', label: t('download') }
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Sparkles className="h-5 w-5 text-primary" />
          <span>PosturePal</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <Button asChild size="sm">
            <a href="#download">{t('download')}</a>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen((s) => !s)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      <div
        className={cn(
          'border-t border-border/40 bg-background md:hidden',
          open ? 'block' : 'hidden'
        )}
      >
        <nav className="container flex flex-col gap-1 py-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex items-center justify-between border-t border-border/40 px-3 pt-3">
            <LanguageSwitcher />
            <Button asChild size="sm" onClick={() => setOpen(false)}>
              <a href="#download">{t('download')}</a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
