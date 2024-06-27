"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

const tabs = ["Job preview", "Applicants", "Match", "Messages"];

interface TabProps {
  text: string;
  selected: boolean;
  setSelected: (text: string) => void;
  customID?: string;
}

const Tab = ({ text, selected, setSelected, customID }: TabProps) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={` ${
        selected
          ? "text-primary"
          : " hover:text-gray-900 dark:hover:text-gray-100"
      } relative  px-2 py-5 text-xl font-medium text-[#888] transition-colors duration-300 focus-within:outline-red-500/50`}
    >
      <span className="relative z-10">{text}</span>
      <div>
        {selected && (
          <motion.div
            className="absolute left-0 top-0 flex size-full h-full w-full items-end justify-center"
            layoutId={customID + "linetab"}
            transition={{
              type: "spring",
              duration: 0.4,
              bounce: 0,
              delay: 0.1,
            }}
          >
            <span className="z-0 h-[3px] w-[50%] bg-primary"></span>
          </motion.div>
        )}
      </div>
    </button>
  );
};

interface LineTabProps {
  center?: boolean;
  customID?: string;
}

const LineTabs = ({ center, customID }: LineTabProps) => {
  const [selected, setSelected] = useState<string>(tabs[0]);
  return (
    <div
      className={cn(
        "px-[100px] flex flex-wrap items-center gap-2 border border-gray-200 dark:border-gray-600",
        center && "justify-center"
      )}
    >
      {tabs.map((tab) => (
        <Tab
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
          customID={customID}
        />
      ))}
    </div>
  );
};

export default LineTabs;
