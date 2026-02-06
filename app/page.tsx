import { LiveCounter } from "@/components/live-counter";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      {/* Grid Background Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <main className="relative flex flex-col items-center justify-center pt-32 pb-16">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-400 backdrop-blur-xl">
          <span className="mr-2 flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lime opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-lime"></span>
          </span>
          Registration is Live
        </div>

        {/* Hero Text */}
        <h1 className="text-center font-heading text-6xl font-black uppercase leading-[0.9] tracking-tighter sm:text-8xl md:text-9xl">
          The Future <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-lime to-emerald-400">
            Is Here
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-center text-lg text-zinc-400">
          Join thousands of students for the ultimate experience. Grab your ID.
          Share the vibe. Secure the bag.
        </p>

        <div className="mt-8 flex gap-4">
          <Link href="/register">
            <Button size="lg" className="text-lg">
              Register
            </Button>
          </Link>
          <Link href="/ambassador">
            <Button
              size="lg"
              variant="outline"
              className="text-lg border-white/20 text-white hover:bg-white/10"
            >
              Ambassador Hub
            </Button>
          </Link>
        </div>

        {/* Live Counter Section */}
        <div className="mt-24 w-full">
          <LiveCounter />
        </div>
      </main>
    </div>
  );
}
