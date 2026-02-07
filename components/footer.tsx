import Link from "next/link";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black text-zinc-400">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="font-heading text-2xl font-bold tracking-tighter text-white hover:text-brand-orange transition-colors"
            >
              NSKAI <span className="text-brand-orange">|</span> UDARA
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              The ultimate event platform for the next generation. Connecting
              students, creators, and brands in one immersive experience.
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                href="https://twitter.com"
                target="_blank"
                className="hover:text-brand-orange transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="hover:text-brand-orange transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-brand-orange transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-white mb-4">
              Platform
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/register"
                  className="hover:text-brand-orange transition-colors"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  href="/ambassador"
                  className="hover:text-brand-orange transition-colors"
                >
                  Ambassadors
                </Link>
              </li>
              <li>
                <Link
                  href="/leaderboard"
                  className="hover:text-brand-orange transition-colors"
                >
                  Leaderboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/legal/terms"
                  className="hover:text-brand-orange transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/privacy"
                  className="hover:text-brand-orange transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-brand-orange transition-colors"
                >
                  Code of Conduct
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row md:items-start text-xs">
          <p>© {currentYear} NSKAI Organization. All rights reserved.</p>
          <p>
            Built with <span className="text-brand-red">❤️</span> for Gen Z.
          </p>
        </div>
      </div>
    </footer>
  );
}
