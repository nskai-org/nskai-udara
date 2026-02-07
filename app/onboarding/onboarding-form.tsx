"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { createAmbassadorProfile } from "@/actions/ambassador";

export function OnboardingForm({
  email,
  clerkId,
}: {
  email: string;
  clerkId: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const university = formData.get("university") as string;
    const phone = formData.get("phone") as string;
    const username = formData.get("username") as string;

    try {
      await createAmbassadorProfile({
        clerkId,
        email,
        firstName,
        lastName,
        university,
        phone,
        username,
      });

      // Redirect to dashboard on success
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Username might be taken!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 font-sans">
      {error && <p className="text-red-500 text-sm font-bold">{error}</p>}

      <div className="grid grid-cols-2 gap-4">
        <input
          name="firstName"
          placeholder="First Name"
          required
          className="bg-input border border-border p-3 text-white rounded-none focus:outline-none focus:border-brand-orange transition-colors"
        />
        <input
          name="lastName"
          placeholder="Last Name"
          required
          className="bg-input border border-border p-3 text-white rounded-none focus:outline-none focus:border-brand-orange transition-colors"
        />
      </div>

      <input
        name="university"
        placeholder="University Name"
        required
        className="bg-input border border-border p-3 text-white rounded-none focus:outline-none focus:border-brand-orange transition-colors"
      />

      <input
        name="phone"
        placeholder="Phone (WhatsApp preferred)"
        required
        className="bg-input border border-border p-3 text-white rounded-none focus:outline-none focus:border-brand-orange transition-colors"
      />

      <div className="relative">
        <span className="absolute left-3 top-3 text-zinc-500">@</span>
        <input
          name="username"
          placeholder="your_handle for your referral ID"
          required
          className="bg-input border border-border p-3 pl-8 w-full text-white rounded-none focus:outline-none focus:border-brand-orange transition-colors"
        />
      </div>

      <Button disabled={loading} className="w-full text-lg mt-2">
        {loading ? "Creating Profile..." : "Start Exploring"}
      </Button>
    </form>
  );
}
