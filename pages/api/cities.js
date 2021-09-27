import { server } from '../../config/index';

export default async function handler(req, res) {
  try {
    const regex = new RegExp(req.query.q, 'i');
    const limit = req.query.limit;

    const citiesData = await fetch(`${server}/data/cities.json`);
    if (!citiesData.ok) {
      throw new Error(`Request failed with status code ${citiesData.status}`);
    }
    let cities = await citiesData.json();
    
    cities = cities.cities.filter(city => regex.test(city.label)).slice(0, limit);
    if (cities[limit - 1] !== undefined) {
      cities.push({
        value: -1,
        label: '...',
        disabled: true,
      });
    }

    res.status(200).json(cities);
  } catch (error) {
    console.log('/api/cities: ' + error.message);
    res.status(500).send();
  }
}
