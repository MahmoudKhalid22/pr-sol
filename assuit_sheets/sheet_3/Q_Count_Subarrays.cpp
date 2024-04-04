#include <iostream>
using namespace std;

int main() {


    int test_cases;
    cin>>test_cases;

    while(test_cases--){
        int count;
        cin>>count;
        int arr[count];
        int ctr = 0;
        for(int i = 0;i < count;i++){
            cin>>arr[i];
        }
        for(int i=0;i<count;i++){
            ctr++;
            for(int j = i+1;j < count;j++){
                if(arr[j]>= arr[j-1]){
                    ctr++;
                }else{
                    break;
                }
            }
        }
    cout<<ctr<<endl;
    }


    return 0;
}