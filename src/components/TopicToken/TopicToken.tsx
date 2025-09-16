"use client";
import React from "react";
import styles from "./TopicToken.module.css";

type TopicTokenProps = {
  text: string;
  color?: string;
};

export default function TopicToken({ text, color = "var(--accent-color)" }: TopicTokenProps) {
  return (
    <span
      className={styles["topic-token"]}
      style={{ borderColor: color }}
    >
      {text}
    </span>
  );
}
