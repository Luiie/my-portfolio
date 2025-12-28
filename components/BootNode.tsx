"use client";

import { motion } from "framer-motion";

interface BootNodeProps {
  title: string;
  desc: string;
  active: boolean;
  onClick?: () => void; // ✅ 추가
}

export default function BootNode({
  title,
  desc,
  active,
  onClick,
}: BootNodeProps) {
  return (
    <motion.div
      className="w-96 rounded-xl border border-green-500/40 p-4 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      onClick={onClick} // ✅ 여기서 사용
    >
      <div className="text-xl font-semibold text-green-400">
        {title}
      </div>

      {active && (
        <motion.div
          className="mt-2 text-sm text-green-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {desc}
        </motion.div>
      )}
    </motion.div>
  );
}