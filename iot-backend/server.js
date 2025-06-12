import express from 'express';
import cors from 'cors';
import sensorRoutes from './routes/sensors.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use('/api', sensorRoutes);

app.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});
