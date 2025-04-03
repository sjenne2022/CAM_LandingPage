// src/middleware.ts
import { NextRequest, NextResponse } from "next/server";

// Custom type to extend NextRequest with geo data
type GeoRequest = NextRequest & {
geo?: {
    country?: string;
    region?: string;
    city?: string;
};
};

export function middleware(request: GeoRequest) {
// Safely access the geo data
const country = request.geo?.country ?? "US"; // fallback to 'US' if undefined
const region = request.geo?.region ?? "unknown-region";

console.log(`Visitor from: ${country}, Region: ${region}`);

// You can use this to route, redirect, or apply logic
// Example: redirect EU users to a regional page
// if (country === "FR") {
//   return NextResponse.redirect(new URL("/fr", request.url));
// }

return NextResponse.next();
}

// Match all routes for middleware execution
export const config = {
matcher: ["/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)"],
};
