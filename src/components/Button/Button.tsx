'use client';

import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  label?: string;
  imageSrc?: string;
  alt?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

export default function Button({
  label,
  imageSrc,
  alt = "",
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {imageSrc ? (
        <img src={imageSrc} alt={alt} className={styles.image} />
      ) : (
        label
      )}
    </button>
  );
}
