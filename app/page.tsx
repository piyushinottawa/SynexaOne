import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-800">
        <div className="flex items-center">
  <Image
    src="/images/synexaone-logo.png"
    alt="SynexaOne"
    width={420}
    height={90}
    priority
  />
</div>

        <div className="hidden md:flex gap-8 text-sm text-slate-300">
          <a href="#solutions">Solutions</a>
          <a href="#why">Why SynexaOne</a>
          <a href="#industries">Industries</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="flex gap-3">
          <a href="/login" className="px-4 py-2 rounded-lg border border-slate-600">
            Company Login
          </a>
          <a href="#contact" className="px-4 py-2 rounded-lg bg-blue-600">
            Request Demo
          </a>
        </div>
      </nav>

      <section className="px-8 py-24 text-center">
        <p className="text-blue-400 font-semibold mb-4">
          CLOUD-NATIVE BUSINESS OPERATIONS PLATFORM
        </p>

        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          Business Operations,
          <br />
          Simplified.
        </h2>

        <p className="max-w-3xl mx-auto text-lg text-slate-300 mb-10">
          A unified platform for Customer Relationship Management, Supply Chain
          Management, and Document Management — designed to help organizations
          streamline operations, improve collaboration, and scale confidently.
        </p>

        <div className="flex justify-center gap-4">
          <a href="#contact" className="px-6 py-3 rounded-lg bg-blue-600 font-semibold">
            Request Demo
          </a>
          <a href="/login" className="px-6 py-3 rounded-lg border border-slate-600 font-semibold">
            Company Login
          </a>
        </div>

        <p className="mt-8 text-sm text-slate-400">
          Secure • Scalable • Multi-Tenant • AWS Cloud Native
        </p>
      </section>

      <section id="solutions" className="px-8 py-20 bg-slate-900">
        <h3 className="text-3xl font-bold text-center mb-12">Our Solutions</h3>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "CRM",
              subtitle: "Customer Relationship Management",
              text: "Manage customers, contacts, opportunities, activities, and business relationships from one centralized platform.",
            },
            {
              title: "SCM",
              subtitle: "Supply Chain Management",
              text: "Optimize suppliers, procurement, inventory, warehousing, and operational workflows with better visibility.",
            },
            {
              title: "DMS",
              subtitle: "Document Management System",
              text: "Securely store, organize, manage, and retrieve business documents with version control and audit trails.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl bg-slate-950 border border-slate-800 p-8">
              <h4 className="text-3xl font-bold text-blue-400 mb-2">{item.title}</h4>
              <p className="font-semibold mb-4">{item.subtitle}</p>
              <p className="text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="why" className="px-8 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">Why SynexaOne</h3>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Unified Platform",
            "Secure by Design",
            "Cloud Native",
            "Multi-Tenant Ready",
            "Workflow Driven",
            "Future Ready",
          ].map((item) => (
            <div key={item} className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              <h4 className="text-xl font-semibold mb-2">{item}</h4>
              <p className="text-slate-400">
                Built to support modern organizations with secure, scalable, and flexible operations.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="industries" className="px-8 py-20 bg-slate-900 text-center">
        <h3 className="text-3xl font-bold mb-6">Industries We Serve</h3>
        <p className="max-w-3xl mx-auto text-slate-300 mb-10">
          Designed to support organizations across multiple sectors with flexible
          business operations, document control, and supply chain capabilities.
        </p>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {[
            "Manufacturing",
            "Healthcare",
            "Professional Services",
            "Logistics",
            "Distribution",
            "Government",
            "Education",
            "Construction",
            "Energy & Utilities",
            "Non-Profit",
          ].map((industry) => (
            <span key={industry} className="rounded-full bg-slate-950 border border-slate-700 px-5 py-2">
              {industry}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="px-8 py-20 text-center">
        <h3 className="text-4xl font-bold mb-4">Ready to Transform Your Operations?</h3>
        <p className="text-slate-300 mb-8">
          Discover how SynexaOne can improve efficiency, collaboration, and operational visibility.
        </p>
        <a href="mailto:info@synexaone.com" className="px-8 py-3 rounded-lg bg-blue-600 font-semibold">
          Request a Demo
        </a>
      </section>

      <footer className="px-8 py-8 border-t border-slate-800 text-center text-slate-400">
        <p className="font-bold text-white">SYNEXAONE</p>
        <p>One Platform. Multiple Industries. Infinite Possibilities.</p>
        <p className="mt-2">CRM • SCM • DMS</p>
        <p className="mt-2">© 2026 SynexaOne • Powered by AWS</p>
      </footer>
    </main>
  );
}