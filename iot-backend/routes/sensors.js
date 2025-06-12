import express from 'express';
const router = express.Router();

// statyczne dane bieżące
const mockCurrent = [
  { id:'temperature', name:'Temperatura', value:22.5, unit:'°C', threshold:28, icon:'🌡️' },
  { id:'humidity',    name:'Wilgotność',  value:55,   unit:'%', threshold:60, icon:'💧' },
  { id:'co2',         name:'CO₂',         value:800,  unit:'ppm', threshold:1000, icon:'🫁' },
  { id:'light',       name:'Oświetlenie', value:300,  unit:'lux', threshold:500, icon:'💡' }
];

// statyczne dane historyczne (przykład dla wykresu)
function mockHistory(sensor, range) {
  // generujemy ostatnie 24h co 2h
  const now = Date.now();
  const points = [];
  for (let i = 12; i >= 0; i--) {
    points.push({
      time: new Date(now - i * 2 * 3600 * 1000).toISOString(),
      value: mockCurrent.find(s => s.id === sensor)?.value + (Math.random()-0.5)*10
    });
  }
  return points;
}

// Endpoint: /api/current
router.get('/current', (req, res) => {
  res.json(mockCurrent);
});

// Endpoint: /api/history/:sensor?range=24h
router.get('/history/:sensor', (req, res) => {
  const { sensor } = req.params;
  const { range = '24h' } = req.query;
  res.json(mockHistory(sensor, range));
});

export default router;
