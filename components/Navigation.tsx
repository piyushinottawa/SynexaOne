export default function Navigation() {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex gap-6 text-slate-300">
        <a
          href="/dashboard"
          className="hover:text-white transition"
        >
          Dashboard
        </a>

        <a
          href="/crm"
          className="hover:text-white transition"
        >
          CRM
        </a>

        <a
          href="/scm"
          className="hover:text-white transition"
        >
          SCM
        </a>

        <a
          href="/dms"
          className="hover:text-white transition"
        >
          DMS
        </a>
      </div>
    </nav>
  );
}