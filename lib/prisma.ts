import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/client";

const connectionString = `${process.env.DATABASE_URL}`;

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
  pool: Pool;
  adapter: PrismaPg;
};

// Singleton pattern for Pool and Adapter to prevent connection leaks in dev
const pool =
  globalForPrisma.pool ||
  new Pool({
    connectionString,
    max: 10,
    idleTimeoutMillis: 30000,
  });

const adapter = globalForPrisma.adapter || new PrismaPg(pool);

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
  globalForPrisma.pool = pool;
  globalForPrisma.adapter = adapter;
}
