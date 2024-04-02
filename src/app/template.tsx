"use client";

import { motion } from "framer-motion";

interface TemplateProps extends RootLayoutProps {}

export default function Template({ children }: TemplateProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
}
