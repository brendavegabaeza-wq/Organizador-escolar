export default function DocsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 via-amber-50 to-white text-slate-900">
      <nav className="flex items-center justify-between border-b border-amber-100 bg-white px-8 py-5 shadow-sm">
        <h1 className="text-xl font-bold text-amber-600">School Organizer</h1>

        <div className="flex gap-5 text-sm font-medium text-slate-600">
          <a href="/">Home</a>
          <a href="/core">Core Agent</a>
          <a href="/research">Research</a>
          <a href="/product">Product</a>
          <a href="/pricing">Pricing</a>
          <a href="/marketing">Marketing</a>
          <a href="/chat">Chat</a>
          <a href="/docs" className="font-bold text-amber-600">
            Docs
          </a>
        </div>
      </nav>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="mb-4 inline-block rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
          Documentation
        </p>

        <h2 className="text-4xl font-bold">
          School Organizer Documentation
        </h2>

        <p className="mt-4 text-lg leading-8 text-slate-600">
          This documentation page summarizes the full School Organizer product
          stack from Week 1 through Week 5. It explains the project purpose,
          weekly features, interaction loops, Supabase persistence, testing
          evidence, external user testing, deployment history, and Week 5
          development progress.
        </p>

        <div className="mt-10 grid gap-6">
          <section className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-amber-700">Purpose</h3>
            <p className="mt-3 leading-7 text-slate-600">
              School Organizer helps students organize tasks, subjects,
              deadlines, study plans, research insights, pricing scenarios,
              marketing decisions, and guided academic support in one connected
              product system.
            </p>
          </section>

          <section className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-amber-700">
              Week 1 Feature: Generative Core Agent
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Week 1 added a /core page that helps students turn messy school
              ideas into a structured academic plan. The Core Agent organizes
              the user idea into purpose, key components, user need, next steps,
              and School Organizer use.
            </p>
          </section>

          <section className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-amber-700">
              Week 2 Feature: Research + Benchmarking Dashboard
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Week 2 added a /research page to validate the School Organizer
              idea through problem evidence, global examples, competitor
              benchmarking, Mexico localization, risk mapping, and saved
              research outputs.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              <li>Problem evidence</li>
              <li>Global examples</li>
              <li>Competitor benchmark</li>
              <li>Mexico localization</li>
              <li>Risk map</li>
              <li>Saved research outputs</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-amber-700">
              Week 3 Feature: Product Architecture + Pricing Simulator
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Week 3 added /product and /pricing. The /product page explains
              the product architecture, feature map, core modules, and product
              flow. The /pricing page includes an interactive pricing simulator
              that calculates revenue and saves pricing scenarios.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              <li>/product page for product architecture and feature mapping.</li>
              <li>/pricing page for interactive pricing and revenue simulation.</li>
              <li>Three pricing tiers: Free, Student Plus, and School Pro.</li>
              <li>Saved pricing scenarios using localStorage persistence.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-amber-700">
              Week 4 Feature: Marketing Engine + Content System
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Week 4 added a /marketing page and improved the homepage as a
              product landing page. The Marketing Engine includes brand system,
              target persona, landing page copy, social posts, video scripts,
              campaign calendar, A/B headline testing, copy/export buttons, and
              Supabase storage.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              <li>Brand system and target persona.</li>
              <li>Landing page copy and marketing content.</li>
              <li>10 social media posts.</li>
              <li>3 short video scripts.</li>
              <li>14-day campaign calendar.</li>
              <li>A/B headline tester.</li>
              <li>Copy and export buttons.</li>
              <li>Saved marketing assets in Supabase.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-amber-700">
              Week 5 Feature: Public Guided Academic Assistant
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Week 5 added a /chat page where external users can interact with a
              public guided academic assistant. The assistant asks three intake
              questions, generates a structured academic support summary,
              includes a guardrail response, shows a human checkpoint, collects
              Helpful / Not Helpful feedback, and saves chat sessions to
              Supabase.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              <li>/chat page for the public guided assistant.</li>
              <li>Three intake questions for priority, deadline, and support type.</li>
              <li>Generated academic support summary.</li>
              <li>Guardrail response for inappropriate academic requests.</li>
              <li>Human checkpoint for urgent or high-stakes situations.</li>
              <li>Helpful / Not Helpful rating buttons.</li>
              <li>Saved chat sessions in Supabase.</li>
              <li>Three external user tests documented through saved sessions.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-amber-700">
              Week 5 Interaction Loop
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              The /chat assistant demonstrates a complete interaction loop:
              user input, assistant logic, output, feedback, and persistence.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              <li>Input: tester label, school priority, deadline, and support type.</li>
              <li>Processing: the app checks for unsafe requests and generates a guided response.</li>
              <li>Output: academic support summary or guardrail response.</li>
              <li>Feedback: Helpful / Not Helpful rating and brief feedback.</li>
              <li>Persistence: Supabase stores and reloads saved chat sessions.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-amber-700">
              Guardrail Response
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              The assistant does not complete homework, essays, tests, or
              assignments for the user. If a user asks for inappropriate help,
              the assistant redirects them toward understanding the task,
              organizing next steps, creating a study plan, or preparing
              questions for a teacher. This guardrail supports academic
              integrity by refusing to complete work for the user while still
              offering safe organization help.
            </p>
          </section>

          <section className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-amber-700">
              Human Decision Checkpoint
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              The /chat assistant includes a human checkpoint reminding users to
              contact a teacher, advisor, or trusted adult if the task affects
              their final grade, feels urgent, or involves personal stress.
              This keeps the assistant supportive without replacing human
              judgment.
            </p>
          </section>

          <section className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-amber-700">
              Supabase Tables
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              School Organizer uses Supabase to store Week 4 and Week 5 data.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              <li>marketing_assets: stores Week 4 marketing decisions.</li>
              <li>chat_sessions: stores Week 5 guided assistant sessions.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-amber-700">
              chat_sessions Data Structure
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              <li>id</li>
              <li>tester_label</li>
              <li>priority</li>
              <li>deadline</li>
              <li>help_type</li>
              <li>assistant_summary</li>
              <li>guardrail_triggered</li>
              <li>rating</li>
              <li>feedback</li>
              <li>created_at</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-amber-700">
              External User Testing
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Three external users tested the /chat guided assistant. Each
              tester completed the intake questions, reviewed the assistant
              response, rated the response, provided brief feedback, and saved
              the session to Supabase.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              <li>External Tester 1 completed the guided assistant flow.</li>
              <li>External Tester 2 completed the guided assistant flow.</li>
              <li>External Tester 3 completed the guided assistant flow.</li>
              <li>Supabase stores all three external test records.</li>
              <li>
                Tester feedback was used to identify future improvements for
                more specific assistant responses.
              </li>
            </ul>
          </section>

          <section className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-amber-700">
              GitHub Commit Evidence
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Week 5 includes at least five GitHub commits showing the
              development process for the Public Guided Academic Assistant.
              These commits document the creation of the /chat page, guided
              assistant logic, documentation updates, external testing notes,
              guardrail documentation, and final Week 5 evidence.
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-600">
              <li>Add Week 5 guided chat assistant.</li>
              <li>Update docs for Week 5 guided assistant.</li>
              <li>Refine Week 5 chat assistant instructions.</li>
              <li>Document Week 5 guardrail decision.</li>
              <li>Finalize Week 5 evidence documentation.</li>
            </ol>
          </section>

          <section className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-amber-700">
              Deployment Evidence
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Week 5 was deployed to Vercel multiple times. The deployment
              history shows production deployments for adding the guided chat
              assistant and updating the Week 5 documentation.
            </p>
          </section>

          <section className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-amber-700">Testing Plan</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              <li>Test 1: Open /chat and confirm the guided assistant loads.</li>
              <li>Test 2: Answer the three intake questions and generate a response.</li>
              <li>Test 3: Trigger the guardrail response with an inappropriate homework request.</li>
              <li>Test 4: Select Helpful or Not Helpful and save the session.</li>
              <li>Test 5: Confirm the saved session appears in Supabase.</li>
              <li>Test 6: Refresh /chat and confirm saved sessions remain visible.</li>
              <li>Test 7: Confirm three external tester records appear in Supabase.</li>
              <li>Test 8: Repeat testing on the deployed Vercel URL.</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}