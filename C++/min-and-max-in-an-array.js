#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    pair<int, int> getMinMax(vector<int>& arr) {
        int mx = INT_MIN;
        int mn = INT_MAX;

        for (int i = 0; i < arr.size(); i++) {
            if (arr[i] > mx) {
                mx = arr[i];
            }
            if (arr[i] < mn) {
                mn = arr[i];
            }
        }

        return {mn, mx}; // return as (min, max)
    }
};

int main() {
    Solution sol;
    vector<int> arr = {3, 1, 9, 2, 7};

    pair<int, int> ans = sol.getMinMax(arr);
    cout << "Min: " << ans.first << ", Max: " << ans.second << endl;

    return 0;
}
