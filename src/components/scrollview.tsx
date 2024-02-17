import React from "react";
import Card from "./card";

interface ScrollViewProps {
  data: any[]; // Replace 'any' with the type of your data
}

const ScrollView: React.FC<ScrollViewProps> = ({ data }) => {
  return (
    <div
      style={{ overflowY: "scroll", height: "400px" }}
      className="flex flex-col gap-8"
    >
      {data.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
};

export default ScrollView;
