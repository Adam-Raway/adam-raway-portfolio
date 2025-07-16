'use client';

import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  label?: string;
  imageSrc?: string;
  alt?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  aria?: string;
}

export default function Button({
  label,
  imageSrc,
  alt = "",
  onClick,
  className = "",
  disabled = false,
  aria = "",
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={aria}
    >
      {imageSrc ? (
        <img src={imageSrc} alt={alt} className={styles.image} />
      ) : (
        label
      )}
    </button>
  );
}
