import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Apple, Construction, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const RELEASE_URL = 'https://github.com/KenanAkbarly/posturepal-desktop/releases/latest'

export function Hero(): React.JSX.Element {
  const t = useTranslations('hero')

  return (
    <section className="container grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
      <div className="flex flex-col items-start gap-6 text-left">
        <Badge variant="secondary" className="gap-1.5">
          <Sparkles className="h-3 w-3" /> {t('badge')}
        </Badge>
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
          <span className="bg-gradient-to-br from-foreground via-foreground/85 to-primary bg-clip-text text-transparent">
            {t('headline')}
          </span>
        </h1>
        <p className="max-w-prose text-base text-muted-foreground md:text-lg">
          {t('subheadline')}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <Button asChild size="lg">
            <Link href={RELEASE_URL} target="_blank" rel="noreferrer">
              <Apple className="mr-2 h-5 w-5" /> {t('downloadMac')}
            </Link>
          </Button>
          <Button size="lg" variant="outline" disabled className="cursor-not-allowed">
            <Construction className="mr-2 h-5 w-5" /> {t('downloadWin')}
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">{t('disclaimer')}</p>
      </div>

      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-gradient-to-br from-indigo-500/15 via-emerald-500/10 to-amber-500/15 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.18),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.18),transparent_50%)]" />
        <div className="absolute right-4 top-4">
          <Badge variant="outline" className="bg-background/80 backdrop-blur">
            {t('previewBadge')}
          </Badge>
        </div>
        <div className="absolute inset-x-8 bottom-8 flex flex-col gap-3 rounded-xl border border-border/60 bg-background/80 p-4 backdrop-blur">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{t('previewMetric.cva')}</span>
            <span className="font-mono text-emerald-500">62°</span>
          </div>
          <div className="h-1 rounded-full bg-emerald-500/30">
            <div className="h-1 w-3/4 rounded-full bg-emerald-500" />
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{t('previewMetric.asymmetry')}</span>
            <span className="font-mono text-emerald-500">2.1%</span>
          </div>
          <div className="h-1 rounded-full bg-emerald-500/30">
            <div className="h-1 w-1/4 rounded-full bg-emerald-500" />
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{t('previewMetric.alignment')}</span>
            <span className="font-mono text-emerald-500">172°</span>
          </div>
          <div className="h-1 rounded-full bg-emerald-500/30">
            <div className="h-1 w-[90%] rounded-full bg-emerald-500" />
          </div>
        </div>
      </div>
    </section>
  )
}
