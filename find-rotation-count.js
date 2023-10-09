// n is the index of the smallest element in the array.
function findRotationCount(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        // if midpoint is greater than next element, then next element is the smallest
        if (arr[mid] > arr[mid + 1]) return mid + 1;

        // if midpoint is smaller than previous element, then midpoint is the smallest
        if (arr[mid] < arr[mid - 1]) return mid;

        // third condition happens when the midpoint is within a sorted subarray and it is bigger than the previous element but smallest than the next element
        if (arr[start] < arr[mid]) { //this condition assumes left side is sorted so pivot must be on right side
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return 0;
}

module.exports = findRotationCount