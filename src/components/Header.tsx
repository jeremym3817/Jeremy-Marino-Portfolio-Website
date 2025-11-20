import { Github, Mail } from "lucide-react";
import { motion } from "framer-motion";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* HERO SECTION */}
      <div className={styles.hero}>
        {/* Profile Picture */}
        <motion.img
          src="public/screenshots/Marino_Jeremy.jpg" 
          alt="Jeremy Marino"
          className={styles.profilePic}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Bio + Name */}
        <motion.div
          className={styles.bio}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>Jeremy Marino</h1>
          <p className={styles.subtitle}>
            Computer Science @ Northeastern • Data Science & AI
          </p>

          <div className={styles.links}>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconButton}
            >
              <Github size={18} /> GitHub
            </a>

            <a href="mailto:your.email@example.com" className={styles.iconButton}>
              <Mail size={18} /> Email
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
