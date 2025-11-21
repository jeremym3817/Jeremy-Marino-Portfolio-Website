import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import styles from "../styles/Slideshow.module.css";

interface Props {
  images: string[];
}

export default function Slideshow({ images }: Props) {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () =>
    setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <>
      {/* Inline Slideshow */}
      <div className={styles.slideshow}>
        <button className={styles.arrow} onClick={prev}>
          <ChevronLeft />
        </button>

      <div className={styles.slideFrame}>
        <img
          src={images[index]}
          alt="project screenshot"
          className={styles.image}
          onClick={() => setIsOpen(true)}
        />
      </div>


        <button className={styles.arrow} onClick={next}>
          <ChevronRight />
        </button>
      </div>

      {/* Fullscreen Lightbox */}
      {isOpen && (
        <div
          className={styles.lightboxOverlay}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <button className={styles.close} onClick={() => setIsOpen(false)}>
            <X size={32} />
          </button>

          <button className={`${styles.lightboxArrow} ${styles.lightboxArrowLeft}`} onClick={prev}>
            <ChevronLeft size={40} />
          </button>

          <img src={images[index]} alt="fullscreen view" className={styles.lightboxImage} />

          <button className={`${styles.lightboxArrow} ${styles.lightboxArrowRight}`} onClick={next}>
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </>
  );
}
