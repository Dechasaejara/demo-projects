
"use client";
import React, { useState, useEffect } from 'react';

interface Circle {
  x: number;
  y: number;
}

const CircleTrail: React.FC = () => {
  const [circles, setCircles] = useState<Circle[]>([]);
  const [containerRect, setContainerRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    const container = document.getElementById('circle-container');
    if (container) {
      setContainerRect(container.getBoundingClientRect());
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (containerRect) {
        setCircles((prevCircles) => [
          ...prevCircles,
          {
            x: event.clientX - containerRect.left,
            y: event.clientY - containerRect.top,
          },
        ]);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    const interval = setInterval(() => {
      setCircles((prevCircles) => prevCircles.slice(1));
    }, 50);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, [containerRect]);

  return (
    <div
      id="circle-container"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {circles.map((circle, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            width: '20px',
            height: '20px',
            backgroundColor: 'blue',
            borderRadius: '50%',
            transform: `translate(${circle.x - 10}px, ${circle.y - 10}px)`,
            transition: 'transform 50ms ease-out',
          }}
        />
      ))}
    </div>
  );
};

export default CircleTrail;