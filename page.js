"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const myArray = [{}, {}];
  const [isLoggedIn, setIsLoggedIn] = useState(myArray);

  const handleButton = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className={styles.page}>
      <button onClick={handleButton}>
        {isLoggedIn ? "logged in" : "log in please"}
      </button>
    </div>
  );
}