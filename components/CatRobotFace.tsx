"use client";

import { motion } from "framer-motion";

interface Props {
  lookX?: number;
  lookY?: number;
}

export default function CatRobotFace({ lookX = 0, lookY = 0 }: Props) {
  return (
    <div className="relative w-64 h-40">
      {/* ===== Head & Ears ===== */}
      <svg
        viewBox="0 0 300 180"
        className="w-full h-full"
        fill="none"
        stroke="#22c55e"
        strokeWidth="4"
      >
        {/* Head dome (more semicircle feeling) */}
        <path d="M20 140 C 20 30, 280 30, 280 140" />

        {/* ===== Ears Group (lifted up) ===== */}
        <g transform="translate(0,-20)">
          {/* Left Ear */}
          <motion.g
            animate={{ rotate: [-8, 6, -8] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "120px 70px" }}
          >
            <path d="M90 70 L100 30 L130 70" />
          </motion.g>

          {/* Right Ear */}
          <motion.g
            animate={{ rotate: [8, -6, 8] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "180px 70px" }}
          >
            <path d="M170 70 L200 30 L210 70" />
          </motion.g>
        </g>
      </svg>

      {/* ===== Eyes ===== */}
      <div className="absolute top-[70px] left-0 w-full flex justify-center gap-14">
        {["left", "right"].map((eye) => (
          <motion.div
            key={eye}
            className="w-4 h-4 bg-green-400 rounded-full"
            animate={{
              x: lookX,
              y: lookY,
              scaleY: [1, 1, 0.1, 1], // blink
            }}
            transition={{
              x: { type: "spring", stiffness: 120 },
              y: { type: "spring", stiffness: 120 },
              scaleY: {
                duration: 4,
                repeat: Infinity,
                repeatDelay: 3,
              },
            }}
          />
        ))}
      </div>
    </div>
  );
}