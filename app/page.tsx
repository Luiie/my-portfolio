"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BootNode from "@/components/BootNode";
import CatRobotFace from "@/components/CatRobotFace";

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
  const [look, setLook] = useState({ x: 0, y: 0 });
  const router = useRouter();

  const handleHover = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();

    // 얼굴 기준 → 버튼 방향 계산 (미세하게)
    const dx = Math.min(Math.max((rect.left - 200) / 10, -24), 24);
    const dy = Math.min(Math.max((rect.top - 200) / 50, -16), 16);

    setLook({ x: dx, y: dy });
  };

  const resetLook = () => setLook({ x: 0, y: 0 });

  return (
    <main className="min-h-screen android-grid bg-black text-green-400 font-sans">

      {/* ===== Title Area (20%) ===== */}
      <section className="h-[20vh] flex items-center justify-center">
        <h1 className="text-5xl font-semibold tracking-wide text-green-400 text-scan">
          Android OS Project
        </h1>
      </section>

      {/* ===== Boot Flow Area (80%) ===== */}
      <section className="h-[80vh]">

        {/* === Left : Cat Robot (20%) === */}
        <div className="fixed bottom-6 left-6 z-30 pointer-events-none">
           <CatRobotFace lookX={look.x} lookY={look.y} />
        </div>

        {/* === Right : Boot Flow (80%) === */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center gap-3">
            {steps.map((s, i) => (
              <div
                key={s.title}
                onMouseEnter={(e) => {
                  setActiveIndex(i);
                  handleHover(e);
                }}
                onMouseLeave={() => {
                  setActiveIndex(null);
                  resetLook();
                }}
                className="flex flex-col items-center"
              >
                <BootNode
                  title={s.title}
                  desc={s.desc}
                  active={activeIndex === i}
                  onClick={() => router.push(s.path)}
                />

                {i !== steps.length - 1 && (
                  <div className="text-green-500 select-none">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}