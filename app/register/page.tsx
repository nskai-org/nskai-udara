import { Navbar } from "@/components/navbar";
import { RegistrationForm } from "./register-form";
import { Suspense } from "react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6 pt-24">
        <div className="w-full max-w-lg">
          <div className="text-center mb-10">
            <h1 className="font-heading text-6xl font-black uppercase leading-[0.9] tracking-tighter sm:text-7xl mb-4">
              Get <span className="text-brand-lime">Access</span>
            </h1>
            <p className="text-zinc-400 text-lg">
              Join thousands of students for the ultimate experience.
            </p>
          </div>

          <div className="bg-card border border-white/10 p-6 md:p-8 backdrop-blur-sm">
            <Suspense
              fallback={
                <div className="text-center text-zinc-500">
                  Loading form logic...
                </div>
              }
            >
              <RegistrationForm />
            </Suspense>
          </div>
        </div>
      </main>
    </div>
  );
}
