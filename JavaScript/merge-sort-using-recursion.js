function merge(arr, s, e) {
  let mid = Math.floor((s + e) / 2);

  // Lengths of left & right parts
  let len1 = mid - s + 1;
  let len2 = e - mid;

  // Create temp arrays
  let first = [];
  let second = [];

  // Copy left part
  for (let i = 0; i < len1; i++) {
    first[i] = arr[s + i];
  }

  // Copy right part
  for (let i = 0; i < len2; i++) {
    second[i] = arr[mid + 1 + i];
  }

  // Merge two sorted arrays
  let index1 = 0;
  let index2 = 0;
  let mainArrayIndex = s;

  while (index1 < len1 && index2 < len2) {
    if (first[index1] < second[index2]) {
      arr[mainArrayIndex++] = first[index1++];
    } else {
      arr[mainArrayIndex++] = second[index2++];
    }
  }

  // Copy leftovers
  while (index1 < len1) {
    arr[mainArrayIndex++] = first[index1++];
  }

  while (index2 < len2) {
    arr[mainArrayIndex++] = second[index2++];
  }
}

function mergeSort(arr, s, e) {
  if (s >= e) return; // base case

  let mid = Math.floor((s + e) / 2);

  // Sort left half
  mergeSort(arr, s, mid);

  // Sort right half
  mergeSort(arr, mid + 1, e);

  // Merge both halves
  merge(arr, s, e);
}

// Example usage:
let arr = [3, 7, 0, 1, 5, 8, 3, 2, 34, 66, 87, 23, 12, 12, 12];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
