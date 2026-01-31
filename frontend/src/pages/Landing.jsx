import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      {/* Navbar */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide">
          Task<span className="text-blue-500">Flow</span>
        </h1>

        <nav className="flex items-center gap-6">
          <Link
            to="/login"
            className="text-gray-300 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <main className="max-w-7xl mx-auto px-6">
        <section className="flex flex-col items-center text-center mt-28">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Organize your work. <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Get more done.
            </span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl text-lg">
            TaskFlow is a modern task management app that helps you plan,
            track, and complete your work efficiently — all in one place.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/register"
              className="bg-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
            >
              Start for Free
            </Link>
            <Link
              to="/login"
              className="border border-gray-700 px-8 py-3 rounded-lg text-lg hover:bg-gray-800 transition"
            >
              Login
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="mt-36 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            title="Secure Authentication"
            desc="Your data is protected using JWT-based authentication and secure APIs."
          />
          <Feature
            title="Smart Task Tracking"
            desc="Create tasks, update progress, and stay on top of your daily goals."
          />
          <Feature
            title="Fast & Minimal UI"
            desc="A clean interface designed to keep you focused and productive."
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-40 border-t border-gray-800 text-center text-gray-500 py-6 text-sm">
        © {new Date().getFullYear()} TaskFlow. Built with care.
      </footer>
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="bg-gray-900/60 backdrop-blur border border-gray-800 rounded-2xl p-6 hover:border-blue-600 transition">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}
