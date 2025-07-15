// ContentCard.jsx
import styles from "./HobbyCard.module.css"; // the generic layout styles
import ContentCard from "components/ContentCard/ContentCard";

export default function HobbyCard({
  hobbyName,
  text,
  imageSrc,
  alt = "",
  orientation,
  textClass = "",
  imageClass = "",
}) {

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
