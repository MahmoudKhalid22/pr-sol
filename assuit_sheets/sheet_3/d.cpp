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
        if(nums[j] <= 10) cout<<"A[" << j << "]" << " = " << nums[j]<<endl;
    }
    return 0;
}