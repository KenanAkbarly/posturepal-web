import { useTranslations } from 'next-intl'
import { Apple, ArrowRight } from 'lucide-react'

const VERSION = '0.0.4'
const REPO_RELEASES = 'https://github.com/KenanAkbarly/posturepal-desktop/releases/latest/download'

const MAC_URL = `${REPO_RELEASES}/posturepal-desktop-${VERSION}.dmg`
const WIN_URL = `${REPO_RELEASES}/posturepal-desktop-${VERSION}-setup.exe`

export function DownloadSection(): React.JSX.Element {
  const t = useTranslations('download')

  return (
    <section
      id="download"
      className="relative border-t border-hairline-soft bg-base"
    >
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-sage-400">
            {t('eyebrow')}
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-medium tracking-[-0.02em] leading-[1.05] text-ink">
            {t('titlePart1')}{' '}
            <span className="font-serif italic font-normal text-ink-2">
              {t('titleEmphasis')}
            </span>
          </h2>
          <p className="mt-5 text-[15px] md:text-base leading-relaxed text-ink-2">
            {t('subtitle')}
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl gap-4 md:grid-cols-2 md:gap-5">
          <PlatformCard
            href={MAC_URL}
            Icon={Apple}
            title={t('mac.title')}
            osChip={t('mac.osChip')}
            subtitle={t('mac.subtitle')}
            version={t('mac.version')}
            size={t('mac.size')}
            cta={t('mac.cta')}
          />
          <PlatformCard
            href={WIN_URL}
            Icon={WindowsIcon}
            title={t('windows.title')}
            osChip={t('windows.osChip')}
            subtitle={t('windows.subtitle')}
            version={t('windows.version')}
            size={t('windows.size')}
            cta={t('windows.cta')}
          />
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">
          <span>{t('integrity.checksum')}</span>
          <span className="h-1 w-1 rounded-full bg-ink-4" />
          <span>{t('integrity.unsigned')}</span>
          <span className="h-1 w-1 rounded-full bg-ink-4" />
          <span>{t('integrity.openSource')}</span>
        </div>
      </div>
    </section>
  )
}

interface PlatformCardProps {
  href: string
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  title: string
  osChip: string
  subtitle: string
  version: string
  size: string
  cta: string
}

function PlatformCard({
  href,
  Icon,
  title,
  osChip,
  subtitle,
  version,
  size,
  cta
}: PlatformCardProps): React.JSX.Element {
  return (
    <a
      href={href}
      rel="noreferrer"
      className="group relative rounded-2xl border border-hairline bg-surface/60 p-8 transition-all duration-300 hover:border-sage-400/30 hover:bg-surface hover:shadow-[0_20px_60px_-20px_theme(colors.sage.400/0.15)]"
    >
      <Icon className="mb-6 h-10 w-10 text-ink" strokeWidth={1.5} />
      <div className="flex items-baseline gap-2">
        <h3 className="text-xl font-medium tracking-tight text-ink">{title}</h3>
        <span className="font-mono text-xs text-ink-3">{osChip}</span>
      </div>
      <p className="mt-1 text-sm text-ink-2">{subtitle}</p>
      <div className="mt-8 flex items-end justify-between">
        <div className="font-mono text-xs leading-relaxed text-ink-3">
          <div>{version}</div>
          <div>{size}</div>
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-sage-400">
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
  )
}

function WindowsIcon({
  className,
  strokeWidth = 1.5
}: {
  className?: string
  strokeWidth?: number
}): React.JSX.Element {
  // lucide v1 doesn't ship a Windows-brand icon; inline a small four-quadrant
  // square that reads as "Windows" without any trademarked logo.
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M3 5h8v8H3z" />
      <path d="M13 5h8v8h-8z" />
      <path d="M3 13h8v8H3z" />
      <path d="M13 13h8v8h-8z" />
    </svg>
  )
}
