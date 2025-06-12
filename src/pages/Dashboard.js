import React, { useEffect, useState } from 'react';
import { fetchCurrentValues } from '../services/api';
import SensorCard from '../components/SensorCard';
import styles from './Dashboard.css';

const Dashboard = () => {
  const [sensors, setSensors] = useState([]);

  useEffect(() => {
    fetchCurrentValues()
      .then(res => setSensors(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className={styles.dashboard}>
      {sensors.map(s => (
        <SensorCard
          key={s.id}
          title={s.name}
          value={s.value}
          unit={s.unit}
          icon={s.icon}
          alert={s.value > s.threshold}
        />
      ))}
    </div>
  );
};

export default Dashboard;