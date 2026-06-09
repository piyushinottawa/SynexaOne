import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT *
      FROM inventory
      ORDER BY id DESC
    `);

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("Inventory GET error:", error);

    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    );
  }
}