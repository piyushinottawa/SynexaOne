import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT
        ur.id,
        u.username,
        u.email,
        r.role_name,
        ur.created_at
      FROM user_roles ur
      JOIN users u
        ON ur.user_id = u.id
      JOIN roles r
        ON ur.role_id = r.id
      ORDER BY u.username
    `);

    return NextResponse.json(result.rows);
  } catch (error) {
    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    );
  }
}