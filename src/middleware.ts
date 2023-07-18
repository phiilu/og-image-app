import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = new URL(request.url);

  // redirect existing link from blog post to updated location
  if (url.pathname === "/phiilu.com/post") {
    return NextResponse.redirect(
      new URL(`/api/blog/og?${url.searchParams}`, request.url)
    );
  }
}
