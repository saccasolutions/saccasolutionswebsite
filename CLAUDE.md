# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sacca Solutions marketing website - a dark mode Next.js 14 site for an AI product studio and automation systems provider.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom dark theme
- **Deployment**: Vercel

## Architecture

### Directory Structure

```
/src
  /app                    # Next.js App Router pages
    /about               # About page
    /contact             # Contact form with GHL integration
    /products            # Products overview
      /betterdatingai    # Product detail page
      /dreamfluent       # Product detail page
      /photohut          # Product detail page
    /services            # B2B services page
    /work                # Case studies/portfolio
  /components
    /layout              # Header, Footer
    /ui                  # Reusable UI components
    /sections            # Page section components
  /lib                   # Utilities (GHL form submission)
```

### Design System

- **Colors**: Dark mode with `#0a0a0a` background, `#fafafa` text, `#06b6d4` (cyan) accent
- **CSS Classes** (defined in globals.css):
  - `section` - Section padding
  - `container-custom` - Max-width container
  - `card` - Card component with border
  - `btn-primary` - Cyan filled button
  - `btn-secondary` - Outlined button
  - `gradient-text` - Cyan-to-blue gradient text

### GoHighLevel Integration

Contact form POSTs to webhook URL from `NEXT_PUBLIC_GHL_WEBHOOK_URL` env variable. Set this in Vercel environment variables.

## Key Patterns

- All pages use server components by default
- Client components marked with `'use client'` (Header, Contact form)
- Use `&apos;` for apostrophes in JSX to avoid ESLint errors
- Link component from `next/link` for internal navigation
