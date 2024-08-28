import React, {useState} from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const NavBar = () => {
    return <nav className = {styles.navbar}>
        <><a className={styles.title} href="/">Portifólio</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={getImageUrl()}/>
            <ul className={styles.menuItems}>
                <li>
                    <a href="#about">Sobre</a>
                </li>
                <li>
                    <a href="#experience">Experiência</a>
                </li>
                <li>
                    <a href="#project">Projetos</a>
                </li>
                <li>
                    <a href="#contact">Contato</a>
                </li>
            </ul>
        </div></>
    </nav>
}