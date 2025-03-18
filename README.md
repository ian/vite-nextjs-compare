# Vite + Next.js Compare

A monorepo comparing Vite and Next.js implementations, featuring:
- Vite app with Hono.js API endpoints
- Edge Functions support for Vercel deployment
- Workspace management with pnpm

## Project Structure

- `apps/vite`: Vite app with Hono.js API endpoints
- `apps/next`: Next.js app with API routes
- `packages/shared`: Shared components and utilities

## Getting Started

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Start the development server: `pnpm dev`

## Deployment

### Vite App

1. Build the app: `pnpm build`
2. Deploy to Vercel: `vercel --prod`

### Next.js App

1. Build the app: `pnpm build`
2. Deploy to Vercel: `vercel --prod`

## Comparison

- eslint is disabled in next.config.ts to level the playing field

## License

MIT
