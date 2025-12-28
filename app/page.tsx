import LayerButton from "@/components/LayerButton";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Title */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">
          Android OS Project for HaniDev
        </h1>
        <p className="text-slate-400">
          Exploring the Android boot flow from power-on to framework.
        </p>
      </header>

      {/* Layer Buttons */}
      <section className="flex flex-col items-center space-y-4">
        <LayerButton title="Power ON" href="/power-on" />
        <LayerButton title="Boot ROM" href="/boot-rom" />
        <LayerButton title="Bootloader" href="/bootloader" />
        <LayerButton title="Linux Kernel" href="/linux-kernel" />
        <LayerButton title="init" href="/init" />
        <LayerButton
          title="Android Framework / Apps"
          href="/android-framework"
        />
      </section>
    </div>
  );
}