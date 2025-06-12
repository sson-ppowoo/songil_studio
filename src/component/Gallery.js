import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const Gallery = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
    <section style={{ padding: '20px' }}>
      <h3>갤러리</h3>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx}>
            <img src={img} alt={`사진 ${idx + 1}`} style={{ width: '100%', borderRadius: '10px' }} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Gallery;
