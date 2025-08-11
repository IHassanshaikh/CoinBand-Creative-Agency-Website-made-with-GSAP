import React from 'react';
import styles from '../styles/Casestudy.module.css';
import green from '../assets/svg/greendiamond.svg';  // Icon for tags

const CardComponent = ({ img, title, description, tags, bgImage, buttonText }) => {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className={styles.cardContent}>
        {/* Ensure img is passed correctly */}
        <img className={styles.cardicons} src={img} alt="icon" />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <div key={index} className={styles.tagItem}>
              <img className={styles.tagIcon} src={green} alt="icon" />
              <span className={styles.tag}>{tag}</span>
            </div>
          ))}
        </div>
        <button className={styles.button}>{buttonText}</button>
      </div>
    </div>
  );
};

export default CardComponent;
