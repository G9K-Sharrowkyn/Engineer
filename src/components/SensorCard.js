import React from 'react';
import styles from './SensorCard.module.css';

const SensorCard = ({ title, value, unit, icon, alert }) => (
  <div className={`${styles.card} ${alert ? styles.alert : ''}`}>
    <div className={styles.icon}>{icon}</div>
    <div className={styles.info}>
      <h4>{title}</h4>
      <p>{value} {unit}</p>
    </div>
  </div>
);

export default SensorCard;