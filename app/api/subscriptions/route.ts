import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT
        s.id,
        o.organization_name,
        m.module_name,
        s.start_date,
        s.end_date,
        s.status
      FROM subscriptions s
      JOIN organizations o
        ON s.organization_id = o.id
      JOIN modules m
        ON s.module_id = m.id
      ORDER BY o.organization_name
    `);

    return NextResponse.json(result.rows);
  } catch (error) {
    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    );
  }
}