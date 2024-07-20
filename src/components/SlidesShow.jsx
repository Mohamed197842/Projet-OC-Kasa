import React from "react";
import { useEffect, useState } from "react";

export default function SlidesShow({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fonctions pour naviguer entre les slides
  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? pictures.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === pictures.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="slide-container">
      <button onClick={goToPreviousSlide}>&lt;</button>
      <img src={pictures[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      <button onClick={goToNextSlide}>&gt;</button>
    </div>
  );
}
