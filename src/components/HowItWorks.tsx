import { useTranslations } from 'next-intl'
import { Activity, Download, Sparkles } from 'lucide-react'

const STEPS = [
  { key: 'download', Icon: Download },
  { key: 'calibrate', Icon: Sparkles },
  { key: 'monitor', Icon: Activity }
] as const

export function HowItWorks(): React.JSX.Element {
  const t = useTranslations('howItWorks')

  return (
    <section id="how-it-works" className="border-y bg-muted/30">
      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t('title')}</h2>
          <p className="mt-3 text-muted-foreground">{t('subtitle')}</p>
        </div>
        <ol className="relative mt-12 grid gap-10 md:grid-cols-3">
          <span
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block"
          />
          {STEPS.map(({ key, Icon }, i) => (
            <li key={key} className="relative flex flex-col items-center gap-3 text-center">
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-background text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-lg font-semibold">{t(`steps.${key}.title`)}</h3>
              <p className="max-w-xs text-sm text-muted-foreground">
                {t(`steps.${key}.description`)}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
