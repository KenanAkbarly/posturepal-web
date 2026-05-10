'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ArrowRight, ShieldCheck, EyeOff, Code2, Apple } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { fadeUp } from '@/lib/motion'

export function Hero(): React.JSX.Element {
  const t = useTranslations('hero')

  return (
    <section className="relative isolate overflow-hidden bg-base">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-hairline to-transparent" />
        <div className="absolute left-0 right-0 top-[44%] h-px bg-gradient-to-r from-transparent via-hairline-soft to-transparent" />
        <div className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-sage-400/[0.05] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay [background-image:url('/noise.svg')]" />
      </div>

      <div className="container mx-auto px-6 pt-28 pb-32 lg:pt-40 lg:pb-44">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3 py-1 backdrop-blur-sm"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-sage-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage-400" />
              </span>
              <span className="text-xs font-mono uppercase tracking-[0.18em] text-ink-2">
                {t('badge')}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="mt-6 max-w-[14ch] font-sans font-medium text-[2.75rem] md:text-6xl lg:text-[5.25rem] leading-[1.02] tracking-[-0.03em] text-ink"
            >
              {t('headlinePart1')}{' '}
              <span className="font-serif italic font-normal text-sage-200">
                {t('headlineEmphasis')}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mt-6 max-w-xl text-lg md:text-xl leading-[1.55] text-ink-2"
            >
              {t('sub')}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Button
                size="lg"
                asChild
                className="group h-12 rounded-lg bg-sage-400 px-6 font-medium tracking-tight text-base text-base hover:bg-sage-500"
              >
                <a
                  href="https://github.com/KenanAkbarly/posturepal-desktop/releases/latest/download/posturepal-desktop-0.0.3.dmg"
                  rel="noreferrer"
                >
                  <Apple className="mr-2 h-4 w-4" strokeWidth={1.8} />
                  {t('ctaPrimary')}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                asChild
                className="h-12 rounded-lg px-5 font-medium tracking-tight text-ink hover:bg-surface-2"
              >
                <a href="#how-it-works">{t('ctaSecondary')}</a>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono uppercase tracking-[0.16em] text-ink-3"
            >
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5" strokeWidth={1.5} />
                {t('trust1')}
              </span>
              <span className="h-1 w-1 rounded-full bg-ink-4" />
              <span className="flex items-center gap-1.5">
                <EyeOff className="h-3.5 w-3.5" strokeWidth={1.5} />
                {t('trust2')}
              </span>
              <span className="h-1 w-1 rounded-full bg-ink-4" />
              <span className="flex items-center gap-1.5">
                <Code2 className="h-3.5 w-3.5" strokeWidth={1.5} />
                {t('trust3')}
              </span>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="lg:col-span-5"
          >
            <MonitorCard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function MonitorCard(): React.JSX.Element {
  return (
    <div className="relative mx-auto max-w-md lg:ml-auto">
      <div className="absolute -inset-x-6 -bottom-8 h-32 rounded-[3rem] bg-sage-400/5 blur-2xl" />
      <div className="relative rounded-2xl border border-hairline bg-surface/80 backdrop-blur-xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-between border-b border-hairline-soft px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-ink-4" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-4" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-4" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">
            posturepal · monitoring
          </span>
          <span className="w-10" />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden bg-base">
          <div className="absolute inset-y-0 left-1/2 w-px bg-sage-400/15" />
          <div className="absolute inset-x-0 top-1/2 h-px bg-sage-400/10" />
          <svg viewBox="0 0 200 150" className="absolute inset-0 h-full w-full" fill="none">
            <circle
              cx="100"
              cy="38"
              r="14"
              stroke="currentColor"
              strokeWidth="1.2"
              className="text-ink-2"
            />
            <path
              d="M 65 78 Q 100 62 135 78 L 130 138 L 70 138 Z"
              stroke="currentColor"
              strokeWidth="1.2"
              className="text-ink-2"
            />
            <line
              x1="100"
              y1="56"
              x2="100"
              y2="138"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="2 3"
              className="text-sage-400"
            />
            {[44, 70, 96, 122].map((y) => (
              <line
                key={y}
                x1="146"
                y1={y}
                x2="156"
                y2={y}
                stroke="currentColor"
                strokeWidth="1"
                className="text-sage-400/60"
              />
            ))}
            <circle cx="100" cy="38" r="2" fill="currentColor" className="text-sage-400" />
          </svg>
          <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full border border-sage-400/30 bg-sage-900/40 px-2.5 py-1 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-sage-400 opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage-400" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-sage-200">
              aligned
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 divide-x divide-hairline-soft border-t border-hairline-soft">
          <Metric label="tilt" value="1.2°" />
          <Metric label="slouch" value="0%" />
          <Metric label="uptime" value="04:12" />
        </div>
      </div>
    </div>
  )
}

function Metric({ label, value }: { label: string; value: string }): React.JSX.Element {
  return (
    <div className="px-4 py-3">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">{label}</div>
      <div className="mt-0.5 font-mono text-sm text-ink">{value}</div>
    </div>
  )
}
