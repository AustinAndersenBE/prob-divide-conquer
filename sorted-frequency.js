function sortedFrequency(arr, target) {

  function findFirstOccurrence(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let firstOccurrence = -1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === target) {
        firstOccurrence = mid;
        end = mid - 1; 
      } else if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return firstOccurrence;
  }

  function findLastOccurrence(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let lastOccurrence = -1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === target) {
        lastOccurrence = mid;
        start = mid + 1; 
      } else if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return lastOccurrence;
  }

  const first = findFirstOccurrence(arr, target);
  const last = findLastOccurrence(arr, target);

  if (first === -1 || last === -1) return -1;

  return last - first + 1;
  
}

module.exports = sortedFrequency