export default function DocsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-100 via-pink-50 to-red-100 text-gray-900">
      <nav className="flex items-center justify-between border-b border-rose-100 bg-white px-8 py-5 shadow-sm">
        <h1 className="text-xl font-bold text-rose-600">
          School Organizer
        </h1>

        <div className="flex gap-5 text-sm font-medium text-gray-600">
          <a href="/">Home</a>
          <a href="/core">Core Agent</a>
          <a href="/research">Research</a>
          <a href="/product">Product</a>
          <a href="/pricing">Pricing</a>
          <a href="/marketing">Marketing</a>
          <a href="/docs" className="font-bold text-rose-600">
            Docs
          </a>
        </div>
      </nav>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-4 inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-700">
          Documentation
        </p>

        <h2 className="text-4xl font-bold">
          School Organizer Documentation
        </h2>

        <p className="mt-4 text-lg leading-8 text-gray-600">
          This documentation page explains the purpose, technical structure,
          product modules, pricing simulator, marketing engine, Supabase
          persistence, testing plan, and future data structure for the School
          Organizer project.
        </p>

        <div className="mt-10 grid gap-6">
          <section className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">Purpose</h3>
            <p className="mt-2 text-gray-600">
              School Organizer helps students organize tasks, subjects,
              calendar events, notes, study plans, research insights, pricing
              scenarios, and marketing decisions in one connected product
              system.
            </p>
          </section>

          <section className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
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

          <section className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
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

          <section className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">
              Week 3 Feature: Product Architecture + Pricing Simulator
            </h3>

            <p className="mt-2 text-gray-600">
              Week 3 adds /product and /pricing. The /product page explains the
              product architecture, feature map, core modules, and product flow.
              The /pricing page includes an interactive pricing simulator that
              allows users to enter assumptions, calculate revenue, save pricing
              scenarios, and verify persistence after refreshing the browser.
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
              <li>/product page for product architecture and feature mapping.</li>
              <li>/pricing page for interactive pricing and revenue simulation.</li>
              <li>Three pricing tiers: Free, Student Plus, and School Pro.</li>
              <li>Revenue outputs: paying users, monthly revenue, and annual revenue.</li>
              <li>Saved pricing scenarios using localStorage persistence.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">
              Week 4 Feature: Marketing Engine + Supabase Content System
            </h3>

            <p className="mt-2 text-gray-600">
              Week 4 adds a /marketing page and improves the homepage as a
              product landing page. The Marketing Engine includes brand system,
              target persona, landing page copy, 10 social media posts, 3 video
              scripts, a 14-day campaign calendar, an interactive A/B headline
              tester, and saved marketing assets connected to Supabase.
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
              <li>Improved homepage with Week 4 Marketing Engine navigation.</li>
              <li>/marketing page for marketing content planning.</li>
              <li>A/B headline tester with user input and decision reason.</li>
              <li>Saved marketing assets stored in Supabase.</li>
              <li>Saved assets remain available after refresh.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">Week 4 Interaction Loop</h3>

            <p className="mt-2 text-gray-600">
              The main Week 4 interaction loop happens inside the /marketing
              page. The user compares two headline options, selects a winner,
              writes a reason, saves the result to Supabase, and then sees the
              saved asset displayed on the page.
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
              <li>Input: user selects Headline A or Headline B and writes a reason.</li>
              <li>Processing: the app formats the winning headline as a marketing asset.</li>
              <li>Output: the saved asset appears in the Saved Marketing Assets section.</li>
              <li>Persistence: Supabase stores the asset and loads it again after refresh.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">A/B Headline Test</h3>

            <p className="mt-2 text-gray-600">
              The A/B headline tester helps compare two marketing messages for
              School Organizer. This supports product decision-making because it
              forces the builder to choose which message better communicates the
              product value to students.
            </p>

            <div className="mt-4 rounded-xl bg-rose-50 p-4 text-sm leading-6 text-gray-700">
              <p className="font-bold text-rose-700">Headline A:</p>
              <p>Plan smarter. Achieve more.</p>

              <p className="mt-3 font-bold text-rose-700">Headline B:</p>
              <p>Organize school before school overwhelms you.</p>

              <p className="mt-3 font-bold text-rose-700">Decision:</p>
              <p>
                Headline B is stronger because it connects directly with
                student stress, deadlines, and school responsibilities.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">Week 4 Marketing Content</h3>

            <p className="mt-2 text-gray-600">
              The Marketing Engine includes reusable launch content for School
              Organizer. This content helps explain how the product could be
              communicated through social media, short videos, and a simple
              campaign calendar.
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
              <li>10 social posts for short-form marketing content.</li>
              <li>3 video scripts for TikTok, Instagram Reels, or ads.</li>
              <li>14-day campaign calendar for a structured launch plan.</li>
              <li>Landing page copy with headline, value proposition, and CTA.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">Tech Stack</h3>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
              <li>Next.js for the web application and route structure.</li>
              <li>React state for the interactive A/B headline tester.</li>
              <li>Tailwind CSS for layout, colors, spacing, and styling.</li>
              <li>Supabase for backend database persistence.</li>
              <li>GitHub for version control and commit history.</li>
              <li>Vercel for deployment and live testing.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">
              Supabase Table: marketing_assets
            </h3>

            <p className="mt-2 text-gray-600">
              Week 4 uses a real Supabase table called marketing_assets to store
              saved marketing decisions from the A/B headline tester.
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
              <li>id</li>
              <li>asset_type</li>
              <li>campaign_name</li>
              <li>headline_a</li>
              <li>headline_b</li>
              <li>winner</li>
              <li>reason</li>
              <li>content</li>
              <li>created_at</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">Testing Plan</h3>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
              <li>Test 1: Open the improved homepage and confirm Marketing navigation works.</li>
              <li>Test 2: Open /marketing and confirm the page loads correctly.</li>
              <li>Test 3: Select a headline winner and confirm the live preview updates.</li>
              <li>Test 4: Save the marketing asset and confirm it appears on the page.</li>
              <li>Test 5: Confirm the saved asset appears inside Supabase.</li>
              <li>Test 6: Refresh /marketing and confirm the saved asset remains visible.</li>
              <li>Test 7: Repeat testing on the deployed Vercel URL.</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}