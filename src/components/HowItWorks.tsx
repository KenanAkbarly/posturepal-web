import { useTranslations } from 'next-intl'

const STEPS = ['download', 'calibrate', 'monitor'] as const

export function HowItWorks(): React.JSX.Element {
  const t = useTranslations('howItWorks')

  return (
    <section
      id="how-it-works"
      className="relative border-t border-hairline-soft bg-base"
    >
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-sage-400">
            {t('eyebrow')}
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-medium tracking-[-0.02em] leading-[1.05] text-ink">
            {t('titlePart1')}{' '}
            <span className="font-serif italic font-normal text-ink-2">
              {t('titleEmphasis')}
            </span>
          </h2>
          <p className="mt-5 max-w-prose text-[15px] md:text-base leading-relaxed text-ink-2">
            {t('subtitle')}
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Desktop: dashed horizontal connector */}
          <div
            aria-hidden
            className="absolute top-7 left-[12%] right-[12%] hidden md:block border-t border-dashed border-sage-400/25"
          />
          {/* Mobile: dashed vertical connector */}
          <div
            aria-hidden
            className="absolute top-14 bottom-14 left-7 w-px md:hidden border-l border-dashed border-sage-400/25"
          />

          {STEPS.map((key, i) => (
            <div key={key} className="relative">
              <div className="relative z-10 mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-hairline bg-base">
                <span className="font-serif italic text-2xl text-sage-400">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-xl font-medium tracking-tight text-ink mb-2">
                {t(`steps.${key}.title`)}
              </h3>
              <p className="max-w-xs text-[15px] leading-relaxed text-ink-2">
                {t(`steps.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
