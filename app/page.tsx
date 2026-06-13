export default function Home() {
  const features = [
    {
      title: "Pending Tasks",
      description: "Check and organize your assignments by subject.",
    },
    {
      title: "Academic Calendar",
      description: "View due dates, exams, and important school events.",
    },
    {
      title: "8 Subjects",
      description: "Organize your school information by subject.",
    },
    {
      title: "Notes by Subject",
      description: "Keep your notes in one organized place.",
    },
  ];

  const roadmap = [
    "Week 0: Infrastructure",
    "Version 1: Tasks",
    "Version 2: Subjects",
    "Version 3: Notes",
    "Version 4: Supabase",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50 text-gray-900">
      <nav className="flex items-center justify-between border-b border-purple-100 bg-white px-8 py-5 shadow-sm">
        <h1 className="text-xl font-bold text-purple-700">
          School Organizer
        </h1>

        <div className="flex gap-5 text-sm font-medium text-gray-600">
          <a href="/">Home</a>
          <a href="#subjects">Subjects</a>
          <a href="#calendar">Calendar</a>
          <a href="/docs">Docs</a>
        </div>
      </nav>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 inline-block rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            Week 0 · Builder Infrastructure
          </p>

          <h2 className="text-5xl font-bold tracking-tight">
            School Organizer
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Organize your tasks, subjects, calendar, and notes in one place.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#features"
              className="rounded-xl bg-purple-700 px-5 py-3 text-sm font-semibold text-white"
            >
              View Sections
            </a>

            <a
              href="/docs"
              className="rounded-xl border border-purple-200 bg-white px-5 py-3 text-sm font-semibold text-purple-700"
            >
              View Documentation
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-purple-100 bg-white p-6 shadow-xl">
          <div className="rounded-2xl bg-purple-50 p-6">
            <h3 className="text-xl font-bold">Student Dashboard</h3>

            <div className="mt-5 grid gap-3">
              <div className="rounded-xl bg-white p-4 shadow-sm">
                Next due date: History project
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm">
                Active subjects: 8
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm">
                Saved notes: future version
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-center text-3xl font-bold">
          Main Sections
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
          This first version shows the basic structure of the school organizer.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-2xl">
                ✦
              </div>
              <h3 className="font-bold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="subjects" className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-3xl border border-purple-100 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">8 Subjects</h2>

          <p className="mt-2 text-gray-600">
            In future versions, each subject will have its own tasks, due dates, and notes.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-4">
            {[
              "Subject 1",
              "Subject 2",
              "Subject 3",
              "Subject 4",
              "Subject 5",
              "Subject 6",
              "Subject 7",
              "Subject 8",
            ].map((subject) => (
              <div
                key={subject}
                className="rounded-xl bg-purple-50 p-4 text-sm font-semibold text-purple-800"
              >
                {subject}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="calendar" className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-3xl border border-purple-100 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">Roadmap</h2>

          <p className="mt-2 text-gray-600">
            The project will grow step by step to avoid building an app that is too large at the beginning.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-5">
            {roadmap.map((item, index) => (
              <div key={item} className="rounded-2xl bg-purple-50 p-4">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-purple-700 text-sm font-bold text-white">
                  {index + 1}
                </div>
                <p className="text-sm font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-purple-100 bg-white px-6 py-8 text-center text-sm text-gray-600">
        Built by Michel Vega
      </footer>
    </main>
  );
}