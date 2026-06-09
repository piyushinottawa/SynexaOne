async function getDepartments() {
  const res = await fetch("/api/departments"), {
    cache: "no-store",
  });

  return res.json();
}

export default async function DepartmentsPage() {
  const departments = await getDepartments();

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        SynexaOne Departments
      </h1>

      <p className="text-gray-600 mb-6">
        Department records connected to AWS RDS PostgreSQL.
      </p>

      <div className="bg-white rounded-xl shadow border overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Department Name</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((department: any) => (
              <tr key={department.id} className="border-t">
                <td className="p-4">{department.id}</td>
                <td className="p-4 font-medium">{department.department_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}