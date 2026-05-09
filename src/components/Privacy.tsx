import { useTranslations } from 'next-intl'
import { Lock, EyeOff, UserX } from 'lucide-react'
import { GithubIcon } from '@/components/icons/GithubIcon'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const POINTS = [
  { key: 'noCloud', Icon: Lock },
  { key: 'noTracking', Icon: EyeOff },
  { key: 'noAccount', Icon: UserX },
  { key: 'openSource', Icon: GithubIcon }
] as const

export function Privacy(): React.JSX.Element {
  const t = useTranslations('privacy')

  return (
    <section id="privacy" className="container py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t('title')}</h2>
        <p className="mt-3 text-muted-foreground">{t('subtitle')}</p>
      </div>
      <div className="mx-auto mt-12 grid max-w-3xl gap-4 md:grid-cols-2">
        {POINTS.map(({ key, Icon }) => (
          <Card key={key}>
            <CardHeader className="flex-row items-start gap-3 space-y-0">
              <div className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <CardTitle className="text-base">{t(`points.${key}.title`)}</CardTitle>
                <CardDescription className="mt-1">
                  {t(`points.${key}.description`)}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent />
          </Card>
        ))}
      </div>
    </section>
  )
}
