import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { ChevronLeft } from 'lucide-react'
import { GithubIcon } from '@/components/icons/GithubIcon'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Link } from '@/i18n/navigation'

export const metadata: Metadata = {
  title: 'Privacy — PosturePal',
  description:
    'PosturePal processes everything locally. We never send camera frames anywhere, run no analytics, and require no account.'
}

interface PrivacyPageProps {
  params: Promise<{ locale: string }>
}

export default async function PrivacyPage({
  params
}: PrivacyPageProps): Promise<React.JSX.Element> {
  const { locale } = await params
  setRequestLocale(locale)
  return (
    <>
      <Header />
      <main className="container max-w-3xl py-12 md:py-20">
        <PrivacyContent />
      </main>
      <Footer />
    </>
  )
}

function PrivacyContent(): React.JSX.Element {
  const t = useTranslations('privacyPage')
  return (
    <article className="prose prose-slate max-w-none dark:prose-invert">
      <Button asChild variant="ghost" size="sm" className="mb-6 -ml-3">
        <Link href="/">
          <ChevronLeft className="mr-1 h-4 w-4" /> {t('back')}
        </Link>
      </Button>
      <h1 className="text-4xl font-bold tracking-tight">{t('title')}</h1>
      <p className="mt-3 text-lg text-muted-foreground">{t('lede')}</p>
      <p className="mt-2 text-xs text-muted-foreground">{t('updated')}</p>

      <Separator className="my-8" />

      <Section title={t('sections.dataCollection.title')}>
        <p>{t('sections.dataCollection.body')}</p>
        <ul>
          <li>{t('sections.dataCollection.point1')}</li>
          <li>{t('sections.dataCollection.point2')}</li>
          <li>{t('sections.dataCollection.point3')}</li>
        </ul>
      </Section>

      <Section title={t('sections.permissions.title')}>
        <p>{t('sections.permissions.camera.body')}</p>
        <p>{t('sections.permissions.notifications.body')}</p>
      </Section>

      <Section title={t('sections.localStorage.title')}>
        <p>{t('sections.localStorage.body')}</p>
      </Section>

      <Section title={t('sections.noTelemetry.title')}>
        <p>{t('sections.noTelemetry.body')}</p>
      </Section>

      <Section title={t('sections.openSource.title')}>
        <p>{t('sections.openSource.body')}</p>
        <p>
          <a
            href="https://github.com/KenanAkbarly/posturepal-desktop"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 underline"
          >
            <GithubIcon className="h-4 w-4" />
            github.com/KenanAkbarly/posturepal-desktop
          </a>
        </p>
      </Section>

      <Section title={t('sections.contact.title')}>
        <p>{t('sections.contact.body')}</p>
      </Section>
    </article>
  )
}

function Section({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}): React.JSX.Element {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-3 leading-relaxed text-muted-foreground [&>p]:my-3 [&>ul]:my-3 [&>ul]:list-disc [&>ul]:pl-6 [&_a]:underline">
        {children}
      </div>
    </section>
  )
}
