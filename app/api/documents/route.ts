import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  const result = await pool.query(`
    SELECT
      d.id,
      d.document_name,
      d.document_type,
      dept.department_name,
      d.owner_name,
      d.status,
      d.created_at
    FROM documents d
    LEFT JOIN departments dept
      ON d.department_id = dept.id
    ORDER BY d.id
  `);

  return NextResponse.json(result.rows);
}