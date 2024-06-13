import React, { useState, useRef, useEffect } from 'react';
import './Magnifier.css';

const MagnifyingGlass = ({ src, zoom = 2 }) => {
  const [magnify, setMagnify] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursorPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setMagnify(true);
  };

  const handleMouseLeave = () => {
    setMagnify(false);
  };

  return (
    <div
      className="magnifying-container"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img ref={imageRef} src={src} alt="Magnifiable" className="magnifying-image" />
      {magnify && (
        <div
          className="magnifying-glass"
          style={{
            left: cursorPosition.x - 2,
            top: cursorPosition.y - 2,
            backgroundImage: `url(${src})`,
            backgroundSize: `${imageRef.current.width * zoom}px ${imageRef.current.height * zoom}px`,
            backgroundPosition: `-${cursorPosition.x * zoom - 50}px -${cursorPosition.y * zoom - 50}px`,
          }}
        />
      )}
    </div>
  );
};

export default MagnifyingGlass;
