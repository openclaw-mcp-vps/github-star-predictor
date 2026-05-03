import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitHub Star Predictor – Predict Your Repo's Star Growth",
  description: "Analyze your GitHub repo metadata, README quality, and launch timing to predict star growth in the first 30 days."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7862787c-4c4b-44e6-812c-b0029fafa8b3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
