import { NextResponse } from "next/server";
import { createMockDashboard } from "@/features/shared/lib/mock-dashboard";

export async function GET() {
  return NextResponse.json(
    createMockDashboard("laboratory", "Laboratory Dashboard"),
  );
}
