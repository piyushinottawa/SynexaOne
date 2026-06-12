import Navigation from "@/components/Navigation";

export default function SettingsPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-slate-950 text-white p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Settings</h1>

          <p className="text-slate-400 mb-8">
            Configure your SynexaOne environment.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold">Company Profile</h2>
              <p className="text-slate-400 mt-2">
                Manage organization information.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold">Users</h2>
              <p className="text-slate-400 mt-2">
                Manage users and accounts.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold">Roles & Permissions</h2>
              <p className="text-slate-400 mt-2">
                Configure access controls.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold">System Information</h2>
              <p className="text-slate-400 mt-2">
                View application version and environment details.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}