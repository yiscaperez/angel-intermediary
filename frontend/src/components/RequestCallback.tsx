// app/components/RequestCallback.tsx
"use client";

import { useRef, useState } from "react";

type Props = { sent?: boolean };

export default function RequestCallback({ sent: initialSent = false }: Props) {
  const [sent, setSent] = useState(initialSent);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // 👈 prevent full page reload
    setSubmitting(true);
    setError(null);

    const fd = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" }, // tell the route we want JSON
      });

      if (!res.ok) throw new Error("Request failed");
      setSent(true);
      formRef.current?.reset();
      // Optionally scroll the banner into view:
      // document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (err: unknown) {
    console.error("Request callback failed:", err);
    setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mt-6" id="contact">
      {sent && (
        <div
          role="status"
          aria-live="polite"
          className="mb-4 rounded-md border border-green-200 bg-green-50 p-3 text-sm text-green-800"
        >
          Thanks—your message was sent. We’ll reply shortly.
        </div>
      )}
      {error && (
        <div className="mb-4 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800">
          {error}
        </div>
      )}

      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="grid gap-4 md:max-w-xl"
        // keep these for no-JS fallback (progressive enhancement)
        action="/api/contact"
        method="POST"
        noValidate
      >
        <input name="name" required placeholder="Your name" className="w-full rounded-md border p-3" />
        <input name="email" required type="email" placeholder="Email" className="w-full rounded-md border p-3" />
        <input name="phone" required type="tel" placeholder="Phone" className="w-full rounded-md border p-3" />
        <input name="organization" placeholder="Institution (optional)" className="w-full rounded-md border p-3" />
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us your award status (pending/awarded/unspent), target upgrades (guards, cameras, gates, training), and timeline."
          className="w-full rounded-md border p-3"
        />
        <button
          disabled={submitting}
          className="w-full rounded-md bg-indigo-600 p-3 text-white disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Send"}
        </button>
        <p className="text-xs text-gray-500">
          We keep your information confidential and use it only to respond to your inquiry.
        </p>
      </form>
    </div>
  );
}
