import { NextResponse } from "next/server";
import sql from "@/lib/db";

export async function GET() {
  try {
    const suppliers = await sql`
      SELECT *
      FROM suppliers
      ORDER BY supplier_id DESC
    `;

    return NextResponse.json(suppliers);
  } catch (error) {
    console.error("Suppliers GET error:", error);

    return NextResponse.json(
      { error: "Failed to fetch suppliers" },
      { status: 500 }
    );
  }
}