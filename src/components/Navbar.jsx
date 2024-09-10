import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const tl = useRef(gsap.timeline());

  useGSAP(() => {
    tl.current.to(".full", {
      right: 0,
      duration: 0.8,
    });
    tl.current.from(".full h3", {
      x: 150,
      duration: 0.7,
      stagger: 0.3,
      opacity: 0,
      ease: "ease-in",
    });
    tl.current.from(".full i", {
      opacity: 0,
    });
    tl.current.pause();
  });

  const openMenu = () => {
    tl.current.play();
  };

  const closeMenu = () => {
    tl.current.reverse();
  };

  return (
    <>
      <nav>
        <Link to="/">
          <h1 className={styles.logo}>Retro Rides</h1>
        </Link>
        <i
          className="ri-menu-3-fill"
          onClick={openMenu}
          style={{ color: "black" }}
        ></i>
      </nav>
      <div className={`${styles.full} full`}>
        <Link to="/about" onClick={closeMenu}>
          <h3>About</h3>
        </Link>
        <Link to="/" onClick={closeMenu}>
          <h3>News</h3>
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          <h3>Contact Us</h3>
        </Link>
        <i className="ri-close-circle-fill" onClick={closeMenu}></i>
      </div>
    </>
  );
}

export default Navbar;
