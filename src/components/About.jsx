import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.mainimg}>
        <h1>ABOUT US</h1>
      </div>
      <div className={styles.aboutinfo}>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>
            At [Your Company Name], we are passionate vintage car collectors,
            sellers, and restorers who live and breathe the legacy of classic
            automobiles. Our journey began with a love for timeless vehicles
            that embody the spirit of a bygone era, where craftsmanship and
            design were at the forefront of innovation. We are dedicated to
            preserving these vintage treasures and sharing them with fellow
            enthusiasts and collectors.
            <br />
            <br />
            <br />
            Our offerings span a range of services:
            <br />• Car Collecting and Selling: We curate and sell an exclusive
            selection of vintage cars, each with its own unique history and
            story. Whether you're a seasoned collector or new to the world of
            classic cars, we provide expert guidance to help you find the
            perfect addition to your collection.
            <br />
            <br />
            • Restoration and Garage Services: Our skilled technicians
            specialize in restoring vintage vehicles to their former glory. From
            minor repairs to complete overhauls, we take pride in every detail,
            ensuring each car runs and looks as good as it did in its heyday.
            <br />
            <br />• Road Rallies and Events: We don't just keep our cars in
            garages – we take them to the road! We organize thrilling road
            rallies, allowing vintage car enthusiasts to showcase their classic
            rides, connect with like-minded individuals, and experience the joy
            of driving these remarkable machines.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default About;
