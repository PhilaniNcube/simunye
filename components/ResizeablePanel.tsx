"use client";

import { ReactNode } from "react";
import {MotionConfig, motion} from "framer-motion";
import useMeasure from "react-use-measure";

export default function ResizablePanel({ children }: { children: ReactNode }) {
  let [ref, { height }] = useMeasure();

  return (
    <MotionConfig transition={{ duration: 0.7 }}>
      <motion.div animate={{ height }} className="overflow-hidden">
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div ref={ref} className="py-6 mt-4 font-medium text-zinc-800">
            <div className="p-4 whitespace-pre-line rounded-lg shadow-lg bg-zinc-50">
              {children}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
}

const ignoreCircularReferences = () => {
  const seen = new WeakSet();
  return (key: any, value: any) => {
    if (key.startsWith("_")) return;
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return;
      seen.add(value);
    }
    return value;
  };
};
