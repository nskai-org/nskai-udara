"use server";

import { prisma } from "@/lib/prisma";

export async function getRegistrationCount() {
  try {
    const count = await prisma.lead.count();
    return count;
  } catch (error) {
    console.error("Failed to fetch stats:", error);
    return 0;
  }
}
