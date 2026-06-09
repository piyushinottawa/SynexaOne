import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    const [
      organizations,
      users,
      customers,
      suppliers,
      inventory,
      warehouses,
      products,
      purchaseOrders,
      salesOrders,
      documents
    ] = await Promise.all([
      pool.query("SELECT COUNT(*) FROM organizations"),
      pool.query("SELECT COUNT(*) FROM users"),
      pool.query("SELECT COUNT(*) FROM customers"),
      pool.query("SELECT COUNT(*) FROM suppliers"),
      pool.query("SELECT COUNT(*) FROM inventory"),
      pool.query("SELECT COUNT(*) FROM warehouses"),
      pool.query("SELECT COUNT(*) FROM products"),
      pool.query("SELECT COUNT(*) FROM purchase_orders"),
      pool.query("SELECT COUNT(*) FROM sales_orders"),
      pool.query("SELECT COUNT(*) FROM documents")
    ]);

    return NextResponse.json({
      organizations: Number(organizations.rows[0].count),
      users: Number(users.rows[0].count),
      customers: Number(customers.rows[0].count),
      suppliers: Number(suppliers.rows[0].count),
      products: Number(products.rows[0].count),
      inventory_items: Number(inventory.rows[0].count),
      warehouses: Number(warehouses.rows[0].count),
      purchase_orders: Number(purchaseOrders.rows[0].count),
      sales_orders: Number(salesOrders.rows[0].count),
      documents: Number(documents.rows[0].count)
    });
  } catch (error) {
    console.error("Dashboard GET error:", error);

    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    );
  }
}