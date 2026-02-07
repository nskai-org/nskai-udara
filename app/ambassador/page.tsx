import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Trophy, Zap, Users } from "lucide-react";

export default function AmbassadorPage() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-white selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative mx-auto max-w-5xl text-center">
          <h1 className="font-heading text-6xl font-black uppercase leading-[0.9] tracking-tighter sm:text-8xl md:text-9xl">
            Lead The <br />
            <span className="text-brand-yellow font-bold">Movement</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-xl text-zinc-400">
            Become an NSKAI Ambassador. Rep your school, earn exclusive rewards,
            and be the face of the event of the year.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/ambassador/login">
              <Button size="lg" className="h-14 px-8 text-lg">
                Join the Squad <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Perks Grid */}
      <section className="py-24 px-6 relative z-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center font-heading text-4xl font-bold uppercase tracking-tight md:text-6xl">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-red to-brand-yellow">
              Join Us?
            </span>
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Perk 1 */}
            <div className="group relative overflow-hidden bg-card border border-white/10 p-8 hover:border-brand-orange/50 transition-colors">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-brand-orange/10 text-brand-orange">
                <Trophy className="h-6 w-6" />
              </div>
              <h3 className="mb-4 font-heading text-2xl font-bold uppercase">
                Exclusive Rewards
              </h3>
              <p className="text-zinc-400">
                Top referrers unlock VIP access, custom merch, and recognition
                on the main stage.
              </p>
            </div>

            {/* Perk 2 */}
            <div className="group relative overflow-hidden bg-card border border-white/10 p-8 hover:border-brand-red/50 transition-colors">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-brand-red/10 text-brand-red">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mb-4 font-heading text-2xl font-bold uppercase">
                The Vibe ID
              </h3>
              <p className="text-zinc-400">
                Get your own custom holographic ID card to flex on socials.
                It&apos;s your digital pass to greatness.
              </p>
            </div>

            {/* Perk 3 */}
            <div className="group relative overflow-hidden bg-card border border-white/10 p-8 hover:border-brand-yellow/50 transition-colors">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-brand-yellow/10 text-brand-yellow">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mb-4 font-heading text-2xl font-bold uppercase">
                Community
              </h3>
              <p className="text-zinc-400">
                Connect with student leaders from universities across the
                country. Your network is your net worth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 border-t border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-4xl text-center px-6">
          <h2 className="font-heading text-5xl font-black uppercase tracking-tighter md:text-7xl">
            Ready to take over?
          </h2>
          <div className="mt-10">
            <Link href="/ambassador/login">
              <Button size="lg" className="h-16 px-10 text-xl w-full sm:w-auto">
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
