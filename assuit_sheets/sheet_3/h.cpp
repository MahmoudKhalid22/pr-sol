// Online C++ compiler to run C++ program online
// Sorting

#include <iostream>
using namespace std;
int main() {
    // Write C++ code here
    int count;
    cin>>count;
    int arr[count];
    
    for(int i = 0;i<count;i++){
        cin>>arr[i];
    }
    
    int temp = 0;
    
    for(int i = 0;i<count;i++){
       for (int j = 0; j < count - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    for (int i = 0; i < count; i++) {
        cout << arr[i] << " ";
    }

    return 0;
}