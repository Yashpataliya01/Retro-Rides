import React, { useRef, useState, useEffect } from "react";
import styles from "./Canvas.module.css";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Canvas() {
  const canvasRef = useRef(null);
  const location = useLocation();
  const [frames, setFrames] = useState({
    currentidx: 0,
    totalidx: 131,
  });
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (location.pathname === "/") {
      preloader();
      window.addEventListener("resize", handleResize);
      handleResize();
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (images.length > 0 && location.pathname === "/") {
      loadImage(frames.currentidx);
      startAnimation();
    }
  }, [images, frames.currentidx, location.pathname]);

  function preloader() {
    let loadedImages = [];
    let count = 0;

    for (let i = 1; i <= frames.totalidx; i++) {
      const imgUrl = `/vidimages/frame_${i.toString().padStart(4, "0")}.jpeg`;
      const img = new Image();
      img.src = imgUrl;
      img.onload = () => {
        count++;
        if (count === frames.totalidx) {
          setImages(loadedImages);
        }
      };
      img.onerror = () => {
        console.error(`Failed to load image: ${imgUrl}`);
      };
      loadedImages.push(img);
    }
  }

  const loadImage = (idx) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = images[idx];

    if (!ctx || !img) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const scaleX = canvas.width / img.width;
    const scaleY = canvas.height / img.height;
    const scale = Math.max(scaleX, scaleY);
    const newWidth = img.width * scale;
    const newHeight = img.height * scale;
    const offsetX = (canvas.width - newWidth) / 2 + 50;
    const offsetY = (canvas.height - newHeight) / 2;

    ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);
  };

  function startAnimation() {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.canvasContainer}`,
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        },
      })
      .to(frames, {
        currentidx: frames.totalidx - 1,
        onUpdate: () => {
          loadImage(Math.floor(frames.currentidx));
        },
      });
  }

  const handleResize = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      loadImage(frames.currentidx);
    }
  };

  return (
    <div className={styles.canvasContainer}>
      <div className={styles.canvasWrapper}>
        <canvas ref={canvasRef} className={styles.canvas}></canvas>
      </div>
    </div>
  );
}

export default Canvas;
