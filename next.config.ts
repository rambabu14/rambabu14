import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   turbopack: {
    root: "./", // 👈 explicitly tell Next.js that this is the root
  },
};

export default nextConfig;
