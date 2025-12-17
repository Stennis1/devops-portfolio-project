import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />

      {/* HERO – FULL BLEED */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#2563eb15,_transparent_60%)]" />

        <div className="relative px-6 py-28 text-center">
          <h1 className="mx-auto max-w-5xl text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            <span className="block">Monitor, Deploy, and</span>
            <span className="block text-blue-600">Scale with Confidence</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600 sm:text-xl">
            A modern Analytics platform that gives you full visibility and control
            over your infrastructure — from deployment to monitoring.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition"
            >
              Start Free Trial
            </Link>

            <Link
              to="/login"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-8 py-4 text-lg font-semibold text-slate-700 hover:bg-slate-100 transition"
            >
              View Demo
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            {["No credit card required", "30-day free trial", "Cancel anytime"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* LOGO CLOUD */}
      <section className="w-full bg-slate-50 py-16">
        <div className="px-6">
          <p className="mb-10 text-center text-sm font-semibold uppercase tracking-wide text-slate-500">
            Trusted by modern engineering teams
          </p>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {[
              "TechCorp",
              "InnovateLabs",
              "CloudScale",
              "DataFlow",
              "SecureNet",
              "FutureStack",
            ].map((company) => (
              <div
                key={company}
                className="flex items-center justify-center rounded-lg bg-white px-4 py-6 text-sm font-semibold text-slate-700 shadow-sm"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA – FULL WIDTH */}
      <section className="w-full bg-slate-900 py-28">
        <div className="px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to modernize your workflow?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Join teams shipping faster and operating smarter with Analytics Dashboard.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/signup"
              className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-slate-900 hover:bg-slate-100 transition"
            >
              Start Free Trial
            </Link>

            <Link
              to="/contact"
              className="rounded-lg border border-white/30 px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 transition"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-black py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Analytics Dashboard. All rights reserved.
      </footer>
    </div>
  );
}
