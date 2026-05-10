import type { Metadata } from 'next'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'
import { routing } from '@/i18n/routing'
import '../globals.css'

const sans = Geist({ subsets: ['latin', 'latin-ext'], variable: '--font-sans' })
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' })
const serif = Instrument_Serif({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'PosturePal — privacy-first posture monitoring',
  description:
    'Real-time posture monitoring on your webcam. All processing happens locally — no images leave your device.'
}

export function generateStaticParams(): Array<{ locale: string }> {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}): Promise<React.JSX.Element> {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html
      lang={locale}
      className={`dark ${sans.variable} ${mono.variable} ${serif.variable} h-full antialiased`}
    >
      <body
        className="min-h-full bg-base text-ink font-sans antialiased"
        suppressHydrationWarning
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
