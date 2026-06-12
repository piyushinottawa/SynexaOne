import Navigation from "@/components/Navigation";

export default function CategoriesPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-slate-950 text-white p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold">Categories</h1>
              <p className="text-slate-400 mt-2">
                Organize documents by category and classification.
              </p>
            </div>

            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg">
              + Add Category
            </button>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-800">
                <tr>
                  <th className="text-left p-4">Category</th>
                  <th className="text-left p-4">Description</th>
                  <th className="text-left p-4">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t border-slate-800">
                  <td className="p-4">No categories available</td>
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