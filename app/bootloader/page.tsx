import CodeViewer from "@/components/CodeViewer";

export default function BootloaderPage() {
  return (
    <main className="min-h-screen android-grid bg-black text-green-400 font-sans px-8 py-12">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Title */}
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold text-scan">
            Bootloader
          </h1>
          <p className="text-green-500/70">
            Firmware stage responsible for hardware initialization
            and loading the Linux kernel.
          </p>
        </header>

        {/* Description */}
        <section className="space-y-3">
          <h2 className="text-xl font-medium">
            What happens here
          </h2>
          <p>
            The bootloader prepares memory, initializes peripherals,
            loads the kernel image, and transfers execution to it.
          </p>
        </section>

        {/* Code */}
        <section className="space-y-3">
          <h2 className="text-xl font-medium">
            Related Code
          </h2>
          <CodeViewer
            repo="hanidev/android-boot-project"
            path="bootloader"
          />
        </section>

      </div>
    </main>
  );
}