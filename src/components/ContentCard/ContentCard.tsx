// ContentCard.jsx
import styles from "./ContentCard.module.css"; // the generic layout styles

export default function ContentCard({
  text,
  imageSrc,
  alt = "",
  orientation,
  textClass = "",
  imageClass = "",
}) {
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
