type DashboardData = {
  organizations: number;
  users: number;
  customers: number;
  suppliers: number;
  products: number;
  inventory_items: number;
  warehouses: number;
  purchase_orders: number;
  sales_orders: number;
  documents: number;
};

async function getDashboardData(): Promise<DashboardData> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/dashboard`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch dashboard data");
  }

  return res.json();
}

export default async function DashboardPage() {
  const data = await getDashboardData();

  const cards = [
    { title: "Organizations", value: data.organizations },
    { title: "Users", value: data.users },
    { title: "Customers", value: data.customers },
    { title: "Suppliers", value: data.suppliers },
    { title: "Products", value: data.products },
    { title: "Inventory Items", value: data.inventory_items },
    { title: "Warehouses", value: data.warehouses },
    { title: "Purchase Orders", value: data.purchase_orders },
    { title: "Sales Orders", value: data.sales_orders },
    { title: "Documents", value: data.documents },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          SynexaOne Dashboard
        </h1>
        <p className="mt-2 text-gray-600">
          Customer Relationship Management, Supply Chain Management, and
          Document Management System overview.
        </p>
      </div>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-medium text-gray-500">{card.title}</p>
            <p className="mt-3 text-3xl font-bold text-gray-900">
              {card.value}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Customer Relationship Management
          </h2>
          <p className="mt-2 text-gray-600">
            Manage organizations, customers, suppliers, users, and business
            relationships.
          </p>
          <div className="mt-4 text-sm text-gray-700">
            Customers: {data.customers}
            <br />
            Suppliers: {data.suppliers}
            <br />
            Organizations: {data.organizations}
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Supply Chain Management
          </h2>
          <p className="mt-2 text-gray-600">
            Track products, warehouses, inventory, purchase orders, and sales
            orders.
          </p>
          <div className="mt-4 text-sm text-gray-700">
            Products: {data.products}
            <br />
            Inventory Items: {data.inventory_items}
            <br />
            Warehouses: {data.warehouses}
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Document Management System
          </h2>
          <p className="mt-2 text-gray-600">
            Store, manage, search, and protect business documents with audit
            visibility.
          </p>
          <div className="mt-4 text-sm text-gray-700">
            Documents: {data.documents}
            <br />
            Users: {data.users}
            <br />
            Active Modules: 3
          </div>
        </div>
      </section>
    </main>
  );
}