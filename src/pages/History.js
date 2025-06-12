import React, { useEffect, useState } from 'react';
import { fetchHistoricalData } from '../services/api';
import ChartView from '../components/ChartView';

const sensorsList = ['temperature', 'humidity', 'co2', 'light'];

export default function History() {
  const [sensor, setSensor] = useState(sensorsList[0]);
  const [range, setRange] = useState('24h');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchHistoricalData(sensor, range)
      .then(res => setData(res.data))
      .catch(console.error);
  }, [sensor, range]);

  return (
    <div>
      <h2>Historia: {sensor}</h2>
      <div style={{ marginBottom: 12 }}>
        <select value={sensor} onChange={e => setSensor(e.target.value)}>
          {sensorsList.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <select value={range} onChange={e => setRange(e.target.value)} style={{ marginLeft: 8 }}>
          {['24h','7d','30d'].map(r => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>
      <ChartView label={sensor} dataPoints={data} />
    </div>
  );
}
