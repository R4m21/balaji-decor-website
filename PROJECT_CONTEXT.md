# BALAJI DECOR – PRODUCTION PROJECT CONTEXT

IMPORTANT:
- Do NOT regenerate existing files
- Only create new files or update specific ones
- Maintain App Router structure
- Maintain SSG compatibility
- Avoid creating conflicting root-level dynamic routes
- Keep responses concise and production-focused

------------------------------------------------------------
PROJECT TYPE
------------------------------------------------------------

Production-ready SEO optimized business website
for Interior Contractor Services in Maharashtra, India.

Target Cities:
- Mumbai
- Thane
- Navi Mumbai
- Pune
- Nashik

------------------------------------------------------------
TECH STACK
------------------------------------------------------------

- Next.js 16 (App Router)
- TypeScript (Strict Mode)
- Tailwind CSS
- Framer Motion
- Metadata API
- Static Site Generation (SSG)
- JSON-LD Structured Data
- next/image optimization
- GA4 scaffold integrated
- Security headers configured
- SQLite (better-sqlite3)
- Nodemailer
- Zod validation
- Google reCAPTCHA v3
- Git with Conventional Commits + Phase Tags

------------------------------------------------------------
FOLDER STRUCTURE
------------------------------------------------------------

app/
  layout.tsx
  page.tsx
  error.tsx
  not-found.tsx
  sitemap.ts
  robots.ts
  thank-you/page.tsx
  api/contact/route.ts
  services/[slug]/page.tsx
  locations/[slug]/page.tsx

components/
  header/
  footer/
  ui/
  sections/
  breadcrumb/

lib/
  services.ts
  locations.ts
  db.ts
  mailer.ts
  rate-limit.ts
  recaptcha.ts

styles/
  globals.css

------------------------------------------------------------
COMPLETED PHASES
------------------------------------------------------------

PHASE 1 – Core Setup
- App Router configured
- Tailwind setup
- Metadata API
- Security headers
- Sitemap & robots
- Global error boundary
- 404 page

PHASE 2 – Layout System
- Responsive Header
- Footer
- Sticky Call button
- WhatsApp floating button
- Dark/Light mode toggle
- Reusable Container
- Gradient button
- Breadcrumb component

PHASE 3 – Homepage
- Animated Hero
- Services grid
- About preview
- Gallery preview
- Testimonials slider
- CTA section
- SEO optimized heading structure
- next/image optimization

PHASE 4 – Service Pages
Route:
  /services/[slug]

- Unique metadata per service
- JSON-LD Service schema
- Static generation enabled
- Internal linking

PHASE 5 – Location SEO Pages
Route:
  /locations/[slug]

- Unique metadata per location
- Canonical URLs
- OpenGraph tags
- JSON-LD LocalBusiness schema
- FAQ schema
- Static generation enabled

PHASE 6 – Secure Contact System

Frontend:
- Controlled contact form
- Service dropdown
- reCAPTCHA v3 integration
- Redirect to /thank-you

Backend:
- API route: /api/contact
- Zod validation
- sanitize-html
- IP rate limiting
- SQLite lead storage
- Nodemailer (Admin + Auto reply)
- reCAPTCHA verification
- Environment-based config
- Production build stable

Security:
- No hydration errors
- No routing conflicts
- Prepared SQL statements
- Secure SMTP
- Rate limit protection

Build Status:
- npm run build successful
- Production ready

------------------------------------------------------------
CURRENT GOAL
------------------------------------------------------------

PHASE 7 – Advanced WhatsApp Cloud API Integration

Upgrade WhatsApp integration to WhatsApp Cloud API:
Replace simple wa.me link with:

- WhatsApp Cloud API (Meta)
- Server-side message trigger
- Template-based message sending
- Auto-send lead to admin WhatsApp
- Optional auto-confirmation to customer
- Webhook endpoint for delivery status
- Secure token validation
- Rate limiting
- Environment-based configuration
- Database storage of message status
- Production-grade error handling
- Use secure token via environment variable
- Server-side API request
- Auto-formatted message:
  New Website Lead – Balaji Decor
  Name:
  Phone:
  Service:
  Message:
- Handle errors gracefully

------------------------------------------------------------
CONSTRAINTS
------------------------------------------------------------

- Do NOT break existing SEO structure
- Do NOT modify dynamic service/location routes
- Do NOT regenerate working files
- Maintain clean scalable architecture
- Keep API routes secure
- Ensure production deployment compatibility

------------------------------------------------------------
GIT WORKFLOW
------------------------------------------------------------

Conventional Commits:
- feat:
- fix:
- chore:
- refactor:
- perf:

Phase Tags:
- phase-1
- phase-2
- phase-3
- phase-4
- phase-5
- phase-6

Next Tag:
- phase-7

------------------------------------------------------------
END OF CONTEXT
------------------------------------------------------------
Continue scalable production-grade development.
