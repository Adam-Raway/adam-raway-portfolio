'use client';

import React from "react";
import styles from "./Slideshow.module.css";
import Button from "components/Button/Button";

interface SlideshowProps {
  slides: React.ReactElement[];

  leftButtonLabel?: string;
  rightButtonLabel?: string;
  leftButtonSrc?: string;
  rightButtonSrc?: string;

  className?: string;
}

export default function Slideshow({
  slides,
  leftButtonLabel = "<",
  rightButtonLabel = ">",
  leftButtonSrc,
  rightButtonSrc,
  className = ""
}: SlideshowProps) {

  if (slides.length === 0) {
    return <p className={styles.empty}>No slides to display.</p>;
  }

  const [slideIndex, setSlideIndex] = React.useState(0);
  const slideshowLength = slides.length;

  function handleClick(increment: number) {
    let newIndex: number = slideIndex + increment;

    if (newIndex < 0) {
      newIndex = slideshowLength - 1;
    } else if (newIndex >= slideshowLength) {
      newIndex = 0;
    }

    setSlideIndex(newIndex);
  }

  return (
    <section className={`${styles.slideshow} ${className}`}>

      <Button
        label={leftButtonLabel}
        imageSrc={leftButtonSrc}
        alt="Previous slide button"
        aria="Previous slide button"
        onClick={() => handleClick(-1)}
      />

      <div className={styles.slide}>{slides[slideIndex]}</div>

      <Button
        label={rightButtonLabel}
        imageSrc={rightButtonSrc}
        alt="Button to cycle the slideshow right."
        aria="Previous slide button"
        onClick={() => handleClick(1)}
      />

    </section>
  );
}