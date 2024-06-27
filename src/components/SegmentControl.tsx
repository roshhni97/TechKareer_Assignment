import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase, MessageSquare, CoinsHand } from "@/assets";

const tabs = ["Jobs", "Messages", "Payments"];

interface TabProps {
  text: string;
  selected: boolean;
  setSelected: (text: string) => void;
}

const Tab = ({ text, selected, setSelected }: TabProps) => {
  const getIcon = (text: string) => {
    switch (text) {
      case "Jobs":
        return <Briefcase color={selected ? "#FFFFFF" : "#B0B0B0"} />;
      case "Messages":
        return <MessageSquare color={selected ? "#FFFFFF" : "#B0B0B0"} />;
      case "Payments":
        return <CoinsHand color={selected ? "#FFFFFF" : "#B0B0B0"} />;
      default:
        return null;
    }
  };

  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected ? "text-white" : "text-[#B0B0B0] hover:text-gray-900"
      } relative rounded-full p-4 text-sm font-medium transition-colors`}
    >
      <div className="flex gap-2 items-center">
        {getIcon(text)}
        <span className="relative z-10 text-xl">{text}</span>
      </div>
      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: "spring", duration: 0.4 }}
          className="absolute inset-0 z-0 rounded-full bg-primary border-border border-2"
        ></motion.span>
      )}
    </button>
  );
};

const SegmentControl = () => {
  const [selected, setSelected] = useState<string>(tabs[0]);
  return (
    <div className="flex flex-wrap items-center gap-2">
      {tabs.map((tab, index) => (
        <Tab
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
  );
};

export default SegmentControl;
