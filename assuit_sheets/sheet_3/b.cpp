#include <iostream>

using namespace std;

int main() {
    
    int count;
    int x;

    // Input the size of the array
    cin >> count;

  

    int nums[count];

    // Input array elements
    for(int i = 0; i < count; i++) {
        cin >> nums[i];
    }

    // Input the value to search for
    cin >> x;

    bool found = false;
    int firstOccurrence = -1;

    // Search for the value in the array
    for (int i = 0; i < count; i++) {
        if (x == nums[i]) {
            firstOccurrence = i;
            found = true;
            break;
        }
    }

    // Print the result based on whether the value is found or not
    if (found) {
       cout << firstOccurrence;
    } else {
        cout << "-1";
    }

    return 0;
}
