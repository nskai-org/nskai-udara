import { prisma } from "@/lib/prisma";
import { Navbar } from "@/components/navbar";
import { getRank } from "@/lib/ranks";
import { Trophy, Medal, User } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";

export const revalidate = 60; // Revalidate every minute

export default async function LeaderboardPage() {
  const user = await currentUser(); // To highlight the current user
  const userEmail = user?.emailAddresses[0]?.emailAddress;

  const topAmbassadors = await prisma.user.findMany({
    take: 50,
    orderBy: {
      leads: {
        _count: "desc",
      },
    },
    include: {
      _count: {
        select: { leads: true },
      },
    },
  });

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <main className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <header className="mb-12 text-center">
          <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase mb-4">
            Leaderboard
          </h1>
          <p className="text-zinc-400 max-w-lg mx-auto">
            The top operatives dominating the field.
            <span className="block text-brand-lime mt-1 font-bold">
              Earn your spot.
            </span>
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-4">
          {topAmbassadors.map((ambassador, index) => {
            const isMe = ambassador.email === userEmail;
            const rank = index + 1;
            const referralCount = ambassador._count.leads;
            const tier = getRank(referralCount);

            return (
              <div
                key={ambassador.id}
                className={`
                    flex items-center gap-4 p-4 border transition-all hover:scale-[1.01]
                    ${isMe ? "bg-brand-lime/10 border-brand-lime" : "bg-card border-white/10"}
                 `}
              >
                {/* Rank Number */}
                <div className="w-12 text-center shrink-0">
                  {rank === 1 && (
                    <Trophy className="w-8 h-8 text-yellow-400 mx-auto" />
                  )}
                  {rank === 2 && (
                    <Medal className="w-8 h-8 text-zinc-300 mx-auto" />
                  )}
                  {rank === 3 && (
                    <Medal className="w-8 h-8 text-amber-600 mx-auto" />
                  )}
                  {rank > 3 && (
                    <span className="text-2xl font-heading font-bold text-zinc-500">
                      #{rank}
                    </span>
                  )}
                </div>

                {/* User Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-lg truncate uppercase">
                      {ambassador.firstName || "Agent"}{" "}
                      {ambassador.lastName?.charAt(0)}.
                    </h3>
                    {isMe && (
                      <span className="text-[10px] bg-brand-lime text-black px-1.5 py-0.5 font-bold uppercase">
                        You
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-zinc-500 uppercase truncate">
                    {ambassador.school || "Unknown Sector"} •{" "}
                    <span className="text-brand-purple">{tier}</span>
                  </p>
                </div>

                {/* Score */}
                <div className="text-right shrink-0">
                  <div className="text-3xl font-black font-heading leading-none">
                    {referralCount}
                  </div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest">
                    Referrals
                  </div>
                </div>
              </div>
            );
          })}

          {topAmbassadors.length === 0 && (
            <div className="text-center py-20 border border-dashed border-white/10 rounded-sm">
              <User className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
              <p className="text-zinc-500">No data available yet.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
