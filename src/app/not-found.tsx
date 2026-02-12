import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-bold text-neutral-900">Page not found</h1>
      <p className="mt-2 text-neutral-600">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-[#1e5f9e] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#164a7a]"
      >
        Back to home
      </Link>
    </div>
  );
}
