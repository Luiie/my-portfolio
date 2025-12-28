export default function LinuxKernelPage() {
  return (
    <main className="min-h-screen android-grid bg-black text-green-400 font-sans px-8 py-12">
      <div className="max-w-4xl mx-auto space-y-10">

        <header className="space-y-3">
          <h1 className="text-3xl font-semibold text-scan">
            Linux Kernel
          </h1>
          <p className="text-green-500/70">
            Core OS responsible for process, memory, and device management.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-medium">What happens here</h2>
          <p>
            The kernel initializes drivers, mounts the root filesystem,
            and launches the init process.
          </p>
        </section>

      </div>
    </main>
  );
}