import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-5 text-center bg-[#f7f6f2]">
      <p className="text-[120px] font-extrabold text-[#1c1b18]/5 leading-none select-none mb-4">
        404
      </p>
      <h1 className="font-display text-3xl font-bold text-[#1c1b18] mb-3">
        Page not found
      </h1>
      <p className="text-[#1c1b18]/50 text-sm mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#1c1b18] text-[#f7f6f2] text-sm font-semibold rounded-full hover:bg-[#c8a96e] hover:text-[#1c1b18] transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
