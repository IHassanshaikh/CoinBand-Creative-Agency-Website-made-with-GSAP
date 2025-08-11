"use client";
import React from "react";
import styles from "../styles/MarketingCard.module.css";

const MarketingCard = ({ image, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.cardImage} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <button href="#" className={styles.learnMore}>
          Learn more...
        </button>
      </div>
    </div>
  );
};

export default MarketingCard;