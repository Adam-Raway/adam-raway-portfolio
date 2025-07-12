import Link from "next/link";
import styles from "./Navbar.module.css"

export default function Navbar() {
    return (
        <header className={styles.navbar}>
            <h1 className={styles.name}>
            Adam Raway
            </h1>

            <nav className={styles.navigationMenu}>
            {/*
                The pages of my site will include my resume page, projects & experience page,
                publications page, contact me page. Any other ideas?
            */}
            <Link href="/">About</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/projects_experience">Projects & Experience</Link>
            <Link href="/publications">Publications</Link>
            </nav>
        </header>
    );
}