import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Apple, Construction, Download } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const RELEASE_URL = 'https://github.com/KenanAkbarly/posturepal-desktop/releases/latest'

export function DownloadSection(): React.JSX.Element {
  const t = useTranslations('download')

  return (
    <section
      id="download"
      className="border-t bg-gradient-to-b from-muted/30 via-background to-background"
    >
      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t('title')}</h2>
          <p className="mt-3 text-muted-foreground">{t('subtitle')}</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
          <Card className="relative overflow-hidden">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Apple className="h-8 w-8 text-foreground" />
                <Badge variant="secondary" className="font-mono text-[11px]">
                  {t('mac.version')}
                </Badge>
              </div>
              <CardTitle className="mt-3">{t('mac.title')}</CardTitle>
              <CardDescription>{t('mac.size')}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild size="lg" className="w-full">
                <Link href={RELEASE_URL} target="_blank" rel="noreferrer">
                  <Download className="mr-2 h-4 w-4" /> {t('mac.cta')}
                </Link>
              </Button>
              <p className="mt-3 text-xs text-muted-foreground">{t('mac.note')}</p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden opacity-70">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Construction className="h-8 w-8 text-foreground" />
                <Badge variant="outline" className="font-mono text-[11px]">
                  {t('windows.comingSoon')}
                </Badge>
              </div>
              <CardTitle className="mt-3">{t('windows.title')}</CardTitle>
              <CardDescription>{t('windows.eta')}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" variant="outline" disabled className="w-full cursor-not-allowed">
                {t('windows.comingSoon')}
              </Button>
              <p className="mt-3 text-xs text-muted-foreground">{t('windows.note')}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
