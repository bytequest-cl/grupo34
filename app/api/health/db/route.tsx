// app/api/health/db/route.ts
import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const tables = await prisma.$queryRaw`SHOW TABLES;`;
  return NextResponse.json({ ok: true, tables });
}
