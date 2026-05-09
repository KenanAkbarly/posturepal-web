import { useTranslations } from 'next-intl'
import { BadgeCheck, Eye, Globe, Heart, Shield, Sliders } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const FEATURES = [
  { key: 'privacy', Icon: Shield, accent: 'text-emerald-500 bg-emerald-500/10' },
  { key: 'realtime', Icon: Eye, accent: 'text-indigo-500 bg-indigo-500/10' },
  { key: 'personalized', Icon: Sliders, accent: 'text-amber-500 bg-amber-500/10' },
  { key: 'clinical', Icon: BadgeCheck, accent: 'text-rose-500 bg-rose-500/10' },
  { key: 'multiLanguage', Icon: Globe, accent: 'text-cyan-500 bg-cyan-500/10' },
  { key: 'freeOpen', Icon: Heart, accent: 'text-pink-500 bg-pink-500/10' }
] as const

export function Features(): React.JSX.Element {
  const t = useTranslations('features')

  return (
    <section id="features" className="container py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t('title')}</h2>
        <p className="mt-3 text-muted-foreground">{t('subtitle')}</p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ key, Icon, accent }) => (
          <Card key={key} className="transition-shadow hover:shadow-md">
            <CardHeader>
              <div
                className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg ${accent}`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <CardTitle className="text-lg">{t(`items.${key}.title`)}</CardTitle>
              <CardDescription>{t(`items.${key}.description`)}</CardDescription>
            </CardHeader>
            <CardContent />
          </Card>
        ))}
      </div>
    </section>
  )
}
