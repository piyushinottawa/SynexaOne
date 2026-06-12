export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">SynexaOne Dashboard</h1>
        <p className="text-slate-400 mb-10">
          Welcome to your unified CRM, SCM, and DMS workspace.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <a href="/customers" className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500">
            <h2 className="text-2xl font-bold text-blue-400">CRM</h2>
            <p className="text-slate-400 mt-2">Customers, contacts, opportunities, and activities.</p>
          </a>

          <a href="/inventory" className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500">
            <h2 className="text-2xl font-bold text-green-400">SCM</h2>
            <p className="text-slate-400 mt-2">Inventory, suppliers, procurement, and shipments.</p>
          </a>

          <a href="/documents" className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500">
            <h2 className="text-2xl font-bold text-purple-400">DMS</h2>
            <p className="text-slate-400 mt-2">Documents, records, search, and audit trail.</p>
          </a>
        </div>

        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
            <ul className="space-y-3 text-slate-400">
              <li>System initialized</li>
              <li>CRM, SCM, and DMS modules available</li>
              <li>Dashboard workspace ready</li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Notifications</h3>
            <p className="text-slate-400">No new notifications.</p>
          </div>
        </section>
      </div>
    </main>
  );
}