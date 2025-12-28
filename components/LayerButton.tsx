"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  title: string;
  href: string;
}

export default function LayerButton({ title, href }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="w-full max-w-md"
    >
      <Link
        href={href}
        className="block text-center border border-slate-700 rounded-lg py-4
                   hover:bg-slate-800 transition"
      >
        {title}
      </Link>
    </motion.div>
  );
}
