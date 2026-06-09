async function getEmployees() {
  const res = await fetch("/api/employee-details"), {
    cache: "no-store",
  });

  return res.json();
}

export default async function EmployeesPage() {
  const employees = await getEmployees();

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        SynexaOne Employees
      </h1>

      <p className="text-gray-600 mb-6">
        Employee records connected to AWS RDS PostgreSQL.
      </p>

      <div className="bg-white rounded-xl shadow border overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Department</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee: any) => (
              <tr key={employee.id} className="border-t">
                <td className="p-4">{employee.id}</td>
                <td className="p-4 font-medium">{employee.name}</td>
                <td className="p-4">{employee.email}</td>
                <td className="p-4">
                  {employee.department_name || "Unassigned"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}