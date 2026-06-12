import Navigation from "@/components/Navigation";

export default function SCMPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-slate-950 text-white p-8">
        <h1 className="text-4xl font-bold mb-2">SCM</h1>

        <p className="text-slate-400 mb-8">
          Supply Chain Management
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="/inventory"
            className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-green-500"
          >
            <h2 className="text-xl font-semibold">Inventory</h2>
          </a>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h2 className="text-xl font-semibold">Suppliers</h2>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h2 className="text-xl font-semibold">Purchase Orders</h2>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h2 className="text-xl font-semibold">Shipments</h2>
          </div>
        </div>
      </main>
    </>
  );
}