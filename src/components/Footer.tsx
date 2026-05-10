import { useTranslations } from 'next-intl'
import { Sparkles } from 'lucide-react'
import { GithubIcon } from '@/components/icons/GithubIcon'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { Link } from '@/i18n/navigation'

const REPO = 'https://github.com/KenanAkbarly/posturepal-desktop'

export function Footer(): React.JSX.Element {
  const t = useTranslations('footer')
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-hairline bg-base">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Left — brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 font-medium tracking-tight text-ink">
              <Sparkles className="h-4 w-4 text-sage-400" strokeWidth={1.5} />
              <span>PosturePal</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-ink-2">{t('tagline')}</p>
            <div className="mt-2">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Middle — link groups */}
          <div className="grid grid-cols-3 gap-6 text-sm md:col-span-1">
            <FooterGroup
              title={t('groups.product.title')}
              links={[
                { label: t('groups.product.features'), href: '#features' },
                { label: t('groups.product.howItWorks'), href: '#how-it-works' },
                { label: t('groups.product.download'), href: '#download' }
              ]}
            />
            <FooterGroup
              title={t('groups.privacy.title')}
              links={[
                { label: t('groups.privacy.promise'), href: '/privacy', isInternal: true },
                { label: t('groups.privacy.source'), href: REPO, external: true },
                { label: t('groups.privacy.license'), href: `${REPO}/blob/main/LICENSE`, external: true }
              ]}
            />
            <FooterGroup
              title={t('groups.resources.title')}
              links={[
                { label: 'GitHub', href: REPO, external: true },
                { label: t('groups.resources.issues'), href: `${REPO}/issues`, external: true },
                { label: t('groups.resources.releases'), href: `${REPO}/releases`, external: true }
              ]}
            />
          </div>

          {/* Right — build info */}
          <div className="flex flex-col items-start gap-1 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3 md:items-end md:text-right">
            <div>{t('build.version')}</div>
            <div>{t('build.builtOn')}</div>
            <div>{t('build.arch')}</div>
            <a
              href={REPO}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-ink-2 transition-colors hover:text-ink"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>{t('build.repo')}</span>
            </a>
          </div>
        </div>

        <div
          aria-hidden
          className="mt-14 h-px bg-gradient-to-r from-transparent via-hairline-soft to-transparent"
        />
        <div className="mt-6 flex flex-col items-center justify-between gap-2 text-xs md:flex-row">
          <div className="font-mono uppercase tracking-[0.16em] text-ink-3">
            {t('copyright', { year })}
          </div>
          <div className="font-mono uppercase tracking-[0.16em] text-ink-3">{t('careTagline')}</div>
        </div>
      </div>
    </footer>
  )
}

interface FooterGroupProps {
  title: string
  links: Array<{ label: string; href: string; external?: boolean; isInternal?: boolean }>
}

function FooterGroup({ title, links }: FooterGroupProps): React.JSX.Element {
  return (
    <div>
      <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">{title}</h3>
      <ul className="mt-4 flex flex-col gap-2.5">
        {links.map((link) =>
          link.isInternal ? (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-ink-2 transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ) : (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
                className="text-ink-2 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  )
}
