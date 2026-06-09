type Customer = {
  id: number;
  customer_name: string;
  company_name: string;
  contact_person: string;
  email: string;
  phone: string;
  city: string;
  province_state: string;
  country: string;
  postal_code: string;
  customer_type: string;
  status: string;
};

async function getCustomers(): Promise<Customer[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/customers`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch customers");
  }

  return res.json();
}

export default async function CustomersPage() {
  const customers = await getCustomers();

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Customer Relationship Management
        </h1>
        <p className="mt-2 text-gray-600">
          Manage customer records, contacts, and organization relationships.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3">Contact</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-t border-gray-200">
                <td className="px-4 py-3 font-medium text-gray-900">
                  {customer.customer_name || "-"}
                </td>
                <td className="px-4 py-3">{customer.company_name || "-"}</td>
                <td className="px-4 py-3">{customer.contact_person || "-"}</td>
                <td className="px-4 py-3">{customer.email || "-"}</td>
                <td className="px-4 py-3">{customer.phone || "-"}</td>
                <td className="px-4 py-3">
                  {[customer.city, customer.province_state, customer.country]
                    .filter(Boolean)
                    .join(", ") || "-"}
                </td>
                <td className="px-4 py-3">{customer.customer_type || "-"}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    {customer.status || "Active"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}