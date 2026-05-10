import { useTranslations } from 'next-intl'
import { Apple, ArrowRight, Construction } from 'lucide-react'

const RELEASE_URL = 'https://github.com/KenanAkbarly/posturepal-desktop/releases/latest'

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
          <a
            href={RELEASE_URL}
            target="_blank"
            rel="noreferrer"
            className="group relative rounded-2xl border border-hairline bg-surface/60 p-8 transition-all duration-300 hover:border-sage-400/30 hover:bg-surface hover:shadow-[0_20px_60px_-20px_theme(colors.sage.400/0.15)]"
          >
            <Apple className="mb-6 h-10 w-10 text-ink" strokeWidth={1.5} />
            <div className="flex items-baseline gap-2">
              <h3 className="text-xl font-medium tracking-tight text-ink">{t('mac.title')}</h3>
              <span className="font-mono text-xs text-ink-3">{t('mac.osChip')}</span>
            </div>
            <p className="mt-1 text-sm text-ink-2">{t('mac.subtitle')}</p>
            <div className="mt-8 flex items-end justify-between">
              <div className="font-mono text-xs leading-relaxed text-ink-3">
                <div>{t('mac.version')}</div>
                <div>{t('mac.size')}</div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-sage-400">
                {t('mac.cta')}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>

          <div
            aria-disabled
            className="relative cursor-not-allowed rounded-2xl border border-hairline bg-surface/60 p-8 opacity-70"
          >
            <Construction className="mb-6 h-10 w-10 text-ink-2" strokeWidth={1.5} />
            <div className="flex items-baseline gap-2">
              <h3 className="text-xl font-medium tracking-tight text-ink">
                {t('windows.title')}
              </h3>
              <span className="font-mono text-xs text-ink-3">{t('windows.osChip')}</span>
            </div>
            <p className="mt-1 text-sm text-ink-2">{t('windows.subtitle')}</p>
            <div className="mt-8 flex items-end justify-between">
              <div className="font-mono text-xs leading-relaxed text-ink-3">
                <div>{t('windows.eta')}</div>
                <div>{t('windows.note')}</div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-3">
                {t('windows.comingSoon')}
              </span>
            </div>
          </div>
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
