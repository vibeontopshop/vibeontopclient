import React, { useState, useRef, useEffect } from "react";
import Comp from "./MyComponent"
import Rev from "./Reviews"
const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("Product Details");
  const [underlineStyle, setUnderlineStyle] = useState({});

  const tabsRef = useRef([]);

  const tabs = ["Product Details", "Rating & Reviews", "FAQs"];

  const handleTabClick = (tab, index) => {
    setActiveTab(tab);
    const tabElement = tabsRef.current[index];
    if (tabElement) {
      setUnderlineStyle({
        width: tabElement.offsetWidth,
        left: tabElement.offsetLeft - 93, // Add a little left margin to shift it
      });
    }
  };

  useEffect(() => {
    // Set initial underline position when component mounts or activeTab changes
    const initialIndex = tabs.indexOf(activeTab);
    const tabElement = tabsRef.current[initialIndex];
    if (tabElement) {
      setUnderlineStyle({
        width: tabElement.offsetWidth,
        left: tabElement.offsetLeft - 93, // Shift slightly to the left
      });
    }
  }, [activeTab]);

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full max-w-2xl">
        {/* Tabs */}
        <div className="flex justify-center space-x-24 border-b relative">
          {tabs.map((tab, index) => (
            <div
              key={tab}
              ref={(el) => (tabsRef.current[index] = el)}
              className={`cursor-pointer pb-2 text-gray-500 ${activeTab === tab ? "text-black font-semibold" : ""
                }`}
              onClick={() => handleTabClick(tab, index)}
            >
              {tab}
            </div>
          ))}
          {/* Active Tab Underline */}
          <div
            className="absolute bottom-0 h-1 bg-black transition-all duration-300"
            style={{
              ...underlineStyle,
              // Set bottom margin to be right on the text
              marginBottom: "-1px",
              transition: "all 0.3s ease",  // Smooth transition
            }}
          />
        </div>

        {/* Tab Content */}
        <div className="mt-4 p-4 text-center">
          {activeTab === "Product Details" && <div>Here are the product details.</div>}
          {activeTab === "Rating & Reviews" && <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
            <Rev />
            <Comp />
          </div>}
          {activeTab === "FAQs" && <div>Here are the FAQs.</div>}
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;
