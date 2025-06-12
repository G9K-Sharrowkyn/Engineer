import { InfluxDB } from 'influx';

const influx = new InfluxDB({ host: 'localhost', database: 'iot_data', port: 8086 });

async function getCurrentValues() {
  try {
    const result = await influx.query(`
      SELECT LAST(value) FROM temperature, humidity, co2, light
    `);

    // jeśli seria pusta – zwracamy mock
    if (!result.length) {
      return [
        { id:'temperature', name:'Temperatura', value:0, unit:'°C', threshold:28, icon:'🌡️' },
        { id:'humidity',    name:'Wilgotność',  value:0, unit:'%', threshold:60, icon:'💧' },
        { id:'co2',         name:'CO₂',         value:0, unit:'ppm', threshold:1000, icon:'🫁' },
        { id:'light',       name:'Oświetlenie', value:0, unit:'lux', threshold:500, icon:'💡' }
      ];
    }

    // mapowanie wyników normalnie
    return [
      {
        id: 'temperature',
        name: 'Temperatura',
        value: result.find(r => r.measurement === 'temperature')?.last,
        unit: '°C',
        threshold: 28,
        icon: '🌡️'
      },
      /* …inne czujniki… */
    ];
  } catch (err) {
    console.error('Influx error:', err);
    // w razie błędu też zwracamy mock, żeby frontend nie zamarł
    return [
      { id:'temperature', name:'Temperatura', value:0, unit:'°C', threshold:28, icon:'🌡️' },
      { id:'humidity',    name:'Wilgotność',  value:0, unit:'%', threshold:60, icon:'💧' },
      { id:'co2',         name:'CO₂',         value:0, unit:'ppm', threshold:1000, icon:'🫁' },
      { id:'light',       name:'Oświetlenie', value:0, unit:'lux', threshold:500, icon:'💡' }
    ];
  }
}

export default { getCurrentValues, getHistoricalData };
