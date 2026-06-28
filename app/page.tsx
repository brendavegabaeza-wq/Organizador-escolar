export default function HomePage() {
  const benefits = [
    {
      title: "Plan smarter",
      text: "Organize assignments, notes, deadlines, and study goals in one clear place.",
    },
    {
      title: "Reduce stress",
      text: "Turn messy school responsibilities into a simple academic plan before school feels overwhelming.",
    },
    {
      title: "Build better habits",
      text: "Use research, pricing, product planning, and marketing tools to improve the project each week.",
    },
  ];

  const modules = [
    "Core Agent",
    "Research Dashboard",
    "Product Architecture",
    "Pricing Simulator",
    "Marketing Engine",
    "Documentation",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-100 via-pink-50 to-red-100 text-slate-900">
      <nav className="flex items-center justify-between border-b border-rose-100 bg-white px-8 py-5 shadow-sm">
        <h1 className="text-xl font-bold text-rose-600">School Organizer</h1>

        <div className="flex gap-5 text-sm font-medium text-slate-600">
          <a href="/" className="font-bold text-rose-600">
            Home
          </a>
          <a href="/core">Core Agent</a>
          <a href="/research">Research</a>
          <a href="/product">Product</a>
          <a href="/pricing">Pricing</a>
          <a href="/marketing">Marketing</a>
          <a href="/docs">Docs</a>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-700">
              Student-built product system
            </p>

            <h2 className="text-5xl font-bold leading-tight tracking-tight">
              Organize school before school overwhelms you.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              School Organizer helps students plan tasks, structure study
              ideas, compare research, test pricing, and prepare marketing
              content in one connected product system.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/product"
                className="rounded-2xl bg-rose-600 px-6 py-3 font-bold text-white shadow-sm hover:bg-rose-700"
              >
                View Product
              </a>

              <a
                href="/pricing"
                className="rounded-2xl border border-rose-200 bg-white px-6 py-3 font-bold text-rose-700 hover:bg-rose-50"
              >
                Try Pricing
              </a>

              <a
                href="/marketing"
                className="rounded-2xl border border-rose-200 bg-rose-50 px-6 py-3 font-bold text-rose-700 hover:bg-rose-100"
              >
                Open Marketing Engine
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-rose-100 bg-white p-6 shadow-sm">
            <div className="rounded-2xl bg-gradient-to-br from-rose-50 to-red-50 p-6">
              <p className="text-sm font-bold text-rose-700">
                Weekly Product Progress
              </p>

              <div className="mt-5 space-y-4">
                {[
                  "Week 1: Core Agent",
                  "Week 2: Research Dashboard",
                  "Week 3: Product + Pricing",
                  "Week 4: Marketing Engine",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm"
                  >
                    <span className="font-medium text-slate-700">{item}</span>
                    <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-bold text-rose-700">
                      Built
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="mt-14 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-3xl border border-rose-100 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {benefit.text}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-14 rounded-3xl border border-rose-100 bg-white p-6 shadow-sm">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-bold">Product Modules</h3>
              <p className="mt-2 text-sm text-slate-600">
                School Organizer grows each week through connected product,
                research, pricing, and marketing modules.
              </p>
            </div>

            <a
              href="/docs"
              className="rounded-2xl border border-rose-200 bg-rose-50 px-5 py-3 text-sm font-bold text-rose-700 hover:bg-rose-100"
            >
              View Documentation
            </a>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {modules.map((module) => (
              <div
                key={module}
                className="rounded-2xl border border-rose-100 bg-gradient-to-br from-rose-50 to-red-50 p-5"
              >
                <p className="font-bold text-slate-800">{module}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-3xl bg-gradient-to-r from-rose-600 to-red-500 p-8 text-white shadow-sm">
          <h3 className="text-3xl font-bold">
            Ready to test the Week 4 Marketing Engine?
          </h3>

          <p className="mt-3 max-w-3xl leading-7 text-rose-50">
            Compare marketing headlines, choose a winner, write a reason, and
            save the result to Supabase so the decision remains available after
            refresh.
          </p>

          <a
            href="/marketing"
            className="mt-6 inline-block rounded-2xl bg-white px-6 py-3 font-bold text-rose-700 hover:bg-rose-50"
          >
            Go to Marketing Engine
          </a>
        </section>
      </section>
    </main>
  );
}