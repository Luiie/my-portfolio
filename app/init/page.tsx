export default function InitPage() {
  return (
    <main className="min-h-screen android-grid bg-black text-green-400 font-sans px-8 py-12">
      <div className="max-w-4xl mx-auto space-y-10">

        <header className="space-y-3">
          <h1 className="text-3xl font-semibold text-scan">
            init
          </h1>
          <p className="text-green-500/70">
            First user-space process (PID 1).
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-medium">What happens here</h2>
          <p>
            init parses rc files, starts system services,
            and prepares Android userspace.
          </p>
        </section>

      </div>
    </main>
  );
}