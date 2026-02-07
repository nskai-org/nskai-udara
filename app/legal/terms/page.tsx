import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-zinc-300 selection:bg-white selection:text-black">
      <Navbar />
      <main className="container mx-auto px-6 py-32 max-w-4xl">
        <h1 className="font-heading text-4xl md:text-5xl font-black text-white uppercase mb-8">
          Terms of Service
        </h1>
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="lead text-xl text-zinc-400 mb-8">
            Welcome to NSKAI UDARA. By accessing our platform, you agree to
            these terms. We keep it simple, but please read carefully.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="mb-6">
            By registering for an event, becoming an ambassador, or using our
            services, you agree to comply with these Terms of Service. If you do
            not agree, you may not use the platform.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            2. Ambassador Program
          </h2>
          <p className="mb-6">
            As an NSKAI Ambassador, you agree to represent the brand positively.
            We reserve the right to revoke ambassador status for misconduct,
            fraud, or any activity deemed harmful to the community.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            3. Event Registration
          </h2>
          <p className="mb-6">
            Tickets and registrations are non-transferable unless explicitly
            stated. We are not responsible for lost or stolen QR codes.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            4. Limitation of Liability
          </h2>
          <p className="mb-6">
            NSKAI UDARA is provided &quot;as is&quot;. We are not liable for any
            damages arising from your use of the platform.
          </p>

          <hr className="border-white/10 my-12" />
          <p className="text-sm text-zinc-500">Last Updated: February 2026</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
