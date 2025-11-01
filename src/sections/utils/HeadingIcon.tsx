import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Lightbulb, LightbulbOff } from "lucide-react";
import { HighlightedText } from "./HighlightedText";

export const HeadingSmiley = () => {
  return (
    <motion.span
      animate={{ rotate: 96 }}
      transition={{
        duration: 1.2,
        type: "spring",
        stiffness: 200,
        delay: 0.7,
      }}
      className="inline-block"
      initial={{ rotate: 3 }}
    >
      <HighlightedText className="!px-2 pt-0.5 !pb-1.5 font-[800]" text=":)" />
    </motion.span>
  );
};

export const HeadingLightbulb = ({
  shakeDuration = 0.5,
}: {
  shakeDuration?: number;
}) => {
  const [isOn, setOn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOn(true);
    }, (shakeDuration + 0.35) * 1000);

    return () => clearTimeout(timer);
  }, [shakeDuration]);

  const rotate = [];
  const rotateAmount = 10;

  for (let i = 0; i < 3; i++) {
    rotate.push(-rotateAmount);
    rotate.push(rotateAmount);
  }

  return (
    <AnimatePresence mode="wait">
      <div className="inline-block ml-2 h-7">
        {isOn ? (
          <motion.div
            key="on"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{
              duration: 0.15,
              type: "spring",
              stiffness: 260,
              damping: 15,
            }}
          >
            <Lightbulb
              size={6}
              className=" size-7 py-0.5 transform rotate-3 bg-orange-500"
            />
          </motion.div>
        ) : (
          <motion.div
            key="off"
            animate={{
              rotate: [...rotate, 0],
            }}
            transition={{
              duration: shakeDuration,
              repeat: 0,
            }}
          >
            <LightbulbOff className="size-6.5 py-0.5" />
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export const GenericHeadingIcon = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.span
      transition={{
        duration: 0.5,
        type: "spring",
        damping: 9,
        delay: 0.5,
      }}
      className="inline-flex items-center justify-center bg-orange-500 size-7 ml-2"
      initial={{ scale: 0 }}
      animate={{ scale: 1, rotate: 3 }}
    >
      {children}
    </motion.span>
  );
};
