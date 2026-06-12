import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT
        p.product_id,
        p.product_name,
        p.sku,
        i.quantity
      FROM products p
      LEFT JOIN inventory i
      ON p.product_id = i.product_id
      ORDER BY p.product_name
    `);

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch inventory" },
      { status: 500 }
    );
  }
}