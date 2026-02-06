import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma"; // We need to create this lib/prisma file!
import { OnboardingForm } from "./onboarding-form"; // We'll create this component next

export default async function OnboardingPage() {
  const user = await currentUser();

  if (!user) return redirect("/ambassador/login");

  // Check if they already have a profile
  const dbUser = await prisma.user.findUnique({
    where: { email: user.emailAddresses[0].emailAddress },
  });

  // If they have a username/school, they are good. Go to dashboard.
  if (dbUser?.username && dbUser?.school) {
    return redirect("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold uppercase">
            Welcome, {user.firstName || "Legend"}
          </h1>
          <p className="mt-2 text-zinc-400">
            Let&apos;s set up your Ambassador Profile.
          </p>
        </div>

        <OnboardingForm
          email={user.emailAddresses[0].emailAddress}
          clerkId={user.id}
        />
      </div>
    </div>
  );
}
