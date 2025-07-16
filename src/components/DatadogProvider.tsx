'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { initDatadog, trackPageView } from '@/lib/datadog'

export default function DatadogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Initialize Datadog RUM
    initDatadog()
  }, [])

  useEffect(() => {
    // Track page views
    if (pathname) {
      trackPageView(pathname)
    }
  }, [pathname])

  return <>{children}</>
} 