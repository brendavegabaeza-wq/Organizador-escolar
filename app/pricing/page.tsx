"use client";

import { useEffect, useMemo, useState } from "react";

type BillingCycle = "monthly" | "annual";

type SavedScenario = {
  id: string;
  segment: string;
  tier: string;
  totalUsers: number;
  conversionRate: number;
  billingCycle: BillingCycle;
  payingUsers: number;
  monthlyRevenue: number;
  annualRevenue: number;
  savedAt: string;
};

const tiers = {
  Free: 0,
  "Student Plus": 4.99,
  "School Pro": 9.99,
};

const segments = ["Individual Students", "Schools / Academic Programs"];

export default function PricingPage() {
  const [segment, setSegment] = useState("Individual Students");
  const [tier, setTier] = useState<keyof typeof tiers>("Student Plus");
  const [totalUsers, setTotalUsers] = useState(1000);
  const [conversionRate, setConversionRate] = useState(8);
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const [savedScenarios, setSavedScenarios] = useState<SavedScenario[]>([]);
  const [lastAction, setLastAction] = useState(
    "Enter assumptions and calculate a pricing scenario."
  );

  useEffect(() => {
    const stored = localStorage.getItem("school-organizer-pricing-scenarios");

    if (stored) {
      setSavedScenarios(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "school-organizer-pricing-scenarios",
      JSON.stringify(savedScenarios)
    );
  }, [savedScenarios]);

  const price = tiers[tier];

  const results = useMemo(() => {
    const payingUsers = Math.round(totalUsers * (conversionRate / 100));
    const monthlyRevenue =
      billingCycle === "monthly"
        ? payingUsers * price
        : (payingUsers * price * 12 * 0.8) / 12;
    const annualRevenue =
      billingCycle === "monthly"
        ? monthlyRevenue * 12
        : payingUsers * price * 12 * 0.8;

    return {
      payingUsers,
      monthlyRevenue,
      annualRevenue,
    };
  }, [totalUsers, conversionRate, billingCycle, price]);

  function calculateRevenue() {
    setLastAction(
      `Calculated ${results.payingUsers} paying users with estimated monthly revenue of ${formatCurrency(
        results.monthlyRevenue
      )}.`
    );
  }

  function saveScenario() {
    const scenario: SavedScenario = {
      id: crypto.randomUUID(),
      segment,
      tier,
      totalUsers,
      conversionRate,
      billingCycle,
      payingUsers: results.payingUsers,
      monthlyRevenue: results.monthlyRevenue,
      annualRevenue: results.annualRevenue,
      savedAt: new Date().toLocaleString(),
    };

    setSavedScenarios([scenario, ...savedScenarios]);
    setLastAction("Scenario saved. Refresh the page to verify persistence.");
  }

  function clearScenarios() {
    setSavedScenarios([]);
    setLastAction("Saved scenarios cleared from localStorage.");
  }

  function formatCurrency(value: number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-rose-50 text-slate-900">
      <nav className="flex items-center justify-between border-b border-pink-100 bg-white px-8 py-5 shadow-sm">
        <h1 className="text-xl font-bold text-pink-600">School Organizer</h1>

        <div className="flex gap-5 text-sm font-medium text-slate-600">
          <a href="/">Home</a>
          <a href="/core">Core Agent</a>
          <a href="/research">Research</a>
          <a href="/product">Product</a>
          <a href="/pricing" className="font-bold text-pink-600">
            Pricing
          </a>
          <a href="/docs">Docs</a>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <p className="mb-4 inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
          Week 3 · Pricing Simulator
        </p>

        <h2 className="text-5xl font-bold tracking-tight">
          Pricing Simulator
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Test pricing assumptions, calculate revenue, and save scenarios that
          remain visible after refreshing the browser.
        </p>

        <section className="mt-10 rounded-3xl border border-pink-100 bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-bold">Scenario Inputs</h3>

          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            <label className="block">
              <span className="text-sm font-bold text-slate-700">
                Customer Segment
              </span>
              <select
                value={segment}
                onChange={(event) => setSegment(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-pink-100 bg-white px-4 py-3"
              >
                {segments.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-bold text-slate-700">
                Pricing Tier
              </span>
              <select
                value={tier}
                onChange={(event) =>
                  setTier(event.target.value as keyof typeof tiers)
                }
                className="mt-2 w-full rounded-2xl border border-pink-100 bg-white px-4 py-3"
              >
                {Object.keys(tiers).map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-bold text-slate-700">
                Total Users
              </span>
              <input
                type="number"
                value={totalUsers}
                min={0}
                onChange={(event) => setTotalUsers(Number(event.target.value))}
                className="mt-2 w-full rounded-2xl border border-pink-100 bg-white px-4 py-3"
              />
            </label>

            <label className="block">
              <span className="text-sm font-bold text-slate-700">
                Conversion Rate %
              </span>
              <input
                type="number"
                value={conversionRate}
                min={0}
                max={100}
                onChange={(event) =>
                  setConversionRate(Number(event.target.value))
                }
                className="mt-2 w-full rounded-2xl border border-pink-100 bg-white px-4 py-3"
              />
            </label>

            <label className="block">
              <span className="text-sm font-bold text-slate-700">
                Billing Cycle
              </span>
              <select
                value={billingCycle}
                onChange={(event) =>
                  setBillingCycle(event.target.value as BillingCycle)
                }
                className="mt-2 w-full rounded-2xl border border-pink-100 bg-white px-4 py-3"
              >
                <option value="monthly">Monthly</option>
                <option value="annual">Annual with 20% discount</option>
              </select>
            </label>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <button
              onClick={calculateRevenue}
              className="rounded-2xl bg-pink-600 px-6 py-3 font-bold text-white shadow-sm"
            >
              Calculate Revenue
            </button>

            <button
              onClick={saveScenario}
              className="rounded-2xl border border-pink-200 bg-pink-50 px-6 py-3 font-bold text-pink-700"
            >
              Save Scenario
            </button>

            <button
              onClick={clearScenarios}
              className="rounded-2xl border border-slate-200 bg-white px-6 py-3 font-bold text-slate-600"
            >
              Clear Saved Scenarios
            </button>
          </div>

          <p className="mt-4 rounded-2xl bg-pink-50 p-4 text-sm font-medium text-pink-700">
            Status: {lastAction}
          </p>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold text-slate-500">Paying Users</p>
            <h3 className="mt-3 text-4xl font-bold text-pink-600">
              {results.payingUsers}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Based on {conversionRate}% conversion from {totalUsers} users.
            </p>
          </article>

          <article className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold text-slate-500">Monthly Revenue</p>
            <h3 className="mt-3 text-4xl font-bold text-pink-600">
              {formatCurrency(results.monthlyRevenue)}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Based on the selected tier and billing cycle.
            </p>
          </article>

          <article className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold text-slate-500">Annual Revenue</p>
            <h3 className="mt-3 text-4xl font-bold text-pink-600">
              {formatCurrency(results.annualRevenue)}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Annual estimate using the current scenario.
            </p>
          </article>
        </section>

        <section className="mt-10 rounded-3xl border border-pink-100 bg-white shadow-sm">
          <div className="border-b border-pink-100 p-6">
            <h3 className="text-2xl font-bold">Assumptions Table</h3>
            <p className="mt-2 text-sm text-slate-600">
              This table documents the current scenario assumptions before the
              user saves the scenario.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-left text-sm">
              <tbody>
                <tr className="border-b border-pink-100">
                  <th className="p-4 bg-pink-50">Segment</th>
                  <td className="p-4">{segment}</td>
                </tr>
                <tr className="border-b border-pink-100">
                  <th className="p-4 bg-pink-50">Tier</th>
                  <td className="p-4">{tier}</td>
                </tr>
                <tr className="border-b border-pink-100">
                  <th className="p-4 bg-pink-50">Price</th>
                  <td className="p-4">{formatCurrency(price)} per user/month</td>
                </tr>
                <tr className="border-b border-pink-100">
                  <th className="p-4 bg-pink-50">Total Users</th>
                  <td className="p-4">{totalUsers}</td>
                </tr>
                <tr className="border-b border-pink-100">
                  <th className="p-4 bg-pink-50">Conversion Rate</th>
                  <td className="p-4">{conversionRate}%</td>
                </tr>
                <tr>
                  <th className="p-4 bg-pink-50">Billing Cycle</th>
                  <td className="p-4">{billingCycle}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-pink-100 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold">Saved Pricing Scenarios</h3>
              <p className="mt-2 text-sm text-slate-600">
                These scenarios are saved in localStorage and remain visible
                after refreshing the page.
              </p>
            </div>

            <p className="rounded-full bg-pink-100 px-4 py-2 text-sm font-bold text-pink-700">
              {savedScenarios.length} saved
            </p>
          </div>

          {savedScenarios.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-dashed border-pink-200 bg-pink-50 p-6 text-sm text-slate-600">
              No saved scenarios yet. Enter assumptions, calculate revenue, and
              click Save Scenario.
            </div>
          ) : (
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {savedScenarios.map((scenario) => (
                <article
                  key={scenario.id}
                  className="rounded-2xl border border-pink-100 bg-pink-50 p-5"
                >
                  <p className="text-xs font-bold uppercase tracking-wide text-pink-700">
                    {scenario.segment}
                  </p>

                  <h4 className="mt-2 text-lg font-bold">
                    {scenario.tier} · {scenario.billingCycle}
                  </h4>

                  <div className="mt-4 space-y-2 text-sm text-slate-600">
                    <p>Total Users: {scenario.totalUsers}</p>
                    <p>Conversion Rate: {scenario.conversionRate}%</p>
                    <p>Paying Users: {scenario.payingUsers}</p>
                    <p>
                      Monthly Revenue:{" "}
                      {formatCurrency(scenario.monthlyRevenue)}
                    </p>
                    <p>
                      Annual Revenue: {formatCurrency(scenario.annualRevenue)}
                    </p>
                  </div>

                  <p className="mt-4 text-xs text-slate-500">
                    Saved: {scenario.savedAt}
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