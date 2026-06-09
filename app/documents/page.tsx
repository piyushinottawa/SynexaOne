async function getDocuments() {
  const res = await fetch("/api/documents", {
    cache: "no-store",
  });

  return res.json();
}

export default async function DocumentsPage() {
  const documents = await getDocuments();

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        SynexaOne Documents
      </h1>

      <p className="text-gray-600 mb-6">
        Document Content Management records connected to AWS RDS PostgreSQL.
      </p>

      <div className="bg-white rounded-xl shadow border overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Document Name</th>
              <th className="p-4">Type</th>
              <th className="p-4">Department</th>
              <th className="p-4">Owner</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((document: any) => (
              <tr key={document.id} className="border-t">
                <td className="p-4">{document.id}</td>
                <td className="p-4 font-medium">{document.document_name}</td>
                <td className="p-4">{document.document_type}</td>
                <td className="p-4">{document.department_name}</td>
                <td className="p-4">{document.owner_name}</td>
                <td className="p-4">{document.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}