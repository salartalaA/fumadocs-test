import { rewritePath } from "fumadocs-core/negotiation";
import { createI18nMiddleware } from "fumadocs-core/i18n/middleware";
import { i18n } from "@/lib/i18n";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

const rewriteMdxSuffix = rewritePath(
  "/:lang{/*path}.mdx",
  "/:lang/llms.mdx{/*path}"
);
const i18nMiddleware = createI18nMiddleware(i18n);

export default async function proxy(
  request: NextRequest,
  event: NextFetchEvent
) {
  const pathname = rewriteMdxSuffix.rewrite(request.nextUrl.pathname);
  if (pathname) {
    return NextResponse.rewrite(new URL(pathname, request.nextUrl));
  }

  return i18nMiddleware(request, event);
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  // You may need to adjust it to ignore static assets in `/public` folder
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
