// User function Template for C++

class Solution {
public:
    int largest(int arr[], int n) {
        int maxVal = arr[0];   // start with the first element

        for (int i = 1; i < n; i++) {
            if (arr[i] > maxVal) {
                maxVal = arr[i];
            }
        }

        return maxVal;
    }
};
