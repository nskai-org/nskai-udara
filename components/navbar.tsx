import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-2xl font-bold tracking-tighter text-white hover:text-brand-orange transition-colors"
        >
          NSKAI <span className="text-brand-orange">|</span> UDARA
        </Link>

        {/* Desktop Nav */}
        <div className="flex items-center gap-4">
          <SignedOut>
            <Link href="/ambassador/login">
              <Button
                variant="outline"
                className="hidden sm:inline-flex border-white/20 text-white hover:bg-white/10 hover:text-brand-lime"
              >
                Ambassador Access
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="default">Register</Button>
            </Link>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10 border border-white/20",
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
