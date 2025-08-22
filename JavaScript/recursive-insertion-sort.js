function insertionSort(arr, i, n) {
    // Base Case: i == n
    if (i === n) return;

    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
        j--;
    }

    insertionSort(arr, i + 1, n);
}

// Main
let arr = [13, 46, 24, 52, 20, 9];
let n = arr.length;

console.log("Before Using Insertion Sort:");
console.log(arr.join(" "));

insertionSort(arr, 0, n);

console.log("After Using Insertion Sort:");
console.log(arr.join(" "));
