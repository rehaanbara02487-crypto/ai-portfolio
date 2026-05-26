"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-[100svh] bg-black flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="glass rounded-3xl px-8 py-7"
      >
        <div className="animated-gradient h-1 w-64 rounded-full opacity-80" />
        <div className="mt-4 text-sm text-white/70 tracking-[0.22em]">
          LOADING
        </div>
      </motion.div>
    </div>
  );
}

