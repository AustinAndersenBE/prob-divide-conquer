function findPivot(arr, left, right) {
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] > arr[mid + 1]) return mid;
        else if (arr[left] <= arr[mid]) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}


function binarySearch(arr, target, left, right) {
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}


function findRotatedIndex(arr, target) {
    const n = arr.length;
    const pivot = findPivot(arr, 0, n - 1);

    // if no pivot point is found, array is just a normal sorted array
    if (pivot === -1) return binarySearch(arr, target, 0, n - 1);

    if (arr[pivot] === target) return pivot;

    // perform binary search on left side 
    if (arr[0] <= target) return binarySearch(arr, target, 0, pivot - 1);

    //binary search on right side
    return binarySearch(arr, target, pivot + 1, n - 1);
}

module.exports = findRotatedIndex