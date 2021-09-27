export function pickRandomUnique(arr, refArr, n) {
  // TODO: logic to prevent infinite loop
  let result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len)
    throw new RangeError("pickRandomUnique: more elements taken than available");
  while (n--) {
    let x = Math.floor(Math.random() * len);
    // ! Infinite loop possible
    if (refArr.indexOf(arr[x]) !== -1) {
      n++;
      continue;
    }
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

export function shuffle(arr) {
  let result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
