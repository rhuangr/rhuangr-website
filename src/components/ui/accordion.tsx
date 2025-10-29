"use client";
import { motion, AnimatePresence, MotionConfig } from "motion/react";
import type { Transition, Variants, Variant } from "motion/react";
import { cn } from "@/lib/utils";
import React, { createContext, useContext, useState } from "react";
import type { Key, ReactNode } from "react";

type AccordionSelection = Key | Key[] | null;

export type AccordionContextType = {
  expandedValue: AccordionSelection;
  toggleItem: (value: Key) => void;
  isExpanded: (value: Key) => boolean;
  type: "single" | "multiple";
  variants?: { expanded: Variant; collapsed: Variant };
};

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordion must be used within an AccordionProvider");
  }
  return context;
}

export type AccordionProviderProps = {
  children: ReactNode;
  variants?: { expanded: Variant; collapsed: Variant };
  expandedValue?: AccordionSelection;
  defaultExpandedValue?: AccordionSelection;
  type?: "single" | "multiple";
  onValueChange?: (value: AccordionSelection) => void;
};

function AccordionProvider({
  children,
  variants,
  expandedValue: externalExpandedValue,
  defaultExpandedValue,
  type = "single",
  onValueChange,
}: AccordionProviderProps) {
  const initialValue =
    defaultExpandedValue !== undefined
      ? defaultExpandedValue
      : type === "multiple"
        ? []
        : null;

  const [internalExpandedValue, setInternalExpandedValue] =
    useState<AccordionSelection>(initialValue);

  const expandedValue =
    externalExpandedValue !== undefined
      ? externalExpandedValue
      : internalExpandedValue;

  const normalizeToArray = (value: AccordionSelection): Key[] => {
    if (Array.isArray(value)) {
      return value;
    }
    if (value === null || value === undefined) {
      return [];
    }
    return [value];
  };

  const isExpanded = (value: Key) => {
    if (type === "multiple") {
      return normalizeToArray(expandedValue).includes(value);
    }
    return expandedValue === value;
  };

  const toggleItem = (value: Key) => {
    let newValue: AccordionSelection;

    if (type === "multiple") {
      const current = normalizeToArray(expandedValue);
      newValue = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
    } else {
      newValue = expandedValue === value ? null : value;
    }

    if (onValueChange) {
      onValueChange(newValue);
    } else {
      setInternalExpandedValue(newValue);
    }
  };

  return (
    <AccordionContext.Provider
      value={{ expandedValue, toggleItem, variants, isExpanded, type }}
    >
      {children}
    </AccordionContext.Provider>
  );
}

export type AccordionProps = {
  children: ReactNode;
  className?: string;
  transition?: Transition;
  variants?: { expanded: Variant; collapsed: Variant };
  expandedValue?: AccordionSelection;
  defaultExpandedValue?: AccordionSelection;
  type?: "single" | "multiple";
  onValueChange?: (value: AccordionSelection) => void;
};

function Accordion({
  children,
  className,
  transition,
  variants,
  expandedValue,
  defaultExpandedValue,
  type = "single",
  onValueChange,
}: AccordionProps) {
  return (
    <MotionConfig transition={transition}>
      <div className={cn("relative", className)} aria-orientation="vertical">
        <AccordionProvider
          variants={variants}
          expandedValue={expandedValue}
          defaultExpandedValue={defaultExpandedValue}
          type={type}
          onValueChange={onValueChange}
        >
          {children}
        </AccordionProvider>
      </div>
    </MotionConfig>
  );
}

export type AccordionItemProps = {
  value: React.Key;
  children: ReactNode;
  className?: string;
};

function AccordionItem({ value, children, className }: AccordionItemProps) {
  const { isExpanded } = useAccordion();
  const expanded = value !== undefined ? isExpanded(value) : false;

  return (
    <div
      className={cn("overflow-hidden", className)}
      {...(expanded ? { "data-expanded": "" } : { "data-closed": "" })}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            value,
            expanded,
          });
        }
        return child;
      })}
    </div>
  );
}

export type AccordionTriggerProps = {
  children: ReactNode;
  className?: string;
};

function AccordionTrigger({
  children,
  className,
  ...props
}: AccordionTriggerProps) {
  const { toggleItem, isExpanded } = useAccordion();
  const value = (props as { value?: React.Key }).value;
  const expanded = value !== undefined ? isExpanded(value) : false;

  return (
    <button
      onClick={() => value !== undefined && toggleItem(value)}
      aria-expanded={expanded}
      type="button"
      className={cn("group", className)}
      {...(expanded ? { "data-expanded": "" } : { "data-closed": "" })}
    >
      {children}
    </button>
  );
}

export type AccordionContentProps = {
  children: ReactNode;
  className?: string;
};

function AccordionContent({
  children,
  className,
  ...props
}: AccordionContentProps) {
  const { variants, isExpanded } = useAccordion();
  const value = (props as { value?: React.Key }).value;
  const expanded = value !== undefined ? isExpanded(value) : false;

  const BASE_VARIANTS: Variants = {
    expanded: { height: "auto", opacity: 1 },
    collapsed: { height: 0, opacity: 0 },
  };

  const combinedVariants = {
    expanded: { ...BASE_VARIANTS.expanded, ...variants?.expanded },
    collapsed: { ...BASE_VARIANTS.collapsed, ...variants?.collapsed },
  };

  return (
    <AnimatePresence initial={false} mode="wait">
      {expanded && (
        <motion.div
          initial="collapsed"
          animate="expanded"
          exit="collapsed"
          variants={combinedVariants}
          className={`${className}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
