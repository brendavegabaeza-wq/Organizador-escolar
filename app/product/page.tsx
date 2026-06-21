export default function ProductPage() {
  const modules = [
    {
      title: "Tasks",
      text: "Manage assignments, deadlines, and priorities.",
      tag: "Core",
    },
    {
      title: "Subjects",
      text: "Organize courses, materials, and academic goals.",
      tag: "Core",
    },
    {
      title: "Calendar",
      text: "Plan weekly schedules, exams, reminders, and important dates.",
      tag: "Core",
    },
    {
      title: "Notes",
      text: "Capture, organize, and review class notes in one place.",
      tag: "Core",
    },
    {
      title: "Core Agent",
      text: "Generate structured study plans from messy academic ideas.",
      tag: "AI",
    },
    {
      title: "Research Dashboard",
      text: "Compare competitors, risks, evidence, and localization insights.",
      tag: "Research",
    },
    {
      title: "Pricing Simulator",
      text: "Test pricing assumptions and save revenue scenarios.",
      tag: "Growth",
    },
  ];

  const features = [
    "Tasks & Deadlines",
    "Subjects & Materials",
    "Calendar & Reminders",
    "Notes",
    "Core Agent",
    "Research Dashboard",
    "Pricing Simulator",
    "Advanced Analytics",
    "Team / Class Collaboration",
    "Export & Integrations",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-rose-50 text-slate-900">
      <nav className="flex items-center justify-between border-b border-pink-100 bg-white px-8 py-5 shadow-sm">
        <h1 className="text-xl font-bold text-pink-600">School Organizer</h1>

        <div className="flex gap-5 text-sm font-medium text-slate-600">
          <a href="/">Home</a>
          <a href="/core">Core Agent</a>
          <a href="/research">Research</a>
          <a href="/product" className="font-bold text-pink-600">
            Product
          </a>
          <a href="/pricing">Pricing</a>
          <a href="/docs">Docs</a>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <p className="mb-4 inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
          Week 3 · Product Architecture
        </p>

        <h2 className="text-5xl font-bold tracking-tight">
          Product Architecture
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Map the School Organizer modules, product flow, feature tiers, and
          future growth strategy.
        </p>

        <section className="mt-10">
          <h3 className="text-2xl font-bold">Core Modules</h3>

          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {modules.map((module) => (
              <article
                key={module.title}
                className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-xl font-bold text-pink-600">
                  {module.title.charAt(0)}
                </div>

                <h4 className="text-lg font-bold">{module.title}</h4>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {module.text}
                </p>

                <p className="mt-4 inline-block rounded-full bg-pink-100 px-3 py-1 text-xs font-bold text-pink-700">
                  {module.tag}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-pink-100 bg-white shadow-sm">
          <div className="border-b border-pink-100 p-6">
            <h3 className="text-2xl font-bold">Feature Map</h3>
            <p className="mt-2 text-sm text-slate-600">
              The feature map shows how School Organizer can grow from a free
              academic organizer into paid plans for students and schools.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[850px] border-collapse text-left text-sm">
              <thead className="bg-pink-50 text-slate-700">
                <tr>
                  <th className="p-4">Feature</th>
                  <th className="p-4 text-center">Free</th>
                  <th className="p-4 text-center">Student Plus</th>
                  <th className="p-4 text-center">School Pro</th>
                </tr>
              </thead>

              <tbody>
                {features.map((feature, index) => (
                  <tr key={feature} className="border-t border-pink-100">
                    <td className="p-4 font-medium">{feature}</td>
                    <td className="p-4 text-center">
                      {index < 4 ? "✓" : "—"}
                    </td>
                    <td className="p-4 text-center">
                      {index < 7 ? "✓" : "—"}
                    </td>
                    <td className="p-4 text-center">✓</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-pink-100 bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-bold">Product Flow</h3>

          <div className="mt-6 grid gap-6 md:grid-cols-4">
            {[
              "Student input",
              "Organized dashboard",
              "Saved outputs",
              "Future analytics",
            ].map((step, index) => (
              <article
                key={step}
                className="rounded-2xl border border-pink-100 bg-pink-50 p-5"
              >
                <p className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-pink-600 text-sm font-bold text-white">
                  {index + 1}
                </p>

                <h4 className="font-bold">{step}</h4>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {index === 0 &&
                    "Students enter tasks, notes, resources, and goals."}
                  {index === 1 &&
                    "The system organizes academic information in one place."}
                  {index === 2 &&
                    "Generated plans and saved items become easy to revisit."}
                  {index === 3 &&
                    "Future analytics can support smarter study decisions."}
                </p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}