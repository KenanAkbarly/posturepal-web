import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { HowItWorks } from '@/components/HowItWorks'
import { Privacy } from '@/components/Privacy'
import { SystemRequirements } from '@/components/SystemRequirements'
import { DownloadSection } from '@/components/DownloadSection'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'PosturePal — privacy-first posture monitoring',
  description:
    'Real-time posture monitoring on your webcam. All processing happens locally — no images leave your device. Free for macOS.'
}

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<React.JSX.Element> {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Hero />
        <Features />
        <HowItWorks />
        <Privacy />
        <SystemRequirements />
        <DownloadSection />
      </main>
      <Footer />
    </>
  )
}
