import { useTranslations } from 'next-intl'
import { Apple, Cpu, MemoryStick, Monitor, Video } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export function SystemRequirements(): React.JSX.Element {
  const t = useTranslations('requirements')

  return (
    <section className="container py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t('title')}</h2>
        <p className="mt-3 text-muted-foreground">{t('subtitle')}</p>
      </div>
      <div className="mx-auto mt-10 grid max-w-3xl gap-5 md:grid-cols-2">
        <Card>
          <CardHeader className="flex-row items-center gap-3 space-y-0">
            <Apple className="h-5 w-5 text-foreground" />
            <CardTitle className="text-base">{t('mac.title')}</CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="flex flex-col gap-3 pt-4 text-sm">
            <Row Icon={Cpu} label={t('mac.os')} />
            <Row Icon={MemoryStick} label={t('common.ram')} />
            <Row Icon={Video} label={t('common.webcam')} />
          </CardContent>
        </Card>
        <Card className="opacity-70">
          <CardHeader className="flex-row items-center gap-3 space-y-0">
            <Monitor className="h-5 w-5 text-foreground" />
            <CardTitle className="text-base">{t('windows.title')}</CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="flex flex-col gap-3 pt-4 text-sm">
            <Row Icon={Cpu} label={t('windows.os')} />
            <Row Icon={MemoryStick} label={t('common.ram')} />
            <Row Icon={Video} label={t('common.webcam')} />
            <p className="mt-2 text-xs italic text-muted-foreground">{t('windows.comingSoon')}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function Row({
  Icon,
  label
}: {
  Icon: React.ComponentType<{ className?: string }>
  label: string
}): React.JSX.Element {
  return (
    <div className="flex items-center gap-2.5 text-muted-foreground">
      <Icon className="h-4 w-4 flex-shrink-0" />
      <span>{label}</span>
    </div>
  )
}
