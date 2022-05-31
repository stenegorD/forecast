export function getHours(duration) {
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  return (hours < 10) ? `0${hours}:` + '00' : `${hours}:` + '00';
}
