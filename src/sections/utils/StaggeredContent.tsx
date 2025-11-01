import React from "react";
import { motion, easeInOut } from "framer-motion";

interface StaggeredContentProps {
  children: React.ReactNode[];
  staggerDuration?: number;
  animationDuration?: number;
}

export const StaggeredContent = ({ children, staggerDuration = 0.2, animationDuration = 0.8 }: StaggeredContentProps) => {
  const variants = {
    hidden: { opacity: 0, y: 4 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeInOut } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDuration,
          },
        },
      }}
      className="space-y-6.5 h-auto"
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={variants}
          transition={{ duration: animationDuration }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};
