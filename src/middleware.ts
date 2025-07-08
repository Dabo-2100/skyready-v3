// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('jwt')?.value;
  const { pathname } = request.nextUrl;

  const publicAuthRoutes = ['/login', '/register', '/forget', '/activate'];

  const isAuthPage = publicAuthRoutes.some((path) => pathname.startsWith(path));
  const isStaticAsset = pathname.startsWith('/_next') || pathname.startsWith('/favicon.ico') || pathname.startsWith('/api');

  if (isAuthPage && token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (!isAuthPage && !isStaticAsset && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}
