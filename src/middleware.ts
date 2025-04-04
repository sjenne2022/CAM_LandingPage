import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function middleware(_request: NextRequest) {
const response = NextResponse.next();

// Security Headers
response.headers.set("X-Content-Type-Options", "nosniff");
response.headers.set("X-Frame-Options", "DENY");
response.headers.set("X-XSS-Protection", "1; mode=block");
response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
response.headers.set("Permissions-Policy", "geolocation=(), microphone=()");
response.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");

// Basic CSP — tighten this up for production as needed
response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self'; object-src 'none';"
);

return response;
}
