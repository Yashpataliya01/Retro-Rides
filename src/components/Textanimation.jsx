import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Textanimation.module.css";

function Textanimation() {
  const animationRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const handleWheel = (dets) => {
        if (dets.deltaY > 0) {
          gsap.to(`.${styles.marque}`, {
            transform: "translateX(-200%)",
            repeat: -1,
            duration: 3,
            ease: "none",
          });
          gsap.to(`.${styles.imgs}`, {
            rotate: 180,
          });
        } else {
          gsap.to(`.${styles.marque}`, {
            transform: "translateX(0%)",
            repeat: -1,
            duration: 4,
            ease: "none",
          });
          gsap.to(`.${styles.imgs}`, {
            rotate: 0,
          });
        }
      };

      window.addEventListener("wheel", handleWheel);

      return () => {
        window.removeEventListener("wheel", handleWheel);
      };
    }, animationRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id={styles.textanimation} ref={animationRef}>
      <div className={styles.marque}>
        <h1>THRIVE BEYOND LIMITS</h1>
        <img
          src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
          alt="arrow"
          className={styles.imgs}
        />
      </div>
      <div className={styles.marque}>
        <h1>THRIVE BEYOND LIMITS</h1>
        <img
          src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
          alt="arrow"
          className={styles.imgs}
        />
      </div>
      <div className={styles.marque}>
        <h1>THRIVE BEYOND LIMITS</h1>
        <img
          src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
          alt="arrow"
          className={styles.imgs}
        />
      </div>
      <div className={styles.marque}>
        <h1>THRIVE BEYOND LIMITS</h1>
        <img
          src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
          alt="arrow"
          className={styles.imgs}
        />
      </div>
    </div>
  );
}

export default Textanimation;
