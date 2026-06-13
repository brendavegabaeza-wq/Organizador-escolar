export default function DocsPage() {
  return (
    <main className="min-h-screen bg-purple-50 px-6 py-12">
      <section className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-purple-700">
          School Organizer Documentation
        </h1>

        <p className="mt-4 text-gray-700">
          This is the Week 0 documentation placeholder for the School Organizer
          project. The purpose of this page is to confirm that the project has a
          working documentation route at /docs.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-gray-900">
          Week 0 Setup Sprint
        </h2>

        <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
          <li>The homepage is available at /.</li>
          <li>The /docs route loads correctly.</li>
          <li>The project is stored in GitHub.</li>
          <li>The app is deployed with Vercel.</li>
          <li>Supabase has been created for future backend integration.</li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold text-gray-900">
          Future Documentation
        </h2>

        <p className="mt-4 text-gray-700">
          In future weeks, this page will include more detailed documentation
          about tasks, subjects, calendar features, notes, authentication, and
          Supabase database integration.
        </p>
      </section>
    </main>
  );
}