function partition(arr, s, e) {
    let pivot = arr[s];  // choose first element as pivot
    let cnt = 0;

    // count how many elements are <= pivot
    for (let i = s + 1; i <= e; i++) {
        if (arr[i] <= pivot) {
            cnt++;
        }
    }

    // place pivot at correct position
    let pivotIndex = s + cnt;
    [arr[pivotIndex], arr[s]] = [arr[s], arr[pivotIndex]];

    // fix left and right part
    let i = s, j = e;
    while (i < pivotIndex && j > pivotIndex) {
        while (arr[i] <= pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i < pivotIndex && j > pivotIndex) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }

    return pivotIndex;
}

function quickSort(arr, s, e) {
    if (s >= e) return;

    let p = partition(arr, s, e);

    // sort left and right
    quickSort(arr, s, p - 1);
    quickSort(arr, p + 1, e);
}

// Example
let arr = [2, 4, 1, 6, 9, 9, 9, 9, 9, 9];
quickSort(arr, 0, arr.length - 1);
console.log(arr); // [1, 2, 4, 6, 9, 9, 9, 9, 9, 9]