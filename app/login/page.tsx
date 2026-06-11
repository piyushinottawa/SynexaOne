export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">SynexaOne</h1>
          <p className="text-slate-400 mt-2">Company Login</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm mb-2 text-slate-300">
              Company ID
            </label>
            <input
              type="text"
              placeholder="Enter company ID"
              className="w-full rounded-lg bg-slate-950 border border-slate-700 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-slate-300">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@company.com"
              className="w-full rounded-lg bg-slate-950 border border-slate-700 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-slate-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full rounded-lg bg-slate-950 border border-slate-700 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-blue-400 hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>
    </main>
  );
}