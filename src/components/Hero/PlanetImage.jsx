import React, { useState, useEffect } from "react";

import { getImageUrl } from "../../utils";

function Planet() {
  const [rotation, setRotation] = useState(0);
  const [rotationDirection, setRotationDirection] = useState(1);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    const angle = Math.atan2(deltaY, deltaX);
    const degrees = (angle * 180) / Math.PI;
    setRotation(degrees + 90);
  };

  useEffect(() => {
    const rotate = () => {
      setRotationDirection(1);
      setTimeout(() => {
        setRotationDirection(-1);
      }, 2000);
    };

    rotate();

    const rotationInterval = setInterval(() => {
      rotate();
    }, 4000);

    return () => {
      clearInterval(rotationInterval);
    };
  }, []);

  return (
    <div onMouseMove={handleMouseMove}>
      <img
        src={getImageUrl("hero/planet.png")}
        alt="Planet Image"
        style={{
          transform: `rotate(${rotationDirection * rotation}deg)`,
          transition: "transform 2s ease",
        }}
      />
    </div>
  );
}

export default Planet;
