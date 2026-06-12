import Navigation from "@/components/Navigation";

export default function DMSPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-slate-950 text-white p-8">
        <h1 className="text-4xl font-bold mb-2">DMS</h1>

        <p className="text-slate-400 mb-8">
          Document Management System
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="/documents"
            className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-purple-500"
          >
            <h2 className="text-xl font-semibold">Documents</h2>
            <p className="text-slate-400 mt-2">
              Manage business documents and records.
            </p>
          </a>

          <a
            href="/categories"
            className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-purple-500"
          >
            <h2 className="text-xl font-semibold">Categories</h2>
            <p className="text-slate-400 mt-2">
              Organize documents by category.
            </p>
          </a>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h2 className="text-xl font-semibold">Search</h2>
            <p className="text-slate-400 mt-2">
              Search and locate documents quickly.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h2 className="text-xl font-semibold">Audit Trail</h2>
            <p className="text-slate-400 mt-2">
              Track document history and activities.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}