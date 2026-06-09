import pool from "@/lib/db";

export default async function InventoryPage() {
  const result = await pool.query(`
    SELECT *
    FROM products
    ORDER BY id
  `);

  const products = result.rows;

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        SynexaOne Inventory
      </h1>

      <p className="text-gray-600 mb-6">
        CellChem Pharma inventory records connected to AWS RDS PostgreSQL.
      </p>

      <div className="bg-white rounded-xl shadow border overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Product</th>
              <th className="p-4">Category</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Unit Price</th>
              <th className="p-4">Reorder Level</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product: any) => (
              <tr key={product.id} className="border-t">
                <td className="p-4">{product.id}</td>
                <td className="p-4 font-medium">{product.product_name}</td>
                <td className="p-4">{product.category}</td>
                <td className="p-4">{product.quantity}</td>
                <td className="p-4">${product.unit_price}</td>
                <td className="p-4">{product.reorder_level}</td>
                <td className="p-4">{product.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}