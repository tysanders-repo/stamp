
// Necessary if using App Router to ensure this file runs on the client
"use client";

import { datadogRum } from "@datadog/browser-rum";

datadogRum.init({
  applicationId: process.env.NEXT_PUBLIC_DATADOG_APP_ID!,
  clientToken: process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN!,
  site: "us5.datadoghq.com",
  service: "stamp-portfolio",
  env: process.env.NODE_ENV || 'dev',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 20,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: "mask-user-input",
});

export default function DatadogInit() {
  if (typeof window === "undefined") return;
  // Render nothing - this component is only included so that the init code
  // above will run client-side
  return null;
}
   
