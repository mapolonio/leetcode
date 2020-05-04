/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (heights) => {
  let maxVolume = 0;

  for (let i = 0, j = heights.length - 1; i < j; ) {
    const h1 = heights[i];
    const h2 = heights[j];
    const p1 = [i, h1];
    const p2 = [j, h2];

    const vol = getVolume(p1, p2);

    if (vol > maxVolume) {
      maxVolume = vol;
    }

    if (h1 <= h2) {
      i += 1;
    } else {
      j -= 1;
    }
  }

  return maxVolume;
};

const getVolume = (p1, p2) => {
  const [x1, y1] = p1;
  const [x2, y2] = p2;

  const width = Math.abs(x2 - x1);
  const height = Math.min(y2, y1);

  return width * height;
};
