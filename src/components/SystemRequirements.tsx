import { useTranslations } from 'next-intl'
import { Apple, Monitor } from 'lucide-react'

export function SystemRequirements(): React.JSX.Element {
  const t = useTranslations('requirements')

  return (
    <section className="container mx-auto px-6 py-24 md:py-32">
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
        <article className="rounded-xl border border-hairline bg-surface/40 p-7">
          <div className="flex items-center justify-between">
            <Apple className="h-7 w-7 text-ink" strokeWidth={1.5} />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">
              {t('mac.status')}
            </span>
          </div>
          <h3 className="mt-6 text-lg md:text-xl font-medium tracking-tight text-ink">
            {t('mac.title')}
          </h3>
          <dl className="mt-5 grid grid-cols-3 gap-4">
            <SpecRow label={t('common.osLabel')} value={t('mac.os')} />
            <SpecRow label={t('common.ramLabel')} value={t('common.ram')} />
            <SpecRow label={t('common.cameraLabel')} value={t('common.webcam')} />
          </dl>
        </article>

        <article className="rounded-xl border border-hairline bg-surface/40 p-7 opacity-70">
          <div className="flex items-center justify-between">
            <Monitor className="h-7 w-7 text-ink-2" strokeWidth={1.5} />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">
              {t('windows.status')}
            </span>
          </div>
          <h3 className="mt-6 text-lg md:text-xl font-medium tracking-tight text-ink">
            {t('windows.title')}
          </h3>
          <dl className="mt-5 grid grid-cols-3 gap-4">
            <SpecRow label={t('common.osLabel')} value={t('windows.os')} />
            <SpecRow label={t('common.ramLabel')} value={t('common.ram')} />
            <SpecRow label={t('common.cameraLabel')} value={t('common.webcam')} />
          </dl>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
            {t('windows.comingSoon')}
          </p>
        </article>
      </div>
    </section>
  )
}

function SpecRow({ label, value }: { label: string; value: string }): React.JSX.Element {
  return (
    <div>
      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">{label}</dt>
      <dd className="mt-1 text-sm text-ink">{value}</dd>
    </div>
  )
}
