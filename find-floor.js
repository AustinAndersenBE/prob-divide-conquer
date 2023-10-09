// find largest element in array that is less than or equal to x

function findFloor(arr, x) {
    let start = 0;
    let end = arr.length - 1;
    let floorValue = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === x) return arr[mid];

        if (arr[mid] < x) { // if mid < x, then we search on the right side of the array
            floorValue = arr[mid];
            start = mid + 1;
        } else { //otherwise search left half
            end = mid - 1;
        }
    }

    return floorValue;
}

module.exports = findFloor