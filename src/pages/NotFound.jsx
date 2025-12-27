import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-6xl font-extrabold text-gray-900">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-accent">
        Page Not Found
      </h2>
      <p className="mt-3 text-gray-600 max-w-md">
        Oops! The page you're looking for doesn't exist or may have been moved.
      </p>

      <div className="mt-6 flex gap-4">
        <Link
          to="/"
          className="px-6 py-3 rounded-md bg-accent text-white font-semibold hover:bg-accent-dark transition"
        >
          Go Home
        </Link>
        <Link
          to="/services"
          className="px-6 py-3 rounded-md border border-accent text-accent font-semibold hover:bg-accent/20 transition"
        >
          View Services
        </Link>
      </div>
    </main>
  );
}
