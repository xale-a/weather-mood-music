export function windSpeedDescMps(speed) {
  if (typeof speed != 'number') {
    return;
  }

  const value = speed.toFixed(1);
  if (value < 0.5) {
    return 'Calm';
  } else if (value <= 1.5) {
    return 'Light air';
  } else if (value <= 3.3) {
    return 'Light breeze';
  } else if (value <= 5.5) {
    return 'Gentle breeze';
  } else if (value <= 7.9) {
    return 'Moderate breeze';
  } else if (value <= 10.7) {
    return 'Fresh breeze';
  } else if (value <= 13.8) {
    return 'Strong breeze';
  } else if (value <= 17.1) {
    return 'High wind, near gale';
  } else if (value <= 20.7) {
    return 'Gale';
  } else if (value <= 24.4) {
    return 'Strong gale';
  } else if (value <= 28.4) {
    return 'Storm';
  } else if (value <= 32.6) {
    return 'Violent storm';
  } else {
    return 'Hurricane';
  }
}

export function windDirectionDesc(deg) {
  if (typeof deg != 'number') {
    return;
  }

  let value = Math.floor((deg / 22.5) + 0.5);
  let directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  return directions[(value % 16)];
}
