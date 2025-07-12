import Link from "next/link";
import styles from "./Endcard.module.css"

export default function Endcard() {
    return (
        <footer className={styles.endcard}>
            <p>© 2025 Adam Raway. All rights reserved.</p>
            <nav className={styles.externalLinks}>
            <a href="https://github.com/Adam-Raway" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/adam-raway" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:adamraway@gmail.com">Email</a>
            </nav>
        </footer>
    );
}