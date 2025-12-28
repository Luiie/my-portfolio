"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BootNode from "@/components/BootNode";

const steps = [
  { title: "Power ON", desc: "Device receives power signal", path: "/power-on" },
  { title: "Boot ROM", desc: "SoC internal boot code", path: "/boot-rom" },
  { title: "Bootloader", desc: "Loads kernel and verifies images", path: "/bootloader" },
  { title: "Linux Kernel", desc: "Kernel initialization", path: "/linux-kernel" },
  { title: "init", desc: "First user-space process", path: "/init" },
  { title: "Android Framework / Apps", desc: "System services & apps", path: "/android-framework" },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const router = useRouter();

  return (
    <main className="min-h-screen android-grid bg-black text-green-400 font-sans">
      
      {/* ===== Title Area (20%) ===== */}
      <section className="h-[20vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-wide text-green-400 text-scan">
            Android OS Project
          </h1>
        </div>
      </section>

      {/* ===== Boot Flow Area (80%) ===== */}
      <section className="h-[80vh] flex items-start justify-center">
        <div className="flex flex-col items-center gap-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              className="flex flex-col items-center"
            >
              <BootNode
                title={s.title}
                desc={s.desc}
                active={activeIndex === i}
                onClick={() => router.push(s.path)}
              />

              {i !== steps.length - 1 && (
                <div className="text-green-500 my-1 select-none">↓</div>
              )}
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}