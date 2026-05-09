import { useTranslations } from 'next-intl'

export default function Home(): React.JSX.Element {
  const t = useTranslations('hero')
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-5xl font-bold tracking-tight">{t('headline')}</h1>
      <p className="max-w-md text-muted-foreground">{t('subheadline')}</p>
    </main>
  )
}
