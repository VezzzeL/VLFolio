import React from "react";

import Planet from "./PlanetImage"
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Volodymyr</h1>
        <p className={styles.description}>
          Full Stack Developer skilled in Java and React. I craft user-friendly
          web applications that balance functionality with exceptional user
          experiences.
        </p>
        <a href="mailto:lusakvm@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <Planet className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.topBlur} />
    </section>
  );
};
