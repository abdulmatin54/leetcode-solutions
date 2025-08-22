function insertionSort(arr) {
    let n = arr.length;

    // Start from the 2nd element (index 1) and go till the end
    for (let i = 1; i < n; i++) {
        let temp = arr[i];   // store the current element we want to insert
        let j = i - 1;       // start comparing with the previous element

        // Shift all elements bigger than temp to the right
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j]; // shift right
            j--;                 // move left
        }

        // Place temp in the correct empty spot
        arr[j + 1] = temp;
    }

    return arr; // return the sorted array
}