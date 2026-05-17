import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matt Williams | ML Engineer",
  description:
    "Portfolio for Matt Williams, an ML engineer building machine learning systems and full-stack products that actually ship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                try {
                  const storedTheme = localStorage.getItem("theme");
                  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light";
                  const theme = storedTheme === "dark" || storedTheme === "light"
                    ? storedTheme
                    : systemTheme;
                  document.documentElement.classList.toggle("dark", theme === "dark");
                } catch {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
