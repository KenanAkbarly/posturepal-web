import { useTranslations } from 'next-intl'
import { Sparkles } from 'lucide-react'
import { GithubIcon } from '@/components/icons/GithubIcon'
import { Link } from '@/i18n/navigation'

export function Footer(): React.JSX.Element {
  const t = useTranslations('footer')

  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 text-sm md:flex-row">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Sparkles className="h-4 w-4 text-primary" />
          <span>{t('copyright', { year: new Date().getFullYear() })}</span>
        </div>
        <div className="flex items-center gap-6 text-muted-foreground">
          <a
            href="https://github.com/KenanAkbarly/posturepal-desktop"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <GithubIcon className="h-4 w-4" />
            {t('github')}
          </a>
          <Link href="/privacy" className="transition-colors hover:text-foreground">
            {t('privacyLink')}
          </Link>
        </div>
      </div>
    </footer>
  )
}
