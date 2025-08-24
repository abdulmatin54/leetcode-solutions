class Solution {
    getMinMax(arr) {
        let max = Number.NEGATIVE_INFINITY;
        let min = Number.POSITIVE_INFINITY;
        
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        
        return [min, max]; // return both
    }
}


// let sol = new Solution();
// console.log(sol.getMinMax([3, 2, 1, 56, 10000, 167])); // Output: [1, 10000]
