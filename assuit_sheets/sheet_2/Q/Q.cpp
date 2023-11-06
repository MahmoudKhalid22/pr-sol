// Online C++ compiler to run C++ program online
#include <iostream>
#include <string>
using namespace std;


void digits(string num){
     for(int i = num.length() -1; i>=0; i--){
      cout<<num[i]<<" ";
  }
}

int main() {
    // Write C++ code here
    int count;
    string num;
    cin>>count;
    
    for(int i = 1; i<=count; i++){
        cin>>num; 
        digits(num);
        cout<<endl;
    }
  
 
 

    return 0;
}