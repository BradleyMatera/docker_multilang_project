/** @type {import('next').NextConfig} */
const isStaticExport = process.env.STATIC_EXPORT === "true" || process.env.NEXT_PHASE === "phase-export";

const nextConfig = {
  output: isStaticExport ? "export" : undefined,
  images: { unoptimized: true },
  typedRoutes: true,
};

export default nextConfig;
