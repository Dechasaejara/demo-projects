import React, { useState, useEffect, useRef } from 'react';

interface Circle {
  x: number;
  y: number;
}

const CircleTrail: React.FC = () => {
  const [circles, setCircles] = useState<Circle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        setCircles((prevCircles) => [
          ...prevCircles,
          {
            x: event.clientX - (containerRef.current?.offsetLeft || 0),
            y: event.clientY - (containerRef.current?.offsetTop || 0),
          },
        ]);
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener('mousemove', handleMouseMove);
    }

    const interval = setInterval(() => {
      setCircles((prevCircles) => prevCircles.slice(1));
    }, 50);

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
      }
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={containerRef}
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