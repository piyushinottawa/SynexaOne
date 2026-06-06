import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  const result = await pool.query(`
    SELECT
      e.id,
      e.name,
      e.email,
      d.department_name
    FROM employees e
    LEFT JOIN departments d
      ON e.department_id = d.id
    ORDER BY e.id
  `);

  return NextResponse.json(result.rows);
}