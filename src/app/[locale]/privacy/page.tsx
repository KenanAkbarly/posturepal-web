import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { ChevronLeft } from 'lucide-react'
import { GithubIcon } from '@/components/icons/GithubIcon'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Link } from '@/i18n/navigation'

const REPO = 'https://github.com/KenanAkbarly/posturepal-desktop'

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
      <main className="container mx-auto max-w-3xl px-6 py-16 md:py-24">
        <PrivacyContent />
      </main>
      <Footer />
    </>
  )
}

function PrivacyContent(): React.JSX.Element {
  const t = useTranslations('privacyPage')
  return (
    <article className="text-ink">
      <Link
        href="/"
        className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3 transition-colors hover:text-ink"
      >
        <ChevronLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
        {t('back')}
      </Link>

      <span className="mt-12 block font-mono text-xs uppercase tracking-[0.2em] text-sage-400">
        {t('eyebrow')}
      </span>
      <h1 className="mt-3 text-4xl md:text-5xl font-medium tracking-[-0.02em] leading-[1.05] text-ink">
        {t('titlePart1')}{' '}
        <span className="font-serif italic font-normal text-ink-2">{t('titleEmphasis')}</span>
      </h1>
      <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-2">{t('lede')}</p>
      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
        {t('updated')}
      </p>

      <div
        aria-hidden
        className="my-12 h-px bg-gradient-to-r from-transparent via-hairline to-transparent"
      />

      <Section eyebrow="01" title={t('sections.dataCollection.title')}>
        <p>{t('sections.dataCollection.body')}</p>
        <ul>
          <li>{t('sections.dataCollection.point1')}</li>
          <li>{t('sections.dataCollection.point2')}</li>
          <li>{t('sections.dataCollection.point3')}</li>
        </ul>
      </Section>

      <Section eyebrow="02" title={t('sections.permissions.title')}>
        <p>{t('sections.permissions.camera.body')}</p>
        <p>{t('sections.permissions.notifications.body')}</p>
      </Section>

      <Section eyebrow="03" title={t('sections.localStorage.title')}>
        <p>{t('sections.localStorage.body')}</p>
      </Section>

      <Section eyebrow="04" title={t('sections.noTelemetry.title')}>
        <p>{t('sections.noTelemetry.body')}</p>
      </Section>

      <Section eyebrow="05" title={t('sections.openSource.title')}>
        <p>{t('sections.openSource.body')}</p>
        <p>
          <a
            href={REPO}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sage-400 transition-colors hover:text-sage-200"
          >
            <GithubIcon className="h-4 w-4" />
            github.com/KenanAkbarly/posturepal-desktop
          </a>
        </p>
      </Section>

      <Section eyebrow="06" title={t('sections.contact.title')}>
        <p>{t('sections.contact.body')}</p>
      </Section>
    </article>
  )
}

function Section({
  eyebrow,
  title,
  children
}: {
  eyebrow: string
  title: string
  children: React.ReactNode
}): React.JSX.Element {
  return (
    <section className="my-12 grid gap-3 md:grid-cols-[80px_1fr]">
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-3">
        {eyebrow}
      </span>
      <div>
        <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.01em] text-ink">
          {title}
        </h2>
        <div className="mt-4 leading-relaxed text-ink-2 [&>p]:my-3 [&>ul]:my-3 [&>ul]:list-disc [&>ul]:pl-6 [&_a]:underline">
          {children}
        </div>
      </div>
    </section>
  )
}
