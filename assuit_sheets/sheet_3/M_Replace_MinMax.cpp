#include <iostream>
using namespace std;

int main() {

    int count;
    cin>>count;
    int arr[count];

    for(int i = 0;i<count;i++){
        cin>>arr[i];
    }
    int minIndex = 0;
    int maxIndex = 0;
    for(int i = 0; i<count;i++){
        if(arr[i] < arr[minIndex]) minIndex = i;
        if(arr[i] > arr[maxIndex]) maxIndex = i;
    }
    int temp = arr[minIndex];
    arr[minIndex] = arr[maxIndex];
    arr[maxIndex] = temp;
    for(int i = 0;i<count;i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}