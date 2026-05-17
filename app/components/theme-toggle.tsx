"use client";

import { useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark")
    ) {
      return "dark";
    }

    return "light";
  });

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={theme === "dark"}
      onClick={() => {
        const updatedTheme = theme === "dark" ? "light" : "dark";
        setTheme(updatedTheme);
        applyTheme(updatedTheme);
      }}
      className="inline-flex h-10 items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 text-sm text-zinc-700 transition-colors duration-200 hover:border-zinc-300 hover:text-zinc-950 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white"
    >
      <span className="relative flex h-4 w-4 items-center justify-center">
        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={`absolute h-4 w-4 transition-all duration-200 ${
            theme === "dark" ? "scale-0 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          <path
            d="M10 2.5v2.1M10 15.4v2.1M4.7 4.7l1.5 1.5M13.8 13.8l1.5 1.5M2.5 10h2.1M15.4 10h2.1M4.7 15.3l1.5-1.5M13.8 6.2l1.5-1.5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
          <circle cx="10" cy="10" r="3.3" fill="currentColor" />
        </svg>

        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={`absolute h-4 w-4 transition-all duration-200 ${
            theme === "dark" ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          <path
            d="M14.8 13.8A6.8 6.8 0 0 1 6.2 5.2a.4.4 0 0 0-.5-.5A7.7 7.7 0 1 0 15.3 14.3a.4.4 0 0 0-.5-.5Z"
            fill="currentColor"
          />
        </svg>
      </span>

      <span suppressHydrationWarning>
        {theme === "dark" ? "Dark" : "Light"}
      </span>
    </button>
  );
}
