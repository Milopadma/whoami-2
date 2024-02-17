import { useState } from "react";
import Button from "./button";

interface CardProps {
  data: {
    title: string;
    description: string;
    imageUrl: string;
    linkUrl: string;
  };
}

function Card({ data }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: { clientX: any; clientY: any }) => {
    let x = event.clientX;
    let y = event.clientY;

    // Prevent image from going off the right edge of the screen
    if (x + 100 > window.innerWidth) {
      x = window.innerWidth - 100;
    }

    // Prevent image from going off the bottom edge of the screen
    if (y + 100 > window.innerHeight) {
      y = window.innerHeight - 100;
    }

    setCoords({ x, y });
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{ position: "relative", cursor: isHovered ? "none" : "auto" }}
    >
      <a href={data.linkUrl} className="cursor-none">
        <div
          style={{
            position: "fixed",
            top: coords.y - 50, // subtract half the height when hovered
            left: coords.x - 50, // subtract half the width when hovered
            width: isHovered ? "100px" : "0",
            height: isHovered ? "100px" : "0",
            transition: "width 0.5s, height 0.5s", // removed transition from top and left
          }}
          className="pointer-events-none cursor-none"
        >
          <img
            src="test.jpeg"
            alt="description"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <h1 className="text-2xl leading-6">{data.title}</h1>
        <div className="text-lg leading-5">
          <p>{data.description}</p>
        </div>
      </a>
    </div>
  );
}

export default Card;
