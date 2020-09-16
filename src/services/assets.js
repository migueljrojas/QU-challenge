import planet1 from '../assets/planets/1.jpg';
import planet2 from '../assets/planets/2.jpg';
import planet3 from '../assets/planets/3.jpg';
import planet4 from '../assets/planets/4.jpg';
import planet5 from '../assets/planets/5.jpg';
import planet6 from '../assets/planets/6.jpg';
import planet7 from '../assets/planets/7.jpg';
import planet8 from '../assets/planets/8.jpg';
import planet9 from '../assets/planets/9.jpg';
import planet10 from '../assets/planets/10.jpg';

const planetTextures = [
  planet1,
  planet2,
  planet3,
  planet4,
  planet5,
  planet6,
  planet7,
  planet8,
  planet9,
  planet10
];

const matrixInit = [
  1, 0, 0, 0, 0,
  0, 1, 0, 0, 0,
  0, 0, 1, 0, 0,
  0, 0, 0, 1, 0
];

const svgFilterValue = page => matrixInit.map((value, index) => {
  if (page > 1) {
    const factor = (page / 10).toFixed(2);
    const indexOfValueToChange = Math.floor(Math.random() * 10);
    return value !== 1 && (index !== 4 || index !== 9 || index !== 14 || index !== 19) && index === indexOfValueToChange ? (value + (factor * ((index + 1) / 5))) : value;
  }

  return value;
}).join(' ');

const planetAssets = (planets, page) => {
  const assets = planets.map((planet, index) => {
    return {
      texture: planetTextures[index],
      planetName: planet.name,
      filter: svgFilterValue(page)
    }
  });

  return assets;
}

export default planetAssets;