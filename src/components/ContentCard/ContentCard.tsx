// ContentCard.tsx
import styles from "./ContentCard.module.css";
import React from "react";

interface ContentCardProps {
  text: React.ReactNode;
  imageSrc?: string;
  alt?: string;
  orientation: 0 | 1;
  textClass?: string;
  imageClass?: string;
}

export default function ContentCard({
  text,
  imageSrc,
  alt = "",
  orientation,
  textClass = "",
  imageClass = "",
}: ContentCardProps) {
  const directionClass = orientation === 1 ? styles["row-reverse"] : styles["row"];
  const cardClass = `${styles.card} ${directionClass}`;

  return (
    <section className={cardClass}>
      <p className={textClass}>{text}</p>
      {imageSrc && (
        <img
          className={imageClass}
          src={imageSrc}
          alt={alt}
        />
      )}
    </section>
  );
}
