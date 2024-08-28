import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Oi, eu sou Bruna!</h1>
                <p className={styles.description}>
                    Sou uma desenvolvedora Front-end com 2 anos de experiência em React, Angular e NodeJS. Entre em contato comigo se quiser saber mais!
                </p>
                <a href="mailto:brunaroberta1290@gmail.com" className={styles.contactBtn}>Saber mais</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur}></div>
          
        </section>
    );
};
