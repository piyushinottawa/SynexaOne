import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT *
      FROM suppliers
      ORDER BY created_at DESC
    `);

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("Suppliers GET error:", error);

    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    );
  }
}