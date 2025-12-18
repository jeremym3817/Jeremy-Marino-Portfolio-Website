import { useState } from "react";
import { Github, Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jeremym3817@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // hide after 2 seconds
  };
  return (
    <header className={styles.header}>
      {/* HERO SECTION */}
      <div className={styles.hero}>
        {/* Profile Picture */}
        <motion.img
          src="./screenshots/Marino_Jeremy.jpg" 
          alt="Jeremy Marino"
          className={styles.profilePic}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Bio + Buttons */}
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
              href="https://github.com/jeremym3817"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconButton}
            >
              <Github size={18} /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/jeremygmarino/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconButton}
            >
              <Linkedin size={18} /> LinkedIn
            </a>

            {/* Email button with clipboard */}
            <div className="relative inline-block">
              <button
                onClick={handleCopyEmail}
                className={styles.iconButton}
              >
                <Mail size={18} /> Email
              </button>

              {copied && (
                <span className={styles.copiedTooltip}>Copied!</span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
