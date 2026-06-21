export default function DocsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-rose-50 text-gray-900">
      <nav className="flex items-center justify-between border-b border-pink-100 bg-white px-8 py-5 shadow-sm">
        <h1 className="text-xl font-bold text-pink-600">
          School Organizer
        </h1>

        <div className="flex gap-5 text-sm font-medium text-gray-600">
          <a href="/">Home</a>
          <a href="/core">Core Agent</a>
          <a href="/research">Research</a>
          <a href="/product">Product</a>
          <a href="/pricing">Pricing</a>
          <a href="/docs" className="font-bold text-pink-600">
            Docs
          </a>
        </div>
      </nav>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-4 inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
          Documentation
        </p>

        <h2 className="text-4xl font-bold">
          School Organizer Documentation
        </h2>

        <p className="mt-4 text-lg leading-8 text-gray-600">
          This documentation page explains the purpose, technical structure,
          prompt design, research dashboard, product architecture, pricing
          simulator, and future data plan for the School Organizer project.
        </p>

        <div className="mt-10 grid gap-6">
          <section className="rounded-2xl border border-pink-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">Purpose</h3>
            <p className="mt-2 text-gray-600">
              School Organizer helps students organize tasks, subjects,
              calendar events, notes, study plans, research insights, and
              product planning decisions in one place.
            </p>
          </section>

          <section className="rounded-2xl border border-pink-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">
              Week 1 Feature: Generative Core Agent
            </h3>

            <p className="mt-2 text-gray-600">
              The Week 1 feature adds a Generative Core Agent at /core. This
              page helps students turn messy school ideas into structured study
              plans with Purpose, Key Components, User Need, Next Steps, and
              School Organizer Use.
            </p>
          </section>

          <section className="rounded-2xl border border-pink-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">
              Week 2 Feature: Research + Benchmarking Dashboard
            </h3>

            <p className="mt-2 text-gray-600">
              The Week 2 feature adds a /research page to validate the School
              Organizer idea through problem evidence, global examples,
              competitor benchmarking, Mexico localization, risk mapping, and
              saved research outputs.
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
              <li>Problem Evidence</li>
              <li>Global Examples</li>
              <li>Competitor Benchmark</li>
              <li>Mexico Localization</li>
              <li>Risk Map</li>
              <li>Saved Research Outputs</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-pink-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">
              Week 3 Feature: Product Architecture + Pricing Simulator
            </h3>

            <p className="mt-2 text-gray-600">
              Week 3 adds two new pages to the School Organizer project:
              /product and /pricing. The /product page explains the product
              architecture, feature map, core modules, and product flow. The
              /pricing page includes an interactive pricing simulator that
              allows users to enter assumptions, calculate revenue, save pricing
              scenarios, and verify persistence after refreshing the browser.
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
              <li>/product page for product architecture and feature mapping.</li>
              <li>/pricing page for interactive pricing and revenue simulation.</li>
              <li>Three pricing tiers: Free, Student Plus, and School Pro.</li>
              <li>
                Two customer segments: Individual Students and Schools /
                Academic Programs.
              </li>
              <li>
                Revenue outputs: paying users, monthly revenue, and annual
                revenue.
              </li>
              <li>
                Saved pricing scenarios using localStorage persistence.
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-pink-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">Tech Stack</h3>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
              <li>Next.js to build the web application and route structure.</li>
              <li>React state to manage pricing simulator inputs and outputs.</li>
              <li>
                localStorage to persist saved pricing scenarios after refresh.
              </li>
              <li>Tailwind CSS for layout, colors, spacing, and styling.</li>
              <li>GitHub to store code and track commits.</li>
              <li>Vercel to deploy and test the updated app online.</li>
              <li>
                Supabase for future storage of generated outputs and research
                outputs.
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-pink-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">Prompt Library: Core Agent</h3>

            <p className="mt-2 text-gray-600">
              The Core Agent prompt helps transform messy school ideas into
              structured study plans. It organizes student input into Purpose,
              Key Components, User Need, Next Steps, and School Organizer Use.
            </p>

            <div className="mt-4 rounded-xl bg-pink-50 p-4 text-sm leading-6 text-gray-700">
              <p className="font-bold text-pink-700">Prompt:</p>
              <p className="mt-2">
                Analyze the student&apos;s academic idea and generate a
                structured core output with Purpose, Key Components, User Need,
                Next Steps, and School Organizer Use. Keep the response
                practical, clear, and useful for a student organizing school
                work.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-pink-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">Research Prompt Library</h3>

            <p className="mt-2 text-gray-600">
              The Research + Benchmarking Dashboard uses curated research-style
              content to compare School Organizer with existing tools and
              identify opportunities, risks, and localization needs.
            </p>

            <div className="mt-4 rounded-xl bg-pink-50 p-4 text-sm leading-6 text-gray-700">
              <p className="font-bold text-pink-700">Prompt:</p>
              <p className="mt-2">
                Analyze the School Organizer product idea using problem
                evidence, global examples, competitor benchmarking, Mexico
                localization, risk mapping, and saved research insights. Focus
                on practical product validation and student needs.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-pink-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">Week 3 Pricing Logic</h3>

            <p className="mt-2 text-gray-600">
              The pricing simulator uses client-side React state to capture
              user inputs and calculate pricing outputs. The user enters total
              users, conversion rate, pricing tier, billing cycle, and customer
              segment. The app then calculates paying users, monthly revenue,
              and annual revenue.
            </p>

            <div className="mt-4 rounded-xl bg-pink-50 p-4 text-sm leading-6 text-gray-700">
              <p className="font-bold text-pink-700">Logic:</p>
              <p className="mt-2">
                Paying Users = Total Users × Conversion Rate
              </p>
              <p>Monthly Revenue = Paying Users × Monthly Price</p>
              <p>Annual Revenue = Monthly Revenue × 12</p>
              <p>Annual billing applies a 20% discount when selected.</p>
            </div>
          </section>

          <section className="rounded-2xl border border-pink-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">Week 3 Persistence</h3>

            <p className="mt-2 text-gray-600">
              Saved pricing scenarios are stored locally in the browser using
              localStorage. This means the user can save a scenario, refresh the
              page, and still see the saved scenario in the Saved Pricing
              Scenarios section. This demonstrates the complete interaction loop
              required for Week 3: input, processing, output, and persistence.
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
              <li>
                Input: pricing tier, segment, total users, conversion rate, and
                billing cycle.
              </li>
              <li>
                Processing: revenue calculations are performed in the browser.
              </li>
              <li>
                Output: calculated results appear in the revenue cards.
              </li>
              <li>
                Persistence: saved scenarios remain visible after refresh using
                localStorage.
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-pink-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">
              Future Supabase Table: core_outputs
            </h3>

            <p className="mt-2 text-gray-600">
              Future versions can store generated Core Agent outputs in a
              Supabase table called core_outputs.
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
              <li>input_text</li>
              <li>output_type</li>
              <li>generated_output</li>
              <li>created_at</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-pink-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">
              Future Supabase Table: research_outputs
            </h3>

            <p className="mt-2 text-gray-600">
              Future versions can store saved research findings in a Supabase
              table called research_outputs.
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
              <li>research_title</li>
              <li>research_category</li>
              <li>research_summary</li>
              <li>source_notes</li>
              <li>created_at</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-pink-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">
              Future Supabase Table: pricing_scenarios
            </h3>

            <p className="mt-2 text-gray-600">
              Week 3 uses localStorage for verified browser persistence. A
              future backend version could store pricing scenarios in Supabase
              using a pricing_scenarios table.
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
              <li>segment</li>
              <li>tier</li>
              <li>total_users</li>
              <li>conversion_rate</li>
              <li>billing_cycle</li>
              <li>paying_users</li>
              <li>monthly_revenue</li>
              <li>annual_revenue</li>
              <li>created_at</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}