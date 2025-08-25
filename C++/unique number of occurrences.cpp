#include <vector>
#include <algorithm> // Required for std::sort

class Solution {
public:
    bool uniqueOccurrences(std::vector<int>& arr) {
        // Sort the input array to group identical elements
        std::sort(arr.begin(), arr.end());

        std::vector<int> v; // To store the counts of occurrences

        // Iterate through the sorted array to count occurrences
        for (int i = 0; i < arr.size(); ++i) {
            int cnt = 1; // Initialize count for the current element
            // Count consecutive occurrences of the current element
            while (i + 1 < arr.size() && arr[i] == arr[i + 1]) {
                cnt++;
                i++;
            }
            v.push_back(cnt); // Add the count to the vector v
        }

        // Sort the vector of counts
        std::sort(v.begin(), v.end());

        // Check for duplicate counts
        for (int i = 1; i < v.size(); ++i) {
            if (v[i] == v[i - 1]) {
                return false; // Found duplicate counts, so return false
            }
        }

        return true; // All counts are unique
    }
};