#include <iostream>
#include <string>

using namespace std;

int main() {
    int count;
    cin>>count;
    
    int arr[count];

    
    string input;
    cin >> input;

    // Ensure the input length matches the array size
    if (input.length() != count) {
       cout << "Invalid input";
        return 0;  
    }
    // Convert characters to integers
    for (int i = 0; i < count; ++i) {
        arr[i] = input[i] - '0';
    }

    // Calculate the sum of the elements
    int sum = 0;
    for (int i = 0; i < count; ++i) {
        sum += arr[i];
    }

    // Display the sum
   cout << sum;
    
    return 0;
}
