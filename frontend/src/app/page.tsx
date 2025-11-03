import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import RequestCallback from "@/components/RequestCallback";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Angel Intermediaries — NYC SCAHC Grant Utilization & Compliance",
  description:
    "We help yeshivas, shuls, and schools in New York fully utilize SCAHC security grant funds—planning, compliance, documentation, and reimbursement.",
};

type PageProps = {
  searchParams?: Promise<{ sent?: string }>;
};

export default async function HomePage({ searchParams }: PageProps) {
  const params = (await searchParams) ?? {};
  const sent = params.sent === "1";

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

       {/* NYC Focus banner */}
       <div className="border-b bg-amber-50">
        <div className="mx-auto max-w-6xl px-4 py-2 text-sm">
          <strong>NYC Focus:</strong> Specializing in New York’s <span className="whitespace-nowrap">Securing Communities Against Hate Crimes (SCAHC)</span> program.
        </div>
      </div>

      {/* Hero */}
<section className="border-b bg-gradient-to-b from-indigo-50 via-sky-50 to-white">
  <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
    <div>
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
        Turn unspent <span className="underline decoration-indigo-300">SCAHC</span> funds into real security upgrades
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        Angel Intermediaries helps community institutions such as schools, houses of worship, and nonprofits plan eligible expenses,
        keep clean documentation, and submit compliant claims—so you can fully utilize your award.
      </p>
      <div className="mt-8 flex gap-3">
        <a href="#contact" className="rounded-md bg-indigo-600 px-5 py-3 text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Request a callback
        </a>
        <a href="#program" className="rounded-md border border-indigo-200 px-5 py-3 text-indigo-700 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          NY Program Details
        </a>
      </div>
    </div>

    <div className="rounded-xl border border-indigo-100 bg-white p-6 shadow-sm">
      <h3 className="mb-3 font-medium text-indigo-800">What we handle</h3>
      <ul className="space-y-3 text-sm">
        {[
          "Grant utilization planning mapped to eligibility",
          "Procurement support (quotes, invoices, proof of delivery)",
          "Compliance files & audit readiness",
          "Claim preparation & reimbursement tracking",
          "Clear communication with program managers",
        ].map((t) => (
          <li key={t} className="flex items-start gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-500/80" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>

      {/* Who we serve */}
      <section className="border-b" id="serve">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-2xl font-semibold text-indigo-900">Who we serve</h2>
          <p className="mt-4 text-gray-700">
          Schools, houses of worship, community centers, and all other nonprofits eligible for SCAHC in New York.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-b bg-white">
  <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
    <h2 className="text-2xl font-semibold text-indigo-900">Services aligned to SCAHC</h2>
    <div className="mt-8 grid gap-6 md:grid-cols-3">
      {[
        ["Security Planning", "Translate your needs into eligible line items and timelines (guards, cameras, access control, training, hardening)."],
        ["Compliance & Documentation", "We maintain clean files: quotes, invoices, payment proofs, photos, sign-in logs, training rosters."],
        ["Claims & Reimbursements", "Prepare forms and supporting documentation; coordinate clarifications until approved."],
      ].map(([title, desc]) => (
        <div key={title} className="rounded-lg border border-indigo-100 bg-white p-6 transition hover:bg-indigo-50/40">
          <h3 className="font-medium text-indigo-800">{title}</h3>
          <p className="mt-2 text-sm text-gray-600">{desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Program focus / contacts */}
      <section id="program" className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-2xl font-semibold text-indigo-900">New York SCAHC program focus</h2>
          <p className="mt-2 text-sm text-gray-700">
            We follow official guidance from NYS DCJS and work with your grant manager to stay compliant.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-6">
              <h3 className="font-medium">Common eligible categories</h3>
              <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
                <li>Security personnel / guard services</li>
                <li>Surveillance systems (cameras, storage, AI analytics where allowed)</li>
                <li>Access control & hardening (locks, gates, reinforcement)</li>
                <li>Staff training and drills</li>
              </ul>
              <p className="mt-3 text-xs text-gray-500">
                Always subject to current guidelines and your award conditions.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="font-medium">Program contacts (for reference)</h3>
              <p className="mt-3 text-sm">
                NYS Division of Criminal Justice Services (DCJS) — Grants / SCAHC
              </p>
              <ul className="mt-2 text-sm">
                <li>Phone: 518-485-2632</li>
                <li>Email: <a className="underline" href="mailto:grants@dcjs.ny.gov"> funding@dcjs.ny.gov</a></li>
                <li>Program info: <a className="underline" href="https://www.criminaljustice.ny.gov/grants/scahc" target="_blank">criminaljustice.ny.gov/grants/scahc</a></li>
              </ul>
              <p className="mt-3 text-xs text-gray-500">
                We can coordinate directly with your assigned program manager.
              </p>
            </div>
          </div>

          <div className="mt-6 text-sm">
            <a
              href="https://wwe2.osc.state.ny.us/transparency/contracts/contractglossary.cfm?APP=ContractType"
              target="_blank"
              className="underline"
            >
              NY State contract glossary (OSC)
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-b bg-sky-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-2xl font-semibold text-indigo-900">How we work (pilot first, then scale)</h2>
          <ol className="mt-6 space-y-4 text-gray-700">
            <li><span className="font-medium">1) Discovery.</span> Confirm award status, timelines, and immediate needs.</li>
            <li><span className="font-medium">2) Utilization plan.</span> Align needs to eligible items; outline documentation and claim schedule.</li>
            <li><span className="font-medium">3) Execution & claim.</span> Procurement support, compliance files, and submission until reimbursement.</li>
          </ol>
        </div>
      </section>

     
     {/* Resources / Checklist  */} 
      <section id="resources" className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-2xl font-semibold text-indigo-900">Resources</h2>
          <ul className="mt-4 list-disc pl-5 text-sm">
            <li>
              <a className="underline" href="https://www.notion.so/Get-started-in-a-legitimate-and-professional-manner-263011f42afb80f5a105c68886d2a5d6?pvs=21" target="_blank">
                Get started in a legitimate & professional manner — checklist
              </a>
            </li>
            <li>
              Outreach email templates for institutions & DCJS (available on request).
            </li>
          </ul>
        </div>
      </section>
    
      


      {/* Contact */}
      <section id="contact">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-2xl font-semibold">Request a callback</h2>
          <p className="mt-2 text-sm text-gray-600">
            Briefly share where you are in the SCAHC process. We’ll follow up to discuss a pilot.
          </p>

          <RequestCallback sent={sent} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
