"use client";
import { useEffect } from "react";
import styles from "./style.module.css";

export default function Button() {
  useEffect(() => {
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");
    if (menuBtn && menu) {
      menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle(styles.open);
        menu.classList.toggle("hidden");
        menu.classList.toggle("flex");
      });
    }
    return () => {
      if (menuBtn && menu) {
        menuBtn.removeEventListener("click", () => {
          menuBtn.classList.toggle(styles.open);
          menu.classList.toggle("hidden");
          menu.classList.toggle("flex");
        });
      }
    };
  }, []);
  return (
    <button
      id="menu-btn"
      type="button"
      className={`z-40 block md:hidden focus:outline-none ${styles.hamburger}`}
    >
      <span className={styles.hamtop}></span>
      <span className={styles.hammiddle}></span>
      <span className={styles.hambottom}></span>
    </button>
  );
}
