// Online C++ compiler to run C++ program online
// compare original by reverse

#include <iostream>
using namespace std;
int main() {
    // Write C++ code here
    int count;
    cin>>count;
    int arr[count];
    int comp[count];
    for(int i =0;i<count;i++){
        cin>>arr[i];
    }
    
    
    for(int j=sizeof(arr)/sizeof(int)-1 ;j>=0;j--){
     comp[j] = arr[sizeof(arr)/sizeof(int)-1 - j];
        
    }
    bool equal = true;
    for(int k = 0;k<=sizeof(arr)/sizeof(int) -1;k++){
        
        if(arr[k] != comp[k]){ 
            equal = false;
            break};
    }
    
    if(equal) cout<<"YES";
    if(!equal) cout<<"NO";
    
    return 0;
}