// ContentCard.jsx
import styles from "./HobbyCard.module.css"; // the generic layout styles
import ContentCard from "components/ContentCard/ContentCard";
import React from "react";

interface HobbyCardProps {
  hobbyName: string;
  text: React.ReactNode;
  imageSrc?: string;       // optional
  alt?: string;            // optional, defaulted
  orientation: 0 | 1;
  textClass?: string;      // optional
  imageClass?: string;     // optional
}

export default function HobbyCard({
  hobbyName,
  text,
  imageSrc,
  alt = "",
  orientation,
  textClass = "",
  imageClass = "",
}: HobbyCardProps) {

  return (
    <section className={styles.card}>
      <h2>{hobbyName}</h2>
      <ContentCard
          text={text}
          imageSrc={imageSrc}
          alt={alt}
          orientation={orientation}
          textClass={textClass}
          imageClass={styles.img}
        />
    </section>
  );
}
