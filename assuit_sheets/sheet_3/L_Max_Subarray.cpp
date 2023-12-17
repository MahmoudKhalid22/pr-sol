#include <iostream>
using namespace std;

int main() {

    int test_cases;
    cin >> test_cases;

    while(test_cases--){
        int count;
        cin>>count;
        int arr[count];
        int ctr = 0;
        for(int i = 0;i < count; i++){
            cin>>arr[i];
        }
        for(int k = 0;k<count;k++){
            cout<<arr[k]<<" ";
        }
        for(int i = 0; i < count; i++)
        {
            int maxi = arr[i];
            for(int j = i+1;j< count;j++){
                maxi = max(maxi, arr[j]);
                cout<<maxi<<" ";
                
            }
        }
            cout<<endl;
    }
    return 0;
}