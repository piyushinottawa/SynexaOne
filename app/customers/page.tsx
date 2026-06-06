async function getCustomers() {
  const res = await fetch("http://localhost:3000/api/customers", {
    cache: "no-store",
  });

  return res.json();
}

export default async function CustomersPage() {
  const customers = await getCustomers();

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        SynexaOne CRM
      </h1>

      <p className="text-gray-600 mb-6">
        Customer Relationship Management records connected to AWS RDS PostgreSQL.
      </p>

      <div className="bg-white rounded-xl shadow border overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Customer Name</th>
              <th className="p-4">Company</th>
              <th className="p-4">Email</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer: any) => (
              <tr key={customer.id} className="border-t">
                <td className="p-4">{customer.id}</td>
                <td className="p-4 font-medium">{customer.customer_name}</td>
                <td className="p-4">{customer.company_name}</td>
                <td className="p-4">{customer.email}</td>
                <td className="p-4">{customer.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}