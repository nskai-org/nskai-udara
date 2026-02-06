import { SignIn } from "@clerk/nextjs";
import { Navbar } from "@/components/navbar";

export default function AmbassadorLoginPage() {
  return (
    <div className="min-h-screen bg-black text-white relative selection:bg-white selection:text-black">
      <Navbar />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="flex items-center justify-center min-h-screen pt-20 px-4 relative z-10">
        <SignIn
          forceRedirectUrl="/onboarding"
          appearance={{
            elements: {
              formButtonPrimary:
                "bg-brand-lime text-black hover:bg-brand-lime/90 rounded-none font-bold uppercase",
              card: "bg-card border border-white/10 rounded-none",
              headerTitle: "font-heading uppercase text-2xl",
              headerSubtitle: "text-zinc-400 font-sans",
              socialButtonsBlockButton:
                "rounded-none border-white/20 text-white hover:bg-white/5",
              formFieldInput: "bg-input border-border text-white rounded-none",
              footerActionLink: "text-brand-lime hover:text-brand-lime/80",
            },
          }}
        />
      </div>
    </div>
  );
}
