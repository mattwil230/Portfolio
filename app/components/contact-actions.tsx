"use client";

import { useId, useState } from "react";

type ContactActionsProps = {
  email: string;
  phone: string;
  githubUrl: string;
  linkedinUrl: string;
};

function getPhoneHref(phone: string) {
  const digits = phone.replace(/\D/g, "");

  if (digits.length === 11) {
    return `+${digits}`;
  }

  if (digits.length === 10) {
    return `+1${digits}`;
  }

  return phone;
}

export default function ContactActions({
  email,
  phone,
  githubUrl,
  linkedinUrl,
}: ContactActionsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const phoneHref = getPhoneHref(phone);

  return (
    <div className="mt-4 flex w-full max-w-2xl flex-col items-center gap-4">
      <div className="flex flex-wrap justify-center gap-4">
        <button
          type="button"
          aria-controls={panelId}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className={`group rounded-full px-6 py-3 text-zinc-900 transition duration-300 ${
            isOpen
              ? "bg-[var(--accent-soft-blue)] shadow-[0_16px_40px_-24px_rgb(var(--accent-soft-blue-rgb)/0.55)]"
              : "bg-[var(--accent-soft-blue)] hover:opacity-90"
          }`}
        >
          <span className="inline-flex items-center gap-3">
            {isOpen ? "Hide Contact" : "Contact Me"}
            <span
              aria-hidden="true"
              className={`inline-flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900/10 text-lg leading-none transition duration-300 ${
                isOpen ? "rotate-45" : "group-hover:translate-x-0.5"
              }`}
            >
              +
            </span>
          </span>
        </button>

        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[var(--accent-soft-blue)] px-6 py-3 text-zinc-900 transition hover:opacity-90"
        >
          GitHub
        </a>

        <a
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[var(--accent-soft-blue)] px-6 py-3 text-zinc-900 transition hover:opacity-90"
        >
          LinkedIn
        </a>
      </div>

      {isOpen ? (
        <div
          id={panelId}
          className="contact-panel w-full max-w-xl"
          aria-live="polite"
        >
          <div className="relative overflow-hidden rounded-[28px] border border-[rgb(var(--accent-soft-blue-rgb)/0.45)] bg-zinc-200/94 p-5 text-left shadow-[0_24px_65px_-35px_rgb(var(--accent-soft-blue-rgb)/0.3)] sm:p-6">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-16 -translate-y-1/2 rounded-full bg-[rgb(var(--accent-soft-blue-rgb)/0.45)] blur-3xl" />

            <div className="relative flex items-center gap-3">
              <span
                aria-hidden="true"
                className="contact-status-dot h-2.5 w-2.5 rounded-full bg-[var(--accent-soft-blue)]"
              />

              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-soft-blue)]">
                Reach out directly
              </p>
            </div>

            <div className="relative mt-4 grid gap-3 sm:grid-cols-2">
              <a
                href={`mailto:${email}`}
                className="group rounded-2xl border border-[rgb(var(--accent-soft-blue-rgb)/0.45)] bg-zinc-200/90 p-4 transition hover:-translate-y-1 hover:border-[var(--accent-soft-blue)] hover:bg-zinc-200 hover:shadow-lg"
              >
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent-soft-blue)]">
                  Email
                </p>

                <p className="mt-2 break-all text-base font-semibold text-zinc-900">
                  {email}
                </p>

                <p className="mt-2 text-sm text-[var(--accent-soft-blue)] transition group-hover:translate-x-1">
                  Open mail composer
                </p>
              </a>

              <a
                href={`tel:${phoneHref}`}
                className="group rounded-2xl border border-[rgb(var(--accent-soft-blue-rgb)/0.45)] bg-zinc-200/90 p-4 transition hover:-translate-y-1 hover:border-[var(--accent-soft-blue)] hover:bg-zinc-200 hover:shadow-lg"
              >
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent-soft-blue)]">
                  Phone
                </p>

                <p className="mt-2 text-base font-semibold text-zinc-900">
                  {phone}
                </p>

                <p className="mt-2 text-sm text-[var(--accent-soft-blue)] transition group-hover:translate-x-1">
                  Start a call
                </p>
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
