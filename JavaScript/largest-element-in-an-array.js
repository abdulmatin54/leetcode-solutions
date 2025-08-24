class Solution {
    largest(arr, n) {
        let max = Number.NEGATIVE_INFINITY;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }

        return max;
    }
}