import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-zinc-300 selection:bg-white selection:text-black">
      <Navbar />
      <main className="container mx-auto px-6 py-32 max-w-4xl">
        <h1 className="font-heading text-4xl md:text-5xl font-black text-white uppercase mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="lead text-xl text-zinc-400 mb-8">
            Your privacy matters. This policy explains how NSKAI UDARA collects,
            uses, and protects your information.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            1. Information We Collect
          </h2>
          <p className="mb-6">
            We collect information you provide directly to us, such as your
            name, email address, university, and phone number when you register
            for an event or join as an ambassador.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            2. How We Use Your Data
          </h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>To facilitate event registration and access.</li>
            <li>To track ambassador referrals and leaderboard rankings.</li>
            <li>To send important updates regarding the event.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            3. Data Sharing
          </h2>
          <p className="mb-6">
            We do not sell your personal data. We may share data with trusted
            third-party service providers (e.g., payment processors, email
            services) solely for the purpose of operating the platform.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            4. Your Rights
          </h2>
          <p className="mb-6">
            You have the right to request access to or deletion of your personal
            data. Contact support@nskai.com for assistance.
          </p>

          <hr className="border-white/10 my-12" />
          <p className="text-sm text-zinc-500">Last Updated: February 2026</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
