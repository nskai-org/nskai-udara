# NSKAI UDARA - Event Platform & Ambassador Hub 🚀

**Live URL:** [nskai-udara.vercel.app](https://nskai-udara.vercel.app)

## Overview

NSKAI UDARA is a high-energy, Gen Z-focused event platform designed to drive engagement and registrations for the NSKAI Udara event. It serves a dual purpose:

1.  **Public Event Portal**: A dynamic landing page for attendees to register, view live participant counts, and get hyped for the event.
2.  **Ambassador Hub**: A gamified dashboard for "Cool Kids" (Ambassadors) to track referrals, generate unique "Vibe" ID cards, and compete on a live leaderboard.

Built with a focus on **Intentional Minimalism** and **Avant-Garde Aesthetics**, the platform features kinetic typography, glassmorphism, and fluid animations.

## Key Features

### For Attendees (Public)

- **Live "Watch" Counter**: Real-time display of registered attendees to create FOMO.
- **Instant Registration**: Seamless sign-up flow linked to the referral system.
- **Sponsor Integration**: (Coming Soon) Direct payment gateway for event sponsors via Paystack.

### For Ambassadors (The Cool Kids)

- **"Vibe" ID Card**: A dynamically generated, downloadable digital ID card with a unique QR code and holographic design.
- **Referral Tracking**: dedicated tracking links (e.g., `nskai.com/register?ref=username`) to attribute leads.
- **Live Leaderboard**: Real-time ranking of top ambassadors based on confirmed referrals.
- **Gamification**: Visual progress bars and rank badges (Newbie -> Legend).

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + [Framer Motion](https://www.framer.com/motion/) for animations.
- **Database**: PostgreSQL (via [Prisma ORM](https://www.prisma.io/)).
- **Authentication**: [Clerk](https://clerk.com/) (Ambassador access).
- **Image Generation**: `html-to-image` for client-side ID card generation.
- **Icons**: Lucide React.
- **Deployment**: Vercel.

## Getting Started

### Prerequisites

- Node.js >= 20
- pnpm >= 9
- PostgreSQL Database URL

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/your-username/nskai-udara.git
    cd nskai-udara
    ```

2.  **Install dependencies**

    ```bash
    pnpm install
    ```

3.  **Environment Setup**
    Create a `.env` file in the root directory:

    ```env
    DATABASE_URL="postgresql://..."
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
    CLERK_SECRET_KEY="sk_test_..."
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/ambassador/login
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/ambassador/sign-up
    ```

4.  **Database Migration**

    ```bash
    npx prisma migrate dev --name init
    ```

5.  **Run Development Server**
    ```bash
    pnpm dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

- `/app`: Next.js App Router pages and layouts.
  - `/ambassador`: Auth routes and landing page for ambassadors.
  - `/dashboard`: Protected dashboard for ambassadors.
  - `/leaderboard`: Public/Private rankings.
  - `/api`: Server-side API routes (webhooks, stats).
- `/components`: Reusable UI components (Design System).
- `/prisma`: Database schema and migrations.
- `/actions`: Server Actions for data mutation (Lead capture, Stats).
- `/lib`: Utility functions (Prisma client, rate limiting).
- `/generated`: Custom output location for Prisma Client (v7 optimization).

## Deployment

The project is optimized for deployment on **Vercel**.

1.  **Build Command**: `prisma generate && next build` (Crucial for Prisma 7 support).
2.  **Environment Variables**: Ensure all `.env` variables are set in the Vercel dashboard.

## License

This project is proprietary property of NSKAI.
