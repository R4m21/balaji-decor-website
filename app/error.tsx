"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-black">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
          Something went wrong
        </h2>
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-gradient-primary text-white rounded-md"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
