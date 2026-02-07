import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NSKAI UDARA | The Ultimate Gen Z Event Experience",
    template: "%s | NSKAI UDARA",
  },
  description:
    "Join the movement. NSKAI UDARA is the premier event platform for the next generation. Register now, track live attendees, and become an ambassador.",
  keywords: [
    "NSKAI",
    "Udara",
    "Event",
    "Gen Z",
    "Ambassador",
    "Live Counter",
    "Students",
    "Vibe",
  ],
  authors: [{ name: "NSKAI Team" }],
  creator: "NSKAI",
  metadataBase: new URL("https://nskai-udara.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nskai-udara.vercel.app",
    title: "NSKAI UDARA | The Ultimate Gen Z Event Experience",
    description:
      "Join the movement. NSKAI UDARA is the premier event platform for the next generation. Register now, track live attendees, and become an ambassador.",
    siteName: "NSKAI UDARA",
    images: [
      {
        url: "/og-image.png", // TODO: include OG image
        width: 1200,
        height: 630,
        alt: "NSKAI UDARA Event Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NSKAI UDARA | The Ultimate Gen Z Event Experience",
    description:
      "Join the movement. NSKAI UDARA is the premier event platform for the next generation.",
    images: ["/og-image.png"],
    creator: "@nskai",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

import { Footer } from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            spaceGrotesk.variable,
            inter.variable,
            "antialiased font-sans bg-background text-foreground flex flex-col min-h-screen",
          )}
        >
          <div className="grow">{children}</div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
