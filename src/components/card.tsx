import { useState } from "react";

function Card() {
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
      <div
        style={{
          position: "fixed",
          top: coords.y - 50, // subtract half the height when hovered
          left: coords.x - 50, // subtract half the width when hovered
          width: isHovered ? "100px" : "0",
          height: isHovered ? "100px" : "0",
          transition: "width 0.5s, height 0.5s", // removed transition from top and left
          pointerEvents: "none", // This makes the div ignore mouse events
        }}
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
      <h1 className="text-2xl leading-6">Community App</h1>
      <div className="text-lg leading-5">
        <p>
          A community app that connects people with the same interests and
          hobbies.
        </p>
        <p>This app is built using React Native and Firebase as the backend.</p>
      </div>
      <div className="text-lg leading-6">
        <p>
          <a href="" className="animate-underline italic">
            see more
          </a>
        </p>
      </div>
    </div>
  );
}

export default Card;
