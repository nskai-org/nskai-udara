import { prisma } from "@/lib/prisma";
import { Navbar } from "@/components/navbar";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Users, Phone, Mail, GraduationCap } from "lucide-react";

export default async function ReferralsPage() {
  const user = await currentUser();
  if (!user) return redirect("/ambassador/login");

  const dbUser = await prisma.user.findUnique({
    where: { email: user.emailAddresses[0].emailAddress },
  });

  if (!dbUser) return redirect("/onboarding");

  const referrals = await prisma.lead.findMany({
    where: { referredBy: dbUser.username },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <main className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <header className="mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-2">
            My Referrals
          </h1>
          <p className="text-zinc-400">
            You have recruited{" "}
            <span className="text-brand-lime font-bold">
              {referrals.length}
            </span>{" "}
            operatives.
          </p>
        </header>

        <div className="bg-card border border-white/10 overflow-hidden relative">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="uppercase tracking-wider border-b border-white/10 bg-white/5">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 font-heading font-black text-zinc-400"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-heading font-black text-zinc-400"
                  >
                    Contact
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-heading font-black text-zinc-400"
                  >
                    School
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-heading font-black text-zinc-400"
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {referrals.map((lead) => (
                  <tr
                    key={lead.id}
                    className="hover:bg-white/5 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="font-bold flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-brand-lime/10 flex items-center justify-center text-brand-lime">
                          <Users className="w-4 h-4" />
                        </div>
                        {lead.firstName} {lead.lastName}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-zinc-300">
                          <Mail className="w-3 h-3 text-zinc-500" />{" "}
                          {lead.email}
                        </div>
                        {lead.phone && (
                          <div className="flex items-center gap-2 text-zinc-300">
                            <Phone className="w-3 h-3 text-zinc-500" />{" "}
                            {lead.phone}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-zinc-300">
                        <GraduationCap className="w-3 h-3 text-zinc-500" />{" "}
                        {lead.university}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-zinc-500 font-mono text-xs">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}

                {referrals.length === 0 && (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-6 py-12 text-center text-zinc-500 italic"
                    >
                      No referrals yet. Share your vibe card to get started.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
