import React from "react";
import Card from "./card";
import { useHoverStore } from "../hover-store";

interface ScrollViewProps {
  data: any[]; // Replace 'any' with the type of your data
}

const ScrollView: React.FC<ScrollViewProps> = ({ data }) => {
  const { hoveredCard } = useHoverStore();
  return (
    <div className="no-scrollbar flex h-full w-full flex-col gap-8 overflow-y-scroll p-8">
      {data.map((item, index) => (
        <Card
          key={index}
          data={item}
          style={{
            opacity: hoveredCard && hoveredCard !== item.title ? 0.1 : 1,
          }}
        />
      ))}
    </div>
  );
};

export default ScrollView;
