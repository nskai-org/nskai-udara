"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface OnboardingData {
  clerkId: string;
  email: string;
  firstName: string;
  lastName: string;
  university: string;
  phone: string;
  username: string;
}

export async function createAmbassadorProfile(data: OnboardingData) {
  // Validate duplicate username
  const existingUser = await prisma.user.findUnique({
    where: { username: data.username },
  });

  if (existingUser) {
    throw new Error("Username taken");
  }

  // Upsert user (in case they exist but incomplete, or fresh create)
  await prisma.user.upsert({
    where: { email: data.email },
    update: {
      firstName: data.firstName,
      lastName: data.lastName,
      school: data.university,
      phone: data.phone,
      username: data.username,
    },
    create: {
      id: data.clerkId,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      school: data.university,
      phone: data.phone,
      username: data.username,
    },
  });

  revalidatePath("/dashboard");
}
