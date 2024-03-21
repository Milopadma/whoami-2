import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHoverStore } from "../hover-store";

interface CardProps {
  data: {
    title: string;
    description: string;
    imageUrl: string;
    linkUrl: string;
  };
  style?: React.CSSProperties;
}

function Card({ data, style }: CardProps) {
  const { hoveredCard, setHoveredCard } = useHoverStore();
  const isHovered = hoveredCard === data.title;

  const [isExpanded, setIsExpanded] = useState(false);

  const navigate = useNavigate();

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
      onMouseEnter={() => setHoveredCard(data.title)}
      onMouseLeave={() => setHoveredCard(null)}
      onMouseMove={handleMouseMove}
      onClick={() => {
        setIsExpanded(true);
        setTimeout(() => {
          navigate("/");
        }, 500);
      }}
      style={{
        position: "relative",
        cursor: isHovered ? "none" : "auto",
        ...style,
      }}
      className={`flex flex-col gap-4 transition-all duration-300 ${
        isHovered ? "cursor-none pb-8 pt-8" : ""
      } ${isExpanded ? "card--expanded" : ""}`}
    >
      <div className="cursor-none">
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
      </div>
    </div>
  );
}

export default Card;
