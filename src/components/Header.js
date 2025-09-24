import React, { useState, useEffect } from "react";

function Header() {
  const images = ["/img/1.png", "/img/2.png"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${images[current]})` }}
    >
      <div className="overlay"></div>
      <span>Join us in celebrating our love</span>
      <div className="header-content">
        <h1>
          범수 <br /> 현진
        </h1>
        <div className="header-subtitle">
          <p className="p1">Join us and make our special day even brighter.</p>
          <p className="p2">2025년 11월 16일, 일요일 오후 1시 30분</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
