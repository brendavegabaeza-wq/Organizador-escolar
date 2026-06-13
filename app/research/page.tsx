export default function ResearchPage() {
  const summaryCards = [
    {
      title: "Problem Evidence",
      text: "Students struggle with disorganization, tracking assignments, and time management.",
      action: "View research",
    },
    {
      title: "Global Examples",
      text: "Reviewed tools used by students worldwide across different education levels.",
      action: "View examples",
    },
    {
      title: "Competitor Benchmark",
      text: "Compared leading tools across features, pricing, platforms, and student fit.",
      action: "View benchmark",
    },
    {
      title: "Mexico Localization",
      text: "Analyzed local education context, user needs, and available edtech solutions in Mexico.",
      action: "View insights",
    },
  ];

  const competitors = [
    {
      tool: "Notion",
      strength: "Highly flexible, great for notes, docs, databases, and templates.",
      weakness: "Steep learning curve and not purpose-built for students.",
      opportunity:
        "Simplify the experience with education-first templates and workflows.",
    },
    {
      tool: "Google Calendar",
      strength: "Reliable scheduling, reminders, and integration with Google apps.",
      weakness: "Limited task management and academic context.",
      opportunity:
        "Add assignments, deadlines, and academic overview alongside calendar planning.",
    },
    {
      tool: "Todoist",
      strength: "Clean task management, priorities, and cross-platform sync.",
      weakness: "Not designed around courses, terms, classes, or school notes.",
      opportunity:
        "Introduce course-based organization and academic planning features.",
    },
    {
      tool: "OneNote",
      strength: "Strong for note-taking and content organization.",
      weakness: "Can feel heavy and less modern for quick student planning.",
      opportunity:
        "Deliver a modern, lightweight note and study experience.",
    },
  ];

  const risks = [
    {
      title: "Technical Risk",
      level: "Medium",
      text: "Real-time sync, offline support, and integrations can become complex.",
    },
    {
      title: "User Adoption Risk",
      level: "Medium",
      text: "Students may hesitate to switch from tools they already use.",
    },
    {
      title: "Scope Risk",
      level: "High",
      text: "Adding too many features too quickly could reduce focus.",
    },
    {
      title: "Data Privacy Risk",
      level: "Medium",
      text: "Handling student data requires strong privacy and security practices.",
    },
  ];

  const savedOutputs = [
    {
      title: "Student Organization Pain Points Report",
      type: "Research",
      text: "Survey-style findings about student organization challenges.",
    },
    {
      title: "Competitor Feature Matrix",
      type: "Benchmark",
      text: "Comparison of tools across features relevant to student needs.",
    },
    {
      title: "Mexico EdTech Landscape",
      type: "Localization",
      text: "Overview of local market gaps and opportunities in Mexico.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-cyan-50 text-slate-900">
      <nav className="flex items-center justify-between border-b border-cyan-100 bg-white px-8 py-5 shadow-sm">
        <h1 className="text-xl font-bold text-cyan-700">School Organizer</h1>

        <div className="flex gap-5 text-sm font-medium text-slate-600">
          <a href="/">Home</a>
          <a href="/core">Core Agent</a>
          <a href="/research" className="font-bold text-cyan-700">
            Research
          </a>
          <a href="/docs">Docs</a>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <p className="mb-4 inline-block rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
          Week 2 · Research + Benchmarking
        </p>

        <h2 className="text-5xl font-bold tracking-tight">
          Research + Benchmarking Dashboard
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Validate the School Organizer idea through research evidence,
          competitor comparison, localization, and risk analysis.
        </p>

        <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {summaryCards.map((card) => (
            <article
              key={card.title}
              className="rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-xl font-bold text-cyan-700">
                {card.title.charAt(0)}
              </div>

              <h3 className="text-lg font-bold text-cyan-800">
                {card.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {card.text}
              </p>

              <p className="mt-4 text-sm font-bold text-cyan-700">
                {card.action} →
              </p>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-3xl border border-cyan-100 bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b border-cyan-100 p-6 md:flex-row md:items-center md:justify-between">
            <h3 className="text-2xl font-bold">Competitor Comparison</h3>

            <div className="flex flex-wrap gap-3 text-sm font-semibold">
              {["All", "Productivity", "Notes", "Calendar", "School Tools"].map(
                (filter, index) => (
                  <button
                    key={filter}
                    className={`rounded-xl border px-4 py-2 ${
                      index === 0
                        ? "border-cyan-700 bg-cyan-700 text-white"
                        : "border-cyan-200 bg-white text-cyan-700"
                    }`}
                  >
                    {filter}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left text-sm">
              <thead className="bg-cyan-50 text-slate-700">
                <tr>
                  <th className="p-4">Tool</th>
                  <th className="p-4">Strength</th>
                  <th className="p-4">Weakness</th>
                  <th className="p-4">Opportunity for School Organizer</th>
                </tr>
              </thead>

              <tbody>
                {competitors.map((item) => (
                  <tr key={item.tool} className="border-t border-cyan-100">
                    <td className="p-4 font-bold">{item.tool}</td>
                    <td className="p-4 text-slate-600">{item.strength}</td>
                    <td className="p-4 text-slate-600">{item.weakness}</td>
                    <td className="p-4 text-slate-600">
                      {item.opportunity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-bold">Risk Map</h3>

          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {risks.map((risk) => (
              <article
                key={risk.title}
                className="rounded-2xl border border-cyan-100 bg-cyan-50/60 p-5"
              >
                <h4 className="font-bold text-cyan-800">{risk.title}</h4>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {risk.text}
                </p>

                <p className="mt-4 text-sm font-semibold text-cyan-700">
                  Level: {risk.level}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Saved Research Outputs</h3>
            <p className="text-sm font-bold text-cyan-700">View all outputs →</p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {savedOutputs.map((output) => (
              <article
                key={output.title}
                className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm"
              >
                <p className="mb-3 inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold text-cyan-700">
                  {output.type}
                </p>

                <h4 className="font-bold">{output.title}</h4>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {output.text}
                </p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}