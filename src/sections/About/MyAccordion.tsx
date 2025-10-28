import { useEffect, useState, useRef } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import { TextShimmer } from "@/components/TextShimmer";

import { ChevronUp } from "lucide-react";
import { useAboutContext } from "./AboutContext";

type AccordionItem = {
  value: string;
  title: ReactNode;
  content: ReactNode;
};

function skeletonAccordionItem({ value }: { value: string }): AccordionItem {
  return {
    value,
    title: <TextShimmer duration={1.5}>Loading...</TextShimmer>,
    content: (
      <div className="space-y-[0.4rem]">
        <Skeleton className="h-[1em] w-3/4 bg-accent/60" />
        <Skeleton className="h-[1em] w-full bg-accent/30" />
      </div>
    ),
  };
}

export function MyAccordion() {
  const { isLoading, output } = useAboutContext();
  const [newItems, setNewItems] = useState<AccordionItem[]>([]);
  const [openedKey, setOpenedKey] = useState<React.Key | null>("about-me");
  const loadingKeyRef = useRef<string | null>(null);

  const accordionTriggerStyles =
    "w-full py-1 text-body font-[400] text-left dark:text-muted-foreground border-b-1";
  const accordionContentStyles =
    "font-[400] text-zinc-500 dark:text-foreground leading-[1.4rem]";

  useEffect(() => {
    if (isLoading && !loadingKeyRef.current) {
      // Only add a new loading item if we're not already loading
      const newKey = `loading-${Date.now()}`; // Use timestamp for unique keys
      loadingKeyRef.current = newKey;
      setNewItems((prevItems) => [
        ...prevItems,
        skeletonAccordionItem({ value: newKey }),
      ]);
    } else if (!isLoading && output && loadingKeyRef.current) {
      // Update the loading item with the actual content
      const keyToUpdate = loadingKeyRef.current;
      setOpenedKey(keyToUpdate);
      setNewItems((prevItems) =>
        prevItems.map((item) =>
          item.value === keyToUpdate
            ? { ...item, title: "AI Response", content: <div>{output}</div> }
            : item
        )
      );
      loadingKeyRef.current = null; // Reset for next submission
    }
  }, [isLoading, output]);

  // Combine all items
  const allItems = [...initialAccordionItemsData, ...newItems];
  const totalSize = allItems.length;

  return (
    <motion.div layout>
      <Accordion
        expandedValue={openedKey}
        onValueChange={(value) => {
          if (totalSize === 1 && value === null) return;
          setOpenedKey(value);
        }}
        className="flex w-full flex-col space-y-1"
      >
        {allItems.map((item, i) => {
          const isNewItem = i >= initialAccordionItemsData.length;
          
          const content = (
            <AccordionItem value={item.value}>
              <AccordionTrigger className={accordionTriggerStyles}>
                <div className="flex items-center justify-between overflow-hidden">
{
                    item.title
                  }
                  {totalSize > 1 && (
                    <ChevronUp className="h-3 w-3 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50" />
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className={accordionContentStyles}>
                  <span className="block h-3" />
                  {item.content}
                  <span className="block h-2" />
                </div>
              </AccordionContent>
            </AccordionItem>
          );

          // Only wrap new items with animation
          return isNewItem ? (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              layout
            >
              {content}
            </motion.div>
          ) : (
            <div key={item.value}>{content}</div>
          );
        })}
      </Accordion>
    </motion.div>
  );
}

const initialAccordionItemsData = [
  {
    title: "About Me",
    value: "about-me",
    content: (
      <>
        Some quick facts:
        <ul className="list-(--my-marker) list-inside">
          <li>I'm a second year at McGill University 🎓</li>
          <li>
            I'm interested in frontend dev, data science and systems programming
            💻
          </li>
          <li>I was almost a professional esports player 🎮</li>
        </ul>
      </>
    ),
  },
  {
    title: "Coding Languages",
    value: "coding-languages",
    content: (
      <>
        My coding languages in order of proficiency:
        <ol className="list-decimal-custom list-inside pl-4 text-subheading font-family-chivo-mono font-[400]">
          <li>Python</li>
          <li>Javascript/Typescript</li>
          <li>C</li>
          <li>Java</li>
        </ol>
      </>
    ),
  },
];