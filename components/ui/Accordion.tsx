"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.title}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
          >
            <button
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              aria-label={`Abrir tópico ${item.title}`}
            >
              <span className="text-sm font-medium text-white sm:text-base">{item.title}</span>
              <span className={cn("text-orange-200 transition-transform duration-300", isOpen && "rotate-180")}>
                ▾
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-300",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <p className="overflow-hidden px-5 pb-5 text-sm leading-relaxed text-white/70">{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
