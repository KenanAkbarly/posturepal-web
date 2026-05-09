import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { Github, Sparkles } from 'lucide-react'

export function Footer(): React.JSX.Element {
  const t = useTranslations('footer')
  const locale = useLocale()
  const privacyHref = locale === 'en' ? '/privacy' : `/${locale}/privacy`

  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 text-sm md:flex-row">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Sparkles className="h-4 w-4 text-primary" />
          <span>{t('copyright', { year: new Date().getFullYear() })}</span>
        </div>
        <div className="flex items-center gap-6 text-muted-foreground">
          <Link
            href="https://github.com/KenanAkbarly/posturepal-desktop"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            {t('github')}
          </Link>
          <Link href={privacyHref} className="transition-colors hover:text-foreground">
            {t('privacyLink')}
          </Link>
        </div>
      </div>
    </footer>
  )
}
