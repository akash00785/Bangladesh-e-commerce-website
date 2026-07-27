export default function Loading() {
  return (
    <div
      aria-busy="true"
      aria-label="লোড হচ্ছে"
      className="mx-auto w-full max-w-7xl animate-pulse px-4 py-10 sm:px-6 lg:px-8"
    >
      {/* Hero Skeleton */}
      <div className="mb-10 h-64 w-full rounded-2xl bg-muted sm:h-80 lg:h-96" />

      {/* Section Title */}
      <div className="mb-6 flex items-center gap-3">
        <div className="h-6 w-32 rounded-lg bg-muted" />
        <div className="h-1 flex-1 rounded-full bg-muted" />
      </div>

      {/* Product Cards Grid */}
      <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-3">
            <div className="aspect-[3/4] w-full rounded-xl bg-muted" />
            <div className="h-4 w-3/4 rounded-md bg-muted" />
            <div className="h-4 w-1/2 rounded-md bg-muted" />
            <div className="h-8 w-full rounded-lg bg-muted" />
          </div>
        ))}
      </div>

      {/* Category Row */}
      <div className="mb-6 flex items-center gap-3">
        <div className="h-6 w-40 rounded-lg bg-muted" />
        <div className="h-1 flex-1 rounded-full bg-muted" />
      </div>
      <div className="mb-10 grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="size-16 rounded-full bg-muted sm:size-20" />
            <div className="h-3 w-14 rounded-md bg-muted" />
          </div>
        ))}
      </div>

      {/* Banner Strip */}
      <div className="h-20 w-full rounded-2xl bg-muted" />
    </div>
  );
}
