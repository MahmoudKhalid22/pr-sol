#include <iostream>
#include <algorithm>

using namespace std;


int main()
{
    int number;
    cin>>number;
    int arr1[number],arr2[number];


    for(int i = 0; i< number;i++){
        cin>>arr1[i];
    }
    for(int i = 0; i< number;i++){
        cin>>arr2[i];    
    }
    bool isP = true;
    sort(arr1,arr1+number);
    sort(arr2,arr2+number);
    for(int i = 0;i<number;i++){
        bool found = false;
        if(arr1[i] == arr2[i]){
            found = true;
        }
    if(!found) isP = false;
    }

if(isP) cout<<"yes";
if(!isP) cout<<"no";

    return 0;
}
