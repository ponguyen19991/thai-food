import React from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const CarouselButtons = ({ goToPrevious, goToNext, images, currentIndex, handleImageClick }) => {
  return (
    <div className="pointer-carousel">
      <button className="carousel-button" onClick={goToPrevious}>
        <RiArrowLeftSLine />
      </button>
      <div className="carouselDot">
        {images.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${currentIndex === index ? 'actives' : ''}`}
            onClick={() => handleImageClick(index)}
          ></span>
        ))}
      </div>
      <button className="carousel-button" onClick={goToNext}>
        <RiArrowRightSLine />
      </button>
    </div>
  );
};

export default CarouselButtons;
