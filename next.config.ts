// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ممكن تحط إعدادات عامة هنا
  // مثلاً images, experimental features, ... إلخ
};

export default nextConfig;

export const config = {
  matcher: ['/((?!_next|favicon.ico|api).*)'],
};
