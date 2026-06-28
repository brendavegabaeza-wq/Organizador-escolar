"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Winner = "Headline A" | "Headline B";

type MarketingAsset = {
  id: string;
  asset_type: string;
  campaign_name: string;
  headline_a: string | null;
  headline_b: string | null;
  winner: string | null;
  reason: string | null;
  content: string | null;
  created_at: string;
};

export default function MarketingPage() {
  const [winner, setWinner] = useState<Winner>("Headline B");
  const [reason, setReason] = useState(
    "This headline speaks directly to student stress and makes the product value easier to understand."
  );
  const [savedAssets, setSavedAssets] = useState<MarketingAsset[]>([]);
  const [status, setStatus] = useState(
    "Choose a headline winner, write a reason, and save the marketing asset to Supabase."
  );
  const [isSaving, setIsSaving] = useState(false);

  const headlineA = "Plan smarter. Achieve more.";
  const headlineB = "Organize school before school overwhelms you.";

  const socialPosts = [
    "Plan today, stress less tomorrow.",
    "Your school life, organized.",
    "Never miss a deadline again.",
    "From chaos to clarity.",
    "Study better, not harder.",
    "All your tasks in one place.",
    "A better plan = better grades.",
    "Organize now, thank yourself later.",
    "School is easier with a system.",
    "You have goals. We help you plan them.",
  ];

  const videoScripts = [
    {
      title: "Overwhelmed Student",
      hook: "Feeling overwhelmed by assignments?",
      scene: "A student looks at a messy list of deadlines.",
      cta: "Try School Organizer and plan smarter.",
    },
    {
      title: "Before and After",
      hook: "Before School Organizer, my week was chaos.",
      scene: "Show scattered notes becoming one clear dashboard.",
      cta: "Organize your school life in one place.",
    },
    {
      title: "The Clear Plan",
      hook: "What if your school plan was finally clear?",
      scene: "A student enters tasks, notes, and dates into the app.",
      cta: "Start free and upgrade when you need more.",
    },
  ];

  const campaignDays = [
    ["Day 1", "Launch Day", "Announcement Post"],
    ["Day 2", "Problem Awareness", "Reel"],
    ["Day 3", "Feature Highlight", "Carousel"],
    ["Day 4", "Student Stress", "Short Video"],
    ["Day 5", "Productivity Tip", "Post"],
    ["Day 6", "Before and After", "Reel"],
    ["Day 7", "Pricing Value", "Post"],
    ["Day 8", "Core Agent Demo", "Short Video"],
    ["Day 9", "Research Dashboard", "Carousel"],
    ["Day 10", "Testimonial Style", "Post"],
    ["Day 11", "Study Planning", "Reel"],
    ["Day 12", "Reminder Feature", "Post"],
    ["Day 13", "Final Push", "Short Video"],
    ["Day 14", "Launch Recap", "Carousel"],
  ];

  useEffect(() => {
    fetchSavedAssets();
  }, []);

  async function fetchSavedAssets() {
    const { data, error } = await supabase
      .from("marketing_assets")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setStatus(`Supabase read error: ${error.message}`);
      return;
    }

    setSavedAssets(data || []);
  }

  function getWinningHeadline() {
    return winner === "Headline A" ? headlineA : headlineB;
  }

  async function saveMarketingAsset() {
    setIsSaving(true);
    setStatus("Saving marketing asset to Supabase...");

    const { error } = await supabase.from("marketing_assets").insert([
      {
        asset_type: "A/B Headline Test",
        campaign_name: "Week 4 Launch Campaign",
        headline_a: headlineA,
        headline_b: headlineB,
        winner,
        reason,
        content: getWinningHeadline(),
      },
    ]);

    if (error) {
      setStatus(`Supabase save error: ${error.message}`);
      setIsSaving(false);
      return;
    }

    setStatus(
      "Marketing asset saved to Supabase. Refresh the page to verify persistence."
    );
    setIsSaving(false);
    fetchSavedAssets();
  }

  async function copyWinningHeadline() {
    await navigator.clipboard.writeText(getWinningHeadline());
    setStatus("Winning headline copied to clipboard.");
  }

  async function copyReason() {
    await navigator.clipboard.writeText(reason);
    setStatus("Decision reason copied to clipboard.");
  }

  function exportSavedAssets() {
    if (savedAssets.length === 0) {
      setStatus("There are no saved assets to export yet.");
      return;
    }

    const exportData = JSON.stringify(savedAssets, null, 2);
    const blob = new Blob([exportData], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "school-organizer-marketing-assets.json";
    link.click();

    URL.revokeObjectURL(url);
    setStatus("Saved marketing assets exported as a JSON file.");
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-100 via-pink-50 to-red-100 text-slate-900">
      <nav className="flex items-center justify-between border-b border-rose-100 bg-white px-8 py-5 shadow-sm">
        <h1 className="text-xl font-bold text-rose-600">School Organizer</h1>

        <div className="flex gap-5 text-sm font-medium text-slate-600">
          <a href="/">Home</a>
          <a href="/core">Core Agent</a>
          <a href="/research">Research</a>
          <a href="/product">Product</a>
          <a href="/pricing">Pricing</a>
          <a href="/marketing" className="font-bold text-rose-600">
            Marketing
          </a>
          <a href="/docs">Docs</a>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <p className="mb-4 inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-700">
          Week 4 · Marketing Engine
        </p>

        <h2 className="text-5xl font-bold tracking-tight">
          Marketing Engine + Content System
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Plan, test, save, copy, export, and review marketing assets for School
          Organizer. This page includes brand strategy, content ideas, video
          scripts, a campaign calendar, an interactive A/B headline tester, and
          Supabase persistence.
        </p>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-rose-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-rose-700">Brand System</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Brand voice: friendly, supportive, organized, and student-focused.
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Value proposition: School Organizer helps students reduce stress
              by turning school responsibilities into a clear plan.
            </p>
          </article>

          <article className="rounded-3xl border border-rose-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-rose-700">Target Persona</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Valeria, 17, high school student. She forgets deadlines, feels
              overwhelmed, and wants a simple way to organize tasks, notes, and
              study goals.
            </p>
          </article>

          <article className="rounded-3xl border border-rose-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-rose-700">
              Landing Page Copy
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Headline: Organize school before school overwhelms you.
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              CTA: Start organizing for free.
            </p>
          </article>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-rose-100 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-bold">10 Social Posts</h3>
            <ol className="mt-5 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-600">
              {socialPosts.map((post) => (
                <li key={post}>{post}</li>
              ))}
            </ol>
          </article>

          <article className="rounded-3xl border border-rose-100 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-bold">3 Video Scripts</h3>
            <div className="mt-5 space-y-4">
              {videoScripts.map((script) => (
                <div
                  key={script.title}
                  className="rounded-2xl bg-rose-50 p-4 text-sm leading-6 text-slate-600"
                >
                  <p className="font-bold text-rose-700">{script.title}</p>
                  <p>Hook: {script.hook}</p>
                  <p>Scene: {script.scene}</p>
                  <p>CTA: {script.cta}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-10 rounded-3xl border border-rose-100 bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-bold">14-Day Campaign Calendar</h3>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-left text-sm">
              <thead className="bg-rose-50 text-slate-700">
                <tr>
                  <th className="p-4">Day</th>
                  <th className="p-4">Theme</th>
                  <th className="p-4">Content Type</th>
                </tr>
              </thead>
              <tbody>
                {campaignDays.map(([day, theme, type]) => (
                  <tr key={day} className="border-t border-rose-100">
                    <td className="p-4 font-medium">{day}</td>
                    <td className="p-4">{theme}</td>
                    <td className="p-4">{type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-rose-100 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-rose-700">
              A/B Headline Test
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Compare two headlines, choose the stronger message, explain the
              decision, save the result to Supabase, and copy or export the
              marketing asset.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <button
                onClick={() => setWinner("Headline A")}
                className={`rounded-2xl border p-5 text-left ${
                  winner === "Headline A"
                    ? "border-rose-500 bg-rose-100"
                    : "border-rose-100 bg-white"
                }`}
              >
                <p className="text-sm font-bold text-rose-700">Headline A</p>
                <p className="mt-2 font-bold">{headlineA}</p>
              </button>

              <button
                onClick={() => setWinner("Headline B")}
                className={`rounded-2xl border p-5 text-left ${
                  winner === "Headline B"
                    ? "border-rose-500 bg-rose-100"
                    : "border-rose-100 bg-white"
                }`}
              >
                <p className="text-sm font-bold text-rose-700">Headline B</p>
                <p className="mt-2 font-bold">{headlineB}</p>
              </button>
            </div>

            <label className="mt-6 block">
              <span className="text-sm font-bold text-slate-700">
                Why did you choose this winner?
              </span>
              <textarea
                value={reason}
                onChange={(event) => setReason(event.target.value)}
                className="mt-2 min-h-28 w-full rounded-2xl border border-rose-100 bg-white p-4 text-sm"
              />
            </label>

            <button
              onClick={saveMarketingAsset}
              disabled={isSaving}
              className="mt-5 rounded-2xl bg-rose-600 px-6 py-3 font-bold text-white hover:bg-rose-700 disabled:opacity-60"
            >
              {isSaving ? "Saving..." : "Save Marketing Asset to Supabase"}
            </button>

            <div className="mt-4 flex flex-wrap gap-3">
              <button
                onClick={copyWinningHeadline}
                className="rounded-2xl border border-rose-200 bg-white px-5 py-3 text-sm font-bold text-rose-700 hover:bg-rose-50"
              >
                Copy Winning Headline
              </button>

              <button
                onClick={copyReason}
                className="rounded-2xl border border-rose-200 bg-white px-5 py-3 text-sm font-bold text-rose-700 hover:bg-rose-50"
              >
                Copy Reason
              </button>
            </div>

            <p className="mt-4 rounded-2xl bg-rose-50 p-4 text-sm font-medium text-rose-700">
              Status: {status}
            </p>
          </article>

          <article className="rounded-3xl border border-rose-100 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-bold">Live Asset Preview</h3>

            <div className="mt-5 rounded-2xl bg-rose-50 p-5">
              <p className="text-sm font-bold text-rose-700">
                Selected Winner
              </p>
              <p className="mt-2 text-xl font-bold">{winner}</p>

              <p className="mt-5 text-sm font-bold text-rose-700">
                Winning Headline
              </p>
              <p className="mt-2">{getWinningHeadline()}</p>

              <p className="mt-5 text-sm font-bold text-rose-700">Reason</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{reason}</p>
            </div>

            <div className="mt-6 rounded-2xl border border-dashed border-rose-200 bg-white p-5 text-sm text-slate-600">
              This preview shows the marketing asset before it is saved. After
              saving, the asset is stored in Supabase and displayed below.
            </div>
          </article>
        </section>

        <section className="mt-10 rounded-3xl border border-rose-100 bg-white p-6 shadow-sm">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-bold">
                Saved Marketing Assets from Supabase
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                These assets are loaded from Supabase. Refresh the page to
                confirm that saved assets remain available.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={exportSavedAssets}
                className="rounded-2xl border border-rose-200 bg-white px-5 py-3 text-sm font-bold text-rose-700 hover:bg-rose-50"
              >
                Export Saved Assets
              </button>

              <p className="rounded-full bg-rose-100 px-4 py-2 text-sm font-bold text-rose-700">
                {savedAssets.length} saved
              </p>
            </div>
          </div>

          {savedAssets.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-dashed border-rose-200 bg-rose-50 p-6 text-sm text-slate-600">
              No saved assets yet. Choose a headline winner, write a reason,
              and click Save Marketing Asset to Supabase.
            </div>
          ) : (
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {savedAssets.map((asset) => (
                <article
                  key={asset.id}
                  className="rounded-2xl border border-rose-100 bg-rose-50 p-5"
                >
                  <p className="text-xs font-bold uppercase tracking-wide text-rose-700">
                    {asset.asset_type}
                  </p>

                  <h4 className="mt-2 text-lg font-bold">{asset.winner}</h4>

                  <p className="mt-3 text-sm font-bold text-slate-700">
                    {asset.content}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {asset.reason}
                  </p>

                  <p className="mt-4 text-xs text-slate-500">
                    Campaign: {asset.campaign_name}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Saved: {new Date(asset.created_at).toLocaleString()}
                  </p>
                </article>
              ))}
            </div>
          )}
        </section>
      </section>
    </main>
  );
}