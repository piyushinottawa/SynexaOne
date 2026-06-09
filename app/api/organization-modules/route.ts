import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT
        om.id,
        o.organization_name,
        m.module_name,
        om.is_enabled,
        om.created_at
      FROM organization_modules om
      JOIN organizations o
        ON om.organization_id = o.id
      JOIN modules m
        ON om.module_id = m.id
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