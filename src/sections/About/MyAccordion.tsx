import { useEffect, useState, useRef } from "react";
import type { Key, ReactNode } from "react";
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
import { useRhuangrContext } from "./rhuangrContext";
import { cn } from "@/lib/utils";
import { Experience } from "../Experience";
import { Projects } from "../Projects";

type AccordionItemData = {
  value: string;
  title: ReactNode;
  content: ReactNode;
  contentKey: string;
  contentClassName?: string;
};

function skeletonContent() {
  return (
    <div className="space-y-[0.4rem]">
      <Skeleton className="h-[1em] w-3/4 bg-accent/60" />
      <Skeleton className="h-[1em] w-full bg-accent/30" />
    </div>
  );
}

// Animated wrapper component for content transitions
function AnimatedContent({ contentKey, children }: { contentKey: string; children: ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={contentKey}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function MyAccordion() {
  const { isLoading, output } = useRhuangrContext();
  const [newItems, setNewItems] = useState<AccordionItemData[]>([]);
  const [openedKeys, setOpenedKeys] = useState<Key[]>(["experience", "projects"]);
  const loadingKeyRef = useRef<string | null>(null);

  const accordionTriggerStyles =
    "w-full py-1 text-body font-[400] text-left dark:foreground border-b-1";
  const accordionContentStyles =
    "font-[400] text-zinc-500 text-subheading dark:text-muted-foreground ml-50";

  useEffect(() => {
    if (isLoading && !loadingKeyRef.current) {
      const newKey = `response-${Date.now()}`;
      loadingKeyRef.current = newKey;
      setNewItems((prevItems) => [
        ...prevItems,
        {
          value: newKey,
          title: <TextShimmer duration={1.5}>Loading...</TextShimmer>,
          content: skeletonContent(),
          contentKey: "loading",
          contentClassName: "",
        },
      ]);
      setOpenedKeys((prev) => Array.from(new Set([...prev, newKey])));
    } else if (!isLoading && output && loadingKeyRef.current) {
      const loadingKey = loadingKeyRef.current;
      setNewItems((prevItems) =>
        prevItems.map((item) =>
          item.value === loadingKey
            ? {
                ...item,
                title: "AI Response",
                content: <div>{output}</div>,
                contentKey: "loaded",
              }
            : item
        )
      );
      loadingKeyRef.current = null;
    }
  }, [isLoading, output]);

  const allItems = [...BASE_ACCORDION_ITEMS, ...newItems];
  const totalSize = allItems.length;
  const baseLength = BASE_ACCORDION_ITEMS.length;

  return (
    <Accordion
      type="multiple"
      expandedValue={openedKeys}
      onValueChange={(value) => {
        const next = Array.isArray(value)
          ? value
          : value !== null && value !== undefined
            ? [value]
            : [];

        if (totalSize === 1 && next.length === 0) return;
        setOpenedKeys(next);
      }}
      className="flex w-full flex-col space-y-5"
    >
      {allItems.map((item, i) => {
        const isNewItem = i >= baseLength;

        const content = (
          <AccordionItem value={item.value}>
            <AccordionTrigger className={accordionTriggerStyles}>
              <div className="flex items-center justify-between overflow-hidden">
                {item.title}
                {totalSize > 1 && (
                  <ChevronUp className="h-3 w-3 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50" />
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className={cn(accordionContentStyles, item.contentClassName)}>
                <span className="block h-3" />
                <AnimatedContent contentKey={item.contentKey || item.value}>
                  {item.content}
                </AnimatedContent>
                <span className="block h-2" />
              </div>
            </AccordionContent>
          </AccordionItem>
        );

        return isNewItem ? (
          <motion.div
            key={item.value}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {content}
          </motion.div>
        ) : (
          <div key={item.value}>{content}</div>
        );
      })}
    </Accordion>
  );
}

const BASE_ACCORDION_ITEMS: AccordionItemData[] = [
  {
    title: "About Me",
    value: "about-me",
    contentKey: "about-me",
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
    contentKey: "coding-languages",
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
  {
    title: "Experience",
    value: "experience",
    contentKey: "experience",
    contentClassName: "pl-0",
    content: <Experience />,
  },
  {
    title: "Projects",
    value: "projects",
    contentKey: "projects",
    contentClassName: "pl-0",
    content: <Projects/>,
  },
];