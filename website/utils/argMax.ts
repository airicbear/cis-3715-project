export default function argMax(array: number[]) {
  if (array.length === 0) {
    return -1;
  }

  let max = array[0];
  let maxIndex = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      maxIndex = i;
      max = array[i];
    }
  }

  return maxIndex;
}
