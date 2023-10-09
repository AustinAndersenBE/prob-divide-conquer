function countZeroes(arr) {
  let low = 0;
  let high = arr.length - 1;
  let firstZeroIndex = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === 0) {
      firstZeroIndex = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  if (firstZeroIndex === -1) return 0;

  return arr.length - firstZeroIndex;
}

module.exports = countZeroes