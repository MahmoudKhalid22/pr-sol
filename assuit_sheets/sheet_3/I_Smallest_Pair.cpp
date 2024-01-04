#include <iostream>
using namespace std;

int main() {
    int test_cases;
    cin>>test_cases;
    while(test_cases--){
        int count;
        cin>>count;
        int arr[count];
        for(int i = 0; i<count;i++){
            cin>>arr[i];
        }
        int min = arr[0] + arr[1] + 2 - 1;
        for(int i=1;i<=count;i++){

            for(int j = i+1;j<=count;j++){
                if(arr[i-1] + arr[j-1] + j - i < min){
                    min = arr[i-1] + arr[j-1] + j - i;
                }
            }
        }
        cout<<min<<endl;
    }
    return 0;
}