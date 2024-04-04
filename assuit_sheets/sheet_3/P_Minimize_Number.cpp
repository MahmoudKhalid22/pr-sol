#include <iostream>
#include <climits>
using namespace std;

int main() {
    int count;
    cin >> count;
    int arr[count];
    for(int i = 0;i<count;i++){
        cin>> arr[i];
    }
    int ctr = 0, minn=INT_MAX;
    for (int i = 0; i < count; i++) {
        ctr=0;
        while(arr[i] % 2 == 0){
            ctr++;
            arr[i] /=2;
        }
        minn = min(ctr,minn);
    }
    cout<<minn;
    return 0;
}