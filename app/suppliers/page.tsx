import Navigation from "@/components/Navigation";

export default function SuppliersPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-slate-950 text-white p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold">Suppliers</h1>
              <p className="text-slate-400 mt-2">
                Manage vendors and supplier relationships.
              </p>
            </div>

            <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg">
              + Add Supplier
            </button>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 mb-6">
            <input
              type="text"
              placeholder="Search suppliers..."
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white"
            />
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-800">
                <tr>
                  <th className="text-left p-4">Supplier</th>
                  <th className="text-left p-4">Contact</th>
                  <th className="text-left p-4">Email</th>
                  <th className="text-left p-4">Phone</th>
                  <th className="text-left p-4">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t border-slate-800">
                  <td className="p-4">No suppliers available</td>
                  <td className="p-4">-</td>
                  <td className="p-4">-</td>
                  <td className="p-4">-</td>
                  <td className="p-4">
                    <span className="bg-slate-700 px-2 py-1 rounded">
                      Empty
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}