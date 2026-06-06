async function getEmployees() {
  const res = await fetch("http://localhost:3000/api/employee-details", {
    cache: "no-store",
  });

  return res.json();
}

export default async function DashboardPage() {
  const employees = await getEmployees();

  const totalEmployees = employees.length;
  const departments = [...new Set(employees.map((e: any) => e.department_name))];

  const countByDept = (dept: string) =>
    employees.filter((e: any) => e.department_name === dept).length;

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">
        SynexaOne Dashboard
      </h1>

      <p className="text-gray-600 mb-8">
        Enterprise SaaS overview powered by AWS RDS PostgreSQL.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow border">
          <h2 className="text-gray-500">Total Employees</h2>
          <p className="text-4xl font-bold mt-2">{totalEmployees}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border">
          <h2 className="text-gray-500">Departments</h2>
          <p className="text-4xl font-bold mt-2">{departments.length}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border">
          <h2 className="text-gray-500">Platform Status</h2>
          <p className="text-2xl font-bold mt-2 text-green-600">Online</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border">
          <h2 className="text-gray-500">IT</h2>
          <p className="text-4xl font-bold mt-2">{countByDept("IT")}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border">
          <h2 className="text-gray-500">Sales</h2>
          <p className="text-4xl font-bold mt-2">{countByDept("Sales")}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border">
          <h2 className="text-gray-500">Finance</h2>
          <p className="text-4xl font-bold mt-2">{countByDept("Finance")}</p>
        </div>
      </div>
    </main>
  );
}