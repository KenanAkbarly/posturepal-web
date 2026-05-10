'use client'

import { useEffect, useState } from 'react'

export type DetectedOS = 'mac' | 'win' | 'linux' | 'other' | 'unknown'

/**
 * Detects the user's OS client-side after hydration. Returns 'unknown'
 * during SSR / first render so server-rendered HTML stays stable, then
 * flips to the real OS once the client mounts. Consumers should treat
 * 'unknown' as a fallback (e.g. show macOS as the default platform
 * since the .dmg shipped first).
 *
 * Uses navigator.userAgentData when available (Chromium 90+), falls
 * back to userAgent string parsing otherwise (Safari, Firefox).
 */
export function useOS(): DetectedOS {
  const [os, setOs] = useState<DetectedOS>('unknown')

  useEffect(() => {
    setOs(detectOS())
  }, [])

  return os
}

interface UAData {
  platform: string
}

function detectOS(): DetectedOS {
  if (typeof navigator === 'undefined') return 'other'

  const data = (navigator as Navigator & { userAgentData?: UAData }).userAgentData
  const platform = (data?.platform ?? '').toLowerCase()
  const ua = navigator.userAgent.toLowerCase()

  const haystack = `${platform} ${ua}`
  if (haystack.includes('mac')) return 'mac'
  if (haystack.includes('win')) return 'win'
  if (haystack.includes('linux')) return 'linux'
  return 'other'
}
