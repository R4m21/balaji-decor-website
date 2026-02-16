CURRENT ACTIVE PHASE: Phase 8 – Blog System

PHASE STATUS:
Not Started

PROJECT MODE:
Development Mode = TRUE
Production Mode = FALSE

OBJECTIVE FOR PHASE 8:

Implement Blog System with the following:

1. Blog Listing Page
   Route: /blog
   Strategy: Static Generation (SSG)

2. Dynamic Blog Post Page
   Route: /blog/[slug]
   Strategy: ISR enabled

3. Blog Category Page
   Route: /blog/category/[category]

4. SQLite Blog Table
   - id
   - slug
   - title
   - excerpt
   - content
   - category
   - language (EN | HI ready)
   - createdAt
   - updatedAt
   - published (boolean)

5. SEO Requirements:
   - Metadata API per post
   - OpenGraph per post
   - JSON-LD Article schema
   - Canonical URLs

6. Multi-language scaffold (EN primary, HI ready structure)

STRICT RULES:
- Do NOT modify stable routes
- Do NOT rewrite core architecture
- Work only inside blog module
- Maintain SSG-first strategy
- Keep build passing
- Production-safe implementation only

AI IMPLEMENTATION MODE:
Provide full ready-to-copy files.
File by file.
With exact paths.
No explanation unless necessary.
Continue development only.