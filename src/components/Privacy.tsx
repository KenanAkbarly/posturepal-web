import { useTranslations } from 'next-intl'

const EVIDENCE = ['networkCalls', 'telemetry', 'account', 'source'] as const

export function Privacy(): React.JSX.Element {
  const t = useTranslations('privacy')

  return (
    <section id="privacy" className="relative overflow-hidden py-32 md:py-40">
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hairline to-transparent"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hairline-soft to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-hairline-soft to-transparent"
      />

      <div className="container mx-auto max-w-4xl px-6 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-sage-400">
          {t('eyebrow')}
        </span>
        <p className="mt-6 font-serif text-3xl md:text-5xl leading-[1.15] tracking-tight text-ink">
          {t('manifestPart1')}{' '}
          <span className="italic text-ink-2">{t('manifestEmphasis')}</span>
        </p>

        <dl className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 text-left">
          {EVIDENCE.map((key) => (
            <div key={key}>
              <dt className="font-mono text-xs uppercase tracking-[0.16em] text-ink-3">
                {t(`evidence.${key}.label`)}
              </dt>
              <dd
                className={`mt-2 font-mono text-2xl ${
                  key === 'source' ? 'text-sage-400' : 'text-ink'
                }`}
              >
                {t(`evidence.${key}.value`)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
