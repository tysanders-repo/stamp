import { datadogRum } from '@datadog/browser-rum'

// Initialize Datadog RUM
export function initDatadog() {
  if (typeof window !== 'undefined') {
    datadogRum.init({
      applicationId: '1c28c051-814d-4401-a466-daf2fef792b0',
      clientToken: 'pubabba72c482ac02aa693e0fe6f5d3b4f4',
      site: 'us5.datadoghq.com',
      service: 'stamp-portfolio',
      env: process.env.NODE_ENV || 'dev',
      version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
      sessionSampleRate: 100,
      sessionReplaySampleRate: 20,
      trackUserInteractions: true,
      trackResources: true,
      trackLongTasks: true,
      defaultPrivacyLevel: 'mask-user-input',
    })

    // Start the session
    datadogRum.startSessionReplayRecording()
  }
}

// Track custom events
export function trackEvent(name: string, attributes?: Record<string, unknown>) {
  if (typeof window !== 'undefined') {
    datadogRum.addAction(name, attributes)
  }
}

// Track page views
export function trackPageView(page: string, attributes?: Record<string, unknown>) {
  if (typeof window !== 'undefined') {
    datadogRum.addAction('page_view', { page, ...attributes })
  }
}

// Track user interactions
export function trackUserAction(action: string, attributes?: Record<string, unknown>) {
  if (typeof window !== 'undefined') {
    datadogRum.addAction(action, attributes)
  }
}

// Set user context
export function setUserContext(user: { id?: string; name?: string; email?: string }) {
  if (typeof window !== 'undefined') {
    datadogRum.setUser(user)
  }
} 