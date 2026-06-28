"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Rating = "Helpful" | "Not Helpful" | "";

type ChatSession = {
  id: string;
  tester_label: string;
  priority: string;
  deadline: string;
  help_type: string;
  assistant_summary: string;
  guardrail_triggered: boolean;
  rating: string | null;
  feedback: string | null;
  created_at: string;
};

export default function ChatPage() {
  const [testerLabel, setTesterLabel] = useState("External Tester 1");
  const [priority, setPriority] = useState("");
  const [deadline, setDeadline] = useState("");
  const [helpType, setHelpType] = useState("Study plan");
  const [assistantSummary, setAssistantSummary] = useState("");
  const [guardrailTriggered, setGuardrailTriggered] = useState(false);
  const [rating, setRating] = useState<Rating>("");
  const [feedback, setFeedback] = useState("");
  const [savedSessions, setSavedSessions] = useState<ChatSession[]>([]);
  const [status, setStatus] = useState(
    "Answer the three intake questions, generate a response, rate it, and save the session."
  );
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchSavedSessions();
  }, []);

  async function fetchSavedSessions() {
    const { data, error } = await supabase
      .from("chat_sessions")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setStatus(`Supabase read error: ${error.message}`);
      return;
    }

    setSavedSessions(data || []);
  }

  function containsUnsafeRequest(text: string) {
    const unsafeWords = [
      "do my homework",
      "write my essay",
      "take my test",
      "cheat",
      "give me the answers",
      "complete my assignment",
      "haz mi tarea",
      "escribe mi ensayo",
      "dame las respuestas",
    ];

    return unsafeWords.some((word) => text.toLowerCase().includes(word));
  }

  function generateAssistantResponse() {
    const combinedInput = `${priority} ${deadline} ${helpType}`;

    if (!priority.trim() || !deadline.trim() || !helpType.trim()) {
      setStatus(
        "Please answer all three intake questions before generating a response."
      );
      return;
    }

    if (containsUnsafeRequest(combinedInput)) {
      setGuardrailTriggered(true);
      setAssistantSummary(
        "I cannot complete homework, essays, tests, or assignments for you. I can help you understand the task, organize your next steps, create a study plan, or prepare questions to ask your teacher."
      );
      setStatus("Guardrail response generated.");
      return;
    }

    setGuardrailTriggered(false);

    const summary = `Based on your answers, your main priority is "${priority}". Your important deadline or exam is "${deadline}". Since you selected "${helpType}", a good next step is to break the work into one small action today, one review action tomorrow, and one final check before the deadline.

Suggested plan:
1. Today: identify the most important part of the task and work on it for 25–30 minutes.
2. Tomorrow: review your notes, organize missing information, and complete the next section.
3. Before the deadline: check your work, ask for help if needed, and submit with enough time.

Human checkpoint: If this task affects your final grade, feels urgent, or involves personal stress, review this plan with a teacher, advisor, or trusted adult.`;

    setAssistantSummary(summary);
    setStatus("Assistant response generated. Please rate it before saving.");
  }

  async function saveChatSession() {
    if (!assistantSummary) {
      setStatus("Generate an assistant response before saving.");
      return;
    }

    if (!rating) {
      setStatus("Please select Helpful or Not Helpful before saving.");
      return;
    }

    setIsSaving(true);
    setStatus("Saving chat session to Supabase...");

    const { error } = await supabase.from("chat_sessions").insert([
      {
        tester_label: testerLabel,
        priority,
        deadline,
        help_type: helpType,
        assistant_summary: assistantSummary,
        guardrail_triggered: guardrailTriggered,
        rating,
        feedback,
      },
    ]);

    if (error) {
      setStatus(`Supabase save error: ${error.message}`);
      setIsSaving(false);
      return;
    }

    setStatus(
      "Chat session saved to Supabase. Refresh the page to verify persistence."
    );
    setIsSaving(false);
    fetchSavedSessions();
  }

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
          <a href="/chat" className="font-bold text-amber-600">
            Chat
          </a>
          <a href="/docs">Docs</a>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <p className="mb-4 inline-block rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
          Week 5 · Public Chatbot / Guided Assistant
        </p>

        <h2 className="text-5xl font-bold tracking-tight">
          Public Guided Academic Assistant
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Answer three intake questions, receive a guided academic support
          response, rate the response, and save the session to Supabase.
        </p>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-amber-700">
              Student Input
            </h3>

            <label className="mt-5 block">
              <span className="text-sm font-bold text-slate-700">
                Tester Label
              </span>
              <input
                value={testerLabel}
                onChange={(event) => setTesterLabel(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-amber-100 bg-white p-4 text-sm"
                placeholder="External Tester 1"
              />
            </label>

            <label className="mt-5 block">
              <span className="text-sm font-bold text-slate-700">
                1. What is your main school priority?
              </span>
              <input
                value={priority}
                onChange={(event) => setPriority(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-amber-100 bg-white p-4 text-sm"
                placeholder="Example: Study for my math exam"
              />
            </label>

            <label className="mt-5 block">
              <span className="text-sm font-bold text-slate-700">
                2. What deadline or exam do you have soon?
              </span>
              <input
                value={deadline}
                onChange={(event) => setDeadline(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-amber-100 bg-white p-4 text-sm"
                placeholder="Example: Friday at 3 PM"
              />
            </label>

            <label className="mt-5 block">
              <span className="text-sm font-bold text-slate-700">
                3. What type of academic support do you need?
              </span>
              <select
                value={helpType}
                onChange={(event) => setHelpType(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-amber-100 bg-white p-4 text-sm"
              >
                <option>Study plan</option>
                <option>Task organization</option>
                <option>Concept explanation</option>
                <option>Motivation and focus</option>
              </select>
            </label>

            <button
              onClick={generateAssistantResponse}
              className="mt-6 rounded-2xl bg-amber-500 px-6 py-3 font-bold text-white hover:bg-amber-600"
            >
              Generate Assistant Response
            </button>
          </article>

          <article className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-amber-700">
              Assistant Output
            </h3>

            {assistantSummary ? (
              <div className="mt-5 rounded-2xl bg-amber-50 p-5">
                <p className="text-sm font-bold text-amber-700">
                  {guardrailTriggered
                    ? "Safety / Guardrail Response"
                    : "Academic Support Summary"}
                </p>

                <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-700">
                  {assistantSummary}
                </p>
              </div>
            ) : (
              <div className="mt-5 rounded-2xl border border-dashed border-amber-200 bg-amber-50 p-6 text-sm text-slate-600">
                No assistant response yet. Answer the three intake questions
                and click Generate Assistant Response.
              </div>
            )}

            <div className="mt-5 rounded-2xl border border-amber-100 bg-white p-5">
              <p className="font-bold text-slate-800">Was this helpful?</p>

              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => setRating("Helpful")}
                  className={`rounded-2xl px-5 py-3 text-sm font-bold ${
                    rating === "Helpful"
                      ? "bg-green-100 text-green-700"
                      : "border border-green-200 text-green-700"
                  }`}
                >
                  Helpful
                </button>

                <button
                  onClick={() => setRating("Not Helpful")}
                  className={`rounded-2xl px-5 py-3 text-sm font-bold ${
                    rating === "Not Helpful"
                      ? "bg-red-100 text-red-700"
                      : "border border-red-200 text-red-700"
                  }`}
                >
                  Not Helpful
                </button>
              </div>

              <label className="mt-5 block">
                <span className="text-sm font-bold text-slate-700">
                  Brief feedback
                </span>
                <textarea
                  value={feedback}
                  onChange={(event) => setFeedback(event.target.value)}
                  className="mt-2 min-h-24 w-full rounded-2xl border border-amber-100 bg-white p-4 text-sm"
                  placeholder="Example: The response was clear and easy to follow."
                />
              </label>

              <button
                onClick={saveChatSession}
                disabled={isSaving}
                className="mt-5 rounded-2xl bg-amber-500 px-6 py-3 font-bold text-white hover:bg-amber-600 disabled:opacity-60"
              >
                {isSaving ? "Saving..." : "Save Chat Session to Supabase"}
              </button>

              <p className="mt-4 rounded-2xl bg-amber-50 p-4 text-sm font-medium text-amber-700">
                Status: {status}
              </p>
            </div>
          </article>
        </section>

        <section className="mt-10 rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-bold">
                Saved Chat Sessions from Supabase
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                These sessions are loaded from Supabase. Refresh the page to
                confirm persistence.
              </p>
            </div>

            <p className="rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-700">
              {savedSessions.length} saved
            </p>
          </div>

          {savedSessions.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-dashed border-amber-200 bg-amber-50 p-6 text-sm text-slate-600">
              No saved sessions yet. Generate a response, rate it, and save the
              session to Supabase.
            </div>
          ) : (
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {savedSessions.map((session) => (
                <article
                  key={session.id}
                  className="rounded-2xl border border-amber-100 bg-amber-50 p-5"
                >
                  <p className="text-xs font-bold uppercase tracking-wide text-amber-700">
                    {session.tester_label}
                  </p>

                  <h4 className="mt-2 text-lg font-bold">
                    {session.help_type}
                  </h4>

                  <p className="mt-3 text-sm text-slate-700">
                    Priority: {session.priority}
                  </p>

                  <p className="mt-2 text-sm text-slate-700">
                    Deadline: {session.deadline}
                  </p>

                  <p className="mt-2 text-sm text-slate-700">
                    Rating: {session.rating}
                  </p>

                  <p className="mt-2 text-sm text-slate-700">
                    Guardrail: {session.guardrail_triggered ? "Yes" : "No"}
                  </p>

                  {session.feedback && (
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Feedback: {session.feedback}
                    </p>
                  )}

                  <p className="mt-4 text-xs text-slate-500">
                    Saved: {new Date(session.created_at).toLocaleString()}
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