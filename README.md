# Kenley Group

A professional website for Kenley Group, a supported accommodation service provider.

## Tech Stack

- **Framework**: Next.js 16
- **UI**: shadcn/ui, Tailwind CSS
- **Form Management**: React Hook Form + Zod
- **State Management**: TanStack Query
- **Database**: Supabase
- **Fonts**: Instrument Sans (sans-serif), Libre Baskerville (serif), Spline Sans Mono (mono)

## Getting Started

First, install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## Scripts

- `pnpm dev`: Run development server
- `pnpm build`: Build for production
- `pnpm start`: Start production server
- `pnpm lint`: Run ESLint
- `pnpm format`: Format code with Prettier
- `pnpm format:check`: Check code formatting

## Project Structure

```
kenley-group/
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # Shared UI components
│   │   ├── shared/       # Shared layout components
│   │   └── ui/           # shadcn/ui components
│   ├── lib/              # Utility functions
│   └── modules/          # Feature modules
│       └── home/         # Homepage module
└── public/               # Static assets
```
