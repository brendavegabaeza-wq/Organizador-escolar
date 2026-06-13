"use client";

import { useState } from "react";

export default function CoreAgentPage() {
  const [input, setInput] = useState("");
  const [hasGenerated, setHasGenerated] = useState(false);
  const [savedMessage, setSavedMessage] = useState("");

  const handleGenerate = () => {
    setHasGenerated(true);
    setSavedMessage("");
  };

  const handleSave = () => {
    setSavedMessage(
      "Output saved as a preview. Future versions will store this in Supabase."
    );
  };

  const sampleInput =
    input.trim() ||
    "I need to organize my study plan for a difficult class project.";

  const output = {
    purpose:
      "Turn the academic idea into a clear and realistic study plan that can be completed step by step.",
    keyComponents:
      "Main topic, tasks, deadlines, resources, notes, and progress checkpoints.",
    userNeed:
      "The student needs a simple way to understand what to do first, what to organize, and how to avoid feeling overwhelmed.",
    nextSteps:
      "Break the idea into smaller tasks, assign each task to a subject, add important dates, and review progress weekly.",
    organizerUse:
      "The School Organizer can store this plan as tasks, notes, subject information, and calendar events in future versions.",
  };

  const savedOutputs = [
    {
      title: "Python Study Plan",
      type: "Study Plan",
      description:
        "A structured plan to learn Python basics and complete a class project.",
    },
    {
      title: "History Essay Outline",
      type: "Assignment Summary",
      description:
        "A core structure for organizing thesis, evidence, and essay sections.",
    },
    {
      title: "Math Exam Prep",
      type: "Study Method",
      description:
        "A study plan for reviewing topics, practice problems, and deadlines.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 text-gray-900">
      <nav className="flex items-center justify-between border-b border-green-100 bg-white px-8 py-5 shadow-sm">
        <h1 className="text-xl font-bold text-green-700">
          School Organizer
        </h1>

        <div className="flex gap-5 text-sm font-medium text-gray-600">
          <a href="/">Home</a>
          <a href="/core" className="font-bold text-green-700">
            Core Agent
          </a>
          <a href="/docs">Docs</a>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-4 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          Week 1 · Generative Core Agent
        </p>

        <h2 className="text-5xl font-bold tracking-tight">
          Generative Core Agent
        </h2>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
          Turn messy school ideas into structured study plans.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold">Input Idea</h3>

            <label className="mt-6 block text-sm font-semibold text-gray-700">
              Enter a school idea, assignment, topic, or study method
            </label>

            <textarea
              className="mt-3 h-48 w-full rounded-2xl border border-green-100 bg-green-50/30 p-4 text-sm leading-6 outline-none focus:border-green-500"
              placeholder="Example: I need to learn Python for my CS class and build a small project that analyzes a dataset."
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />

            <label className="mt-6 block text-sm font-semibold text-gray-700">
              Output Type
            </label>

            <select className="mt-3 w-full rounded-xl border border-green-100 bg-white p-3 text-sm outline-none focus:border-green-500">
              <option>Study Plan</option>
              <option>Project Concept</option>
              <option>Assignment Summary</option>
            </select>

            <button
              onClick={handleGenerate}
              className="mt-8 w-full rounded-xl bg-green-700 px-5 py-4 text-sm font-bold text-white shadow-sm hover:bg-green-800"
            >
              Generate Core Output
            </button>
          </section>

          <section className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold">Structured Core Output</h3>

            {!hasGenerated ? (
              <div className="mt-6 rounded-2xl border border-dashed border-green-200 bg-green-50 p-6 text-gray-600">
                Generate an output to see the structured result here.
              </div>
            ) : (
              <div className="mt-6 space-y-4">
                <OutputRow title="Input Summary" text={sampleInput} />
                <OutputRow title="Purpose" text={output.purpose} />
                <OutputRow title="Key Components" text={output.keyComponents} />
                <OutputRow title="User Need" text={output.userNeed} />
                <OutputRow title="Next Steps" text={output.nextSteps} />
                <OutputRow
                  title="School Organizer Use"
                  text={output.organizerUse}
                />

                <button
                  onClick={handleSave}
                  className="mt-4 w-full rounded-xl border border-green-700 bg-white px-5 py-3 text-sm font-bold text-green-700 hover:bg-green-50"
                >
                  Save Output
                </button>

                {savedMessage && (
                  <p className="rounded-xl bg-green-50 p-3 text-sm font-medium text-green-800">
                    {savedMessage}
                  </p>
                )}
              </div>
            )}
          </section>
        </div>

        <section className="mt-12">
          <h3 className="text-2xl font-bold">Saved Core Outputs</h3>

          <p className="mt-2 text-gray-600">
            This preview shows how saved outputs could appear in a future
            dashboard.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {savedOutputs.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm"
              >
                <p className="mb-3 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                  {item.type}
                </p>

                <h4 className="font-bold">{item.title}</h4>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

function OutputRow({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-green-100 bg-green-50/60 p-4">
      <h4 className="text-sm font-bold text-green-800">{title}</h4>
      <p className="mt-2 text-sm leading-6 text-gray-700">{text}</p>
    </div>
  );
}