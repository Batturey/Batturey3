"use client";

import styles from "./page.module.css";
import { useState } from "react";
import SayHi from "./about/hi";
import ButtonComp from "@/components/buttonComp";

export default function Home() {
  const myArray = [{ name: "bat" }, { name: "bold" }];
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [count, setCount] = useState(0);

  const handleButton = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleClick = (name) => {
    alert("Button clicked " + name);
  };

  const handleCount = () => {
    setCount(count + 1);
    console.log(count, "count");
  };

  return (
    <div className={styles.page}>
      <button onClick={handleCount}>{count} times</button>

      <button onClick={handleButton}>
        {isLoggedIn ? "logged in" : "log in please"}
      </button>
      {myArray.map((item) => (
        <SayHi title={item.name} />
      ))}
      {myArray.map((item) => (
        <ButtonComp
          onClick={() => handleClick(item.name)}
          title={"its " + item.name}
        />
      ))}
    </div>
  );
}
