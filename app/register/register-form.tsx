"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { registerLead } from "@/actions/lead";
import { CheckCircle2, Ticket } from "lucide-react";

export function RegistrationForm() {
  const searchParams = useSearchParams();
  const referralCode = searchParams.get("ref");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    try {
      await registerLead({
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        email: formData.get("email") as string,
        university: formData.get("university") as string,
        phone: formData.get("phone") as string,
        referralCode: referralCode || undefined,
      });

      setSuccess(true);
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong. Try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="text-center animate-in fade-in zoom-in duration-500">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-lime/10 text-brand-lime">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h2 className="font-heading text-4xl font-bold uppercase mb-4">
          You&apos;re In!
        </h2>
        <p className="text-zinc-400 mb-8 max-w-md mx-auto">
          Your spot is secured. We&apos;ve received your details. A confirmation
          email would be sent to your email in 24 hours. Get ready for the
          takeover.
        </p>
        <Button
          className="w-full text-lg h-14"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {referralCode && (
        <div className="bg-brand-purple/10 border border-brand-purple/30 p-3 text-center mb-6">
          <p className="text-sm text-brand-purple uppercase tracking-widest font-bold">
            Invited by Agent <span className="text-white">@{referralCode}</span>
          </p>
        </div>
      )}

      {error && (
        <p className="text-red-500 text-sm font-bold text-center bg-red-500/10 p-3 border border-red-500/20">
          {error}
        </p>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs uppercase text-zinc-500 font-bold tracking-widest ml-1 mb-1 block">
            First Name
          </label>
          <input
            name="firstName"
            required
            className="w-full bg-input border border-border p-4 text-white rounded-none focus:outline-none focus:border-brand-lime transition-colors"
            placeholder="JOHNNY"
          />
        </div>
        <div>
          <label className="text-xs uppercase text-zinc-500 font-bold tracking-widest ml-1 mb-1 block">
            Last Name
          </label>
          <input
            name="lastName"
            required
            className="w-full bg-input border border-border p-4 text-white rounded-none focus:outline-none focus:border-brand-lime transition-colors"
            placeholder="SILVERHAND"
          />
        </div>
      </div>

      <div>
        <label className="text-xs uppercase text-zinc-500 font-bold tracking-widest ml-1 mb-1 block">
          Email Address
        </label>
        <input
          name="email"
          type="email"
          required
          className="w-full bg-input border border-border p-4 text-white rounded-none focus:outline-none focus:border-brand-lime transition-colors"
          placeholder="wake@up.samurai"
        />
      </div>

      <div>
        <label className="text-xs uppercase text-zinc-500 font-bold tracking-widest ml-1 mb-1 block">
          Phone (WhatsApp)
        </label>
        <input
          name="phone"
          required
          className="w-full bg-input border border-border p-4 text-white rounded-none focus:outline-none focus:border-brand-lime transition-colors"
          placeholder="+234..."
        />
      </div>

      <div>
        <label className="text-xs uppercase text-zinc-500 font-bold tracking-widest ml-1 mb-1 block">
          University
        </label>
        <input
          name="university"
          required
          className="w-full bg-input border border-border p-4 text-white rounded-none focus:outline-none focus:border-brand-lime transition-colors"
          placeholder="UNILAG"
        />
      </div>

      <Button
        disabled={loading}
        className="w-full h-16 text-xl mt-6 relative overflow-hidden group"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {loading ? (
            "Securing Spot..."
          ) : (
            <>
              Register now <Ticket className="w-5 h-5" />
            </>
          )}
        </span>
      </Button>
    </form>
  );
}
