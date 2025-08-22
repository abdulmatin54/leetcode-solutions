function insertionSortRecursive(arr, i, n) {
    // Base Case: i == n.
    if (i === n) {
        return;
    }

    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
        // Swap elements
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
        j--;
    }

    insertionSortRecursive(arr, i + 1, n);
}

// Main part of the program
let arr = [13, 46, 24, 52, 20, 9];
let n = arr.length;

console.log("Before Using Insertion Sort:");
console.log(arr.join(" "));

insertionSortRecursive(arr, 0, n);

console.log("After Using Insertion Sort:");
console.log(arr.join(" "));