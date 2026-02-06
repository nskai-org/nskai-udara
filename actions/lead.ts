"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  university: string;
  phone: string;
  referralCode?: string; // The "ref" from the URL
}

export async function registerLead(data: RegistrationData) {
  // 1. Check if email already exists
  const existingLead = await prisma.lead.findUnique({
    where: { email: data.email },
  });

  if (existingLead) {
    throw new Error("This email is already registered. See you there!");
  }

  // 2. Validate Referral Code (if present)
  let referrerUsername = null;
  if (data.referralCode) {
    const referrer = await prisma.user.findUnique({
      where: { username: data.referralCode },
    });
    if (referrer) {
      referrerUsername = referrer.username; // Use the verified username
    }
  }

  // 3. Create the Lead
  await prisma.lead.create({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      university: data.university,
      phone: data.phone,
      source: referrerUsername ? "AMBASSADOR" : "PUBLIC",
      referredBy: referrerUsername,
    },
  });

  // 4. Revalidate cache (update live counters)
  revalidatePath("/");
  revalidatePath("/dashboard");

  return { success: true };
}
