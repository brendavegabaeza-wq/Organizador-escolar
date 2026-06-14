export default function DocsPage() {
  return (
    <main className="min-h-screen bg-cyan-50 px-6 py-12">
      <section className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold text-cyan-700">Documentation</p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          School Organizer Documentation
        </h1>

        <p className="mt-4 text-gray-700">
          This documentation page explains the purpose, technical structure,
          prompt design, research dashboard, and future Supabase plan for the
          School Organizer project.
        </p>

        <div className="mt-8 space-y-6">
          <section className="rounded-xl border border-cyan-100 bg-cyan-50 p-5">
            <h2 className="text-xl font-bold text-gray-900">Purpose</h2>
            <p className="mt-2 text-gray-700">
              School Organizer helps students organize tasks, subjects,
              calendar events, notes, study plans, and research insights in one
              place.
            </p>
          </section>

          <section className="rounded-xl border border-cyan-100 bg-white p-5">
            <h2 className="text-xl font-bold text-gray-900">
              Week 1 Feature: Generative Core Agent
            </h2>
            <p className="mt-2 text-gray-700">
              The Week 1 feature adds a Generative Core Agent at /core. This
              page helps students turn messy school ideas into structured study
              plans with Purpose, Key Components, User Need, Next Steps, and
              School Organizer Use.
            </p>
          </section>

          <section className="rounded-xl border border-cyan-100 bg-white p-5">
            <h2 className="text-xl font-bold text-gray-900">
              Week 2 Feature: Research + Benchmarking Dashboard
            </h2>
            <p className="mt-2 text-gray-700">
              The Week 2 feature adds a new /research page to validate the
              School Organizer idea through problem evidence, global examples,
              competitor benchmarking, Mexico localization, risk mapping, and
              saved research outputs.
            </p>
          </section>

          <section className="rounded-xl border border-cyan-100 bg-cyan-50 p-5">
            <h2 className="text-xl font-bold text-gray-900">
              Prompt Library: Core Agent
            </h2>
            <p className="mt-2 font-semibold text-gray-800">Prompt:</p>
            <p className="mt-2 rounded-lg bg-white p-4 text-gray-700">
              Analyze the student&apos;s academic idea and generate a structured
              core output with Purpose, Key Components, User Need, Next Steps,
              and School Organizer Use. Keep the response practical, clear, and
              useful for a student organizing school work.
            </p>
          </section>

          <section className="rounded-xl border border-cyan-100 bg-cyan-50 p-5">
            <h2 className="text-xl font-bold text-gray-900">
              Research Prompt Library
            </h2>
            <p className="mt-2 font-semibold text-gray-800">Prompt:</p>
            <p className="mt-2 rounded-lg bg-white p-4 text-gray-700">
              Analyze the School Organizer product idea using problem evidence,
              global examples, competitor benchmarking, Mexico localization,
              risk mapping, and saved research insights. Focus on practical
              product validation and student needs.
            </p>
          </section>

          <section className="rounded-xl border border-cyan-100 bg-white p-5">
            <h2 className="text-xl font-bold text-gray-900">
              Future Supabase Table: core_outputs
            </h2>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-gray-700">
              <li>input_text</li>
              <li>output_type</li>
              <li>generated_output</li>
              <li>created_at</li>
            </ul>
          </section>

          <section className="rounded-xl border border-cyan-100 bg-white p-5">
            <h2 className="text-xl font-bold text-gray-900">
              Future Supabase Table: research_outputs
            </h2>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-gray-700">
              <li>research_title</li>
              <li>research_category</li>
              <li>research_summary</li>
              <li>source_notes</li>
              <li>created_at</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}