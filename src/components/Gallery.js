import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css"; // CSS 따로 관리

function Gallery() {
  const images = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png"];
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const delay = 3000; // 자동 슬라이드 간격

  // 터치 좌표
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  // 자동 슬라이드
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, delay);

    return () => resetTimeout();
  }, [current, images.length]);

  // 유저 슬라이드 선택
  const goToSlide = (index) => {
    setCurrent(index);
  };

  // 터치 이벤트
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };
  const handleSwipe = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    else if (distance < -50) setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="gallery">
      <h2>우리의 사진</h2>
      <div
        className="gallery-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={`/img/${img}`}
            alt={`웨딩사진${idx + 1}`}
            className={`slide ${idx === current ? "active" : ""}`}
          />
        ))}
      </div>

      <div className="dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === current ? "active" : ""}`}
            onClick={() => goToSlide(idx)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
