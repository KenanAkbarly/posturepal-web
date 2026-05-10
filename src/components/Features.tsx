import { useTranslations } from 'next-intl'
import { Activity, GitFork, Languages, LineChart, Lock, Target } from 'lucide-react'

const FEATURES = [
  { key: 'privacy', Icon: Lock },
  { key: 'realtime', Icon: Activity },
  { key: 'personalized', Icon: Target },
  { key: 'clinical', Icon: LineChart },
  { key: 'multiLanguage', Icon: Languages },
  { key: 'freeOpen', Icon: GitFork }
] as const

export function Features(): React.JSX.Element {
  const t = useTranslations('features')

  return (
    <section id="features" className="container mx-auto px-6 py-24 md:py-32">
      <div className="max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-sage-400">
          {t('eyebrow')}
        </span>
        <h2 className="mt-4 text-3xl md:text-5xl font-medium tracking-[-0.02em] leading-[1.05] text-ink">
          {t('titlePart1')}{' '}
          <span className="font-serif italic font-normal text-ink-2">{t('titleEmphasis')}</span>
        </h2>
        <p className="mt-5 max-w-prose text-[15px] md:text-base leading-relaxed text-ink-2">
          {t('subtitle')}
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {FEATURES.map(({ key, Icon }, i) => (
          <div
            key={key}
            className="group relative rounded-xl border border-hairline bg-surface/40 p-7 transition-all duration-300 hover:border-sage-400/30 hover:bg-surface"
          >
            <span
              aria-hidden
              className="absolute top-3 right-3 font-mono text-[10px] tracking-widest text-ink-4"
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-hairline bg-base text-ink-2 transition-colors duration-300 group-hover:border-sage-400/40 group-hover:text-sage-400">
              <Icon className="h-5 w-5" strokeWidth={1.5} />
            </div>
            <h3 className="mb-2 text-lg md:text-xl font-medium tracking-tight text-ink">
              {t(`items.${key}.title`)}
            </h3>
            <p className="text-[15px] leading-relaxed text-ink-2">
              {t(`items.${key}.description`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
