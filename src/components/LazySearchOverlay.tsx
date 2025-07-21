'use client';

import dynamic from "next/dynamic";

// Lazy load SearchOverlay to avoid blocking FCP
const SearchOverlay = dynamic(() => import("./SearchOverlay"), {
  ssr: false,
  loading: () => null,
});

export default function LazySearchOverlay() {
  return <SearchOverlay />;
} 