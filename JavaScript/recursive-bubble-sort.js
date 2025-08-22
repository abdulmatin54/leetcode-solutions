function bubbleSort(arr, n) {
    // Base Case: range == 1
    if (n === 1) return;

    let didSwap = false;

    for (let j = 0; j <= n - 2; j++) {
        if (arr[j] > arr[j + 1]) {
            // swap
            let temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
            didSwap = true;
        }
    }

    // if no swapping happens
    if (!didSwap) return;

    // Range reduced after recursion
    bubbleSort(arr, n - 1);
}

// Main
let arr = [13, 46, 24, 52, 20, 9];
let n = arr.length;

console.log("Before Using Bubble Sort:");
console.log(arr.join(" "));

bubbleSort(arr, n);

console.log("After Using Bubble Sort:");
console.log(arr.join(" "));
