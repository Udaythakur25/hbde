import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowContent(true);
    }
  }, [countdown]);

  return (
    <div className={styles.container}>
      {!showContent ? (
        <div className={styles.countdown}>{countdown}</div>
      ) : (
        <div className={styles.message}>
          <h1>🎉 Happy Birthday Priyanka 🎉</h1>
          <div className={styles.hearts}>
            {"❤️💖💕💘💝".repeat(30).split("").map((char, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>{char}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}