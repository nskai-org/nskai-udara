import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { VibeCard } from "@/components/vibe-card";
import { Users, Trophy } from "lucide-react";
import { getRank, getNextRank } from "@/lib/ranks";
import Link from "next/link";
import { CopyButton } from "@/components/copy-button";

export default async function DashboardPage() {
  const user = await currentUser();
  if (!user) return redirect("/ambassador/login");

  const dbUser = await prisma.user.findUnique({
    where: { email: user.emailAddresses[0].emailAddress },
    include: {
      _count: {
        select: { leads: true },
      },
    },
  });

  // Redirect to onboarding if profile is incomplete
  if (!dbUser || !dbUser.username || !dbUser.school) {
    return redirect("/onboarding");
  }

  const referralLink = `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/register?ref=${dbUser.username}`;

  const currentRank = getRank(dbUser._count.leads);
  const nextRankData = getNextRank(currentRank);

  return (
    <div className="min-h-screen bg-background text-white selection:bg-white selection:text-black">
      <Navbar />

      <main className="container mx-auto px-6 pt-24 pb-12">
        <header className="mb-12">
          <h1 className="font-heading text-5xl font-bold uppercase">
            Dashboard <span className="text-zinc-600">|</span>{" "}
            {dbUser.firstName}
          </h1>
          <p className="text-zinc-400 mt-2">
            Ambassador Handle:{" "}
            <span className="text-brand-orange">@{dbUser.username}</span>
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Stats Card */}
          <div className="bg-card border border-white/10 p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-brand-orange/10 rounded-sm text-brand-orange">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl uppercase">
                Total Referrals
              </h3>
            </div>
            <div className="text-6xl font-black font-heading tracking-tighter">
              {dbUser._count.leads}
            </div>
            <p className="text-sm text-zinc-500 mt-2 mb-4">
              People registered via your link
            </p>
            <Link href="/referrals">
              <Button
                variant="outline"
                size="sm"
                className="w-full border-white/20 text-xs uppercase"
              >
                View Details
              </Button>
            </Link>
          </div>

          {/* Rank Card */}
          <div className="bg-card border border-white/10 p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-brand-red/10 rounded-sm text-brand-red">
                <Trophy className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl uppercase">Rank</h3>
            </div>
            <div className="text-4xl font-black font-heading tracking-tighter text-brand-orange">
              {currentRank}
            </div>

            {nextRankData.next ? (
              <div className="mt-4">
                <p className="text-xs text-zinc-500 mb-1 flex justify-between">
                  <span>Next: {nextRankData.next}</span>
                  <span>
                    {dbUser._count.leads} / {nextRankData.threshold}
                  </span>
                </p>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand-red transition-all duration-500"
                    style={{
                      width: `${Math.min(100, (dbUser._count.leads / nextRankData.threshold) * 100)}%`,
                    }}
                  />
                </div>
              </div>
            ) : (
              <p className="text-xs text-zinc-500 mt-2">Max Level Achieved.</p>
            )}

            <Link href="/leaderboard" className="block mt-4">
              <Button
                variant="outline"
                size="sm"
                className="w-full border-white/20 text-xs uppercase"
              >
                View Leaderboard
              </Button>
            </Link>
          </div>

          {/* Quick Copy Link */}
          <div className="bg-card border border-white/10 p-6 md:col-span-2 lg:col-span-1">
            <h3 className="font-heading text-xl uppercase mb-4">
              Your Referral Link
            </h3>
            <div className="flex gap-2 w-full max-w-full">
              <div className="flex-1 min-w-0">
                <code className="block w-full bg-black border border-white/20 p-3 text-sm text-zinc-400 truncate font-mono">
                  {referralLink}
                </code>
              </div>
              <CopyButton text={referralLink} />
            </div>
            <p className="text-xs text-zinc-500 mt-4">
              Share this link. Anyone who registers through it counts towards
              your score.
            </p>
          </div>
        </div>

        {/* Vibe ID Section */}
        <section className="mt-16">
          <h2 className="font-heading text-3xl font-bold uppercase mb-8">
            Your Vibe ID
          </h2>
          <div className="flex flex-col xl:flex-row gap-8 items-start">
            <div className="w-full max-w-sm mx-auto xl:mx-0">
              <VibeCard
                username={dbUser.username}
                firstName={dbUser.firstName || "Ambassador"}
                lastName={dbUser.lastName || ""}
                school={dbUser.school || "Unknown Sector"}
                rank={currentRank}
              />
            </div>

            <div className="max-w-md pt-4 mx-auto xl:mx-0 text-center xl:text-left">
              <h3 className="text-xl font-bold mb-2">How to use</h3>
              <ul className="list-disc list-inside space-y-2 text-zinc-400 mb-6">
                <li>Download your ID Card.</li>
                <li>Post it on your Instagram Story / WhatsApp Status.</li>
                <li>Tell people to scan the code.</li>
              </ul>
              <Button className="w-full">Download ID Image</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
