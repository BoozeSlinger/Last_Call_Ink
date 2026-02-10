"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function StickyCTA() {
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }} // Wait for intro animations
        className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-50 mix-blend-difference"
    >
        <Link href="/audit">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-3 bg-bone text-matte px-6 py-4 md:px-8 md:py-5 border-2 border-transparent hover:border-matte transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none"
            >
                {/* The "notification" dot */}
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                </span>

                <div className="flex flex-col items-start leading-none">
                    <span className="font-display font-black text-lg md:text-xl uppercase tracking-tighter">
                        OPEN A TAB
                    </span>
                    <span className="font-mono text-[9px] md:text-[10px] tracking-widest uppercase text-matte/60 group-hover:text-matte transition-colors">
                        Free Express Audit
                    </span>
                </div>
            </motion.button>
        </Link>
    </motion.div>
  );
}
