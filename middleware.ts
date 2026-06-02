import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALES = ["fr", "ar", "en"] as const;
const DEFAULT_LOCALE = "fr";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files, API routes, Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Check if pathname already starts with a supported locale
  const pathnameHasLocale = LOCALES.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    const lang = LOCALES.find(
      (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
    ) ?? DEFAULT_LOCALE;

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-lang", lang);
    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  }

  // Redirect to default locale
  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
