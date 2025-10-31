/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
    typedRoutes: true,
    serverActions: true
  }
};

export default nextConfig;
