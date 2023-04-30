import { useState } from "react";
import { motion } from "framer-motion";

let tabs = [
  { id: 1, label: "Home" },
  { id: 2, label: "About" },
  { id: 3, label: "Service" },
  { id: 4, label: "Contact" },
];

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex gap-20">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? "" : "hover:text-white/60"
          } text-2xl font-medium px-4 py-1.5 relative`}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="bubble"
              className="absolute inset-0 bg-purple-700 rounded-full -z-10"
              transition={{ type: "spring", duration: 0.6 }}
            ></motion.div>
          )}

          {tab.label}
        </button>
      ))}
    </div>
  );
};
