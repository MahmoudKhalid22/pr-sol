// Online C++ compiler to run C++ program online
#include <iostream>
#include <string>
using namespace std;

int main() {
    // Write C++ code here
    int count;
    cin>>count;

    for(int i = 1; i<=count;i++){
        for(int x = count-i-1;x>=0;x--){
            cout<<" ";
        }
        for(int j = 0;j<i*2-1;j+=1){
            cout<<'*';
        }
        
        cout<<endl;
    }

    return 0;
}