// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;

int main() {
    // Write C++ code here
    int count;
    cin>>count;
    int nums[count];
    
    for(int i = 0;i< count;i++){
        cin>>nums[i];
    }
    
    for(int j=0;j<count;j++){
        // cout<<nums[j]<<" ";
        if(nums[j] == 0) cout<<"0 ";
        if(nums[j] > 0) cout<<"1 ";
        if(nums[j] < 0) cout<<"2 ";
    }
    return 0;
}