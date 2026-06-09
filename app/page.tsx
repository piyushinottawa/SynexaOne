import Link from "next/link";

const modules = [
  {
    title: "Customer Relationship Management",
    short: "CRM",
    description: "Manage customers, relationships, contacts, and business activity.",
  },
  {
    title: "Supply Chain Management",
    short: "SCM",
    description: "Track suppliers, products, inventory, warehouses, and orders.",
  },
  {
    title: "Document Management System",
    short: "DMS",
    description: "Store, organize, search, and protect business documents.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="flex items-center justify-between px-10 py-6">
        <div>
          <h1 className="text-2xl font-bold">SynexaOne</h1>
          <p className="text-sm text-slate-400">
            Unified. Intelligent. Limitless.
          </p>
        </div>

        <Link
          href="/login"
          className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Company Login
        </Link>
      </header>

      <section className="px-10 py-24 text-center">
        <h2 className="mx-auto max-w-4xl text-5xl font-bold leading-tight">
          Enterprise platform for CRM, Supply Chain Management, and Document
          Management.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          SynexaOne helps organizations manage customer relationships,
          operational workflows, inventory, suppliers, and secure business
          documents from one modular SaaS platform.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/login"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
          >
            Company Login
          </Link>

          <a
            href="#modules"
            className="rounded-lg border border-slate-600 px-6 py-3 font-semibold hover:bg-slate-800"
          >
            View Modules
          </a>
        </div>
      </section>

      <section id="modules" className="px-10 pb-24">
        <h3 className="mb-8 text-center text-3xl font-bold">
          SynexaOne Modules
        </h3>

        <div className="grid gap-6 md:grid-cols-3">
          {modules.map((module) => (
            <div
              key={module.short}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold">
                {module.short}
              </div>

              <h4 className="text-xl font-semibold">{module.title}</h4>

              <p className="mt-3 text-slate-400">{module.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-800 px-10 py-10 text-center text-sm text-slate-500">
        © 2026 SynexaOne. Secure modular business management platform.
      </section>
    </main>
  );
}