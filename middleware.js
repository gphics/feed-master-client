import { NextResponse } from "next/server";

export function middleware(request) {
  const authCookie = request.cookies.get("_at_");
  const nextUrl = request.nextUrl.pathname;
  // console.log(authCookie);
  // if authenticated and the user want to go to the pages that does not need authentication
  if (nextUrl === "/") {
    return NextResponse.redirect(new URL("/main", request.url));
  }
  if (authCookie) {
    if (
      nextUrl === "/register" ||
      nextUrl === "/login" ||
      nextUrl === "/landing-page"
    ) {
      return NextResponse.redirect(new URL("/main", request.url));
    }
  }
  // if not authenticated and the user wants to visit pages that require authentication
  if (!authCookie) {
    if (nextUrl.startsWith("/main")) {
      return NextResponse.redirect(new URL("/landing-page", request.url));
    }
  }
}
