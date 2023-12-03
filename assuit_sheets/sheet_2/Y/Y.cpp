// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;


int main() {
    // Write C++ code here
    int num;
    cin>>num;
    if(num == 0 || num == 1){
        cout<<0;
        return 0;
    }
    int first = 0 , second=1;
    cout<<first<<" "<<second<<" ";
    for(int i = 2;i < num ; i++){
        int sum = first + second;
        first = second;
        second = sum;
        cout<<sum<<" ";
    }

    return 0;
}