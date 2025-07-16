import type { NextConfig } from "next";
import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true, 
};

export default withContentCollections(nextConfig);