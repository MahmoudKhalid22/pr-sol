// Online C++ compiler to run C++ program online
#include <iostream>
#include <string>
using namespace std;

int Sum(int a, int b){
    int maxNum = max(a,b);
    int minNum = min(a,b);
    int sum = 0;
   
   
   for(int i = minNum;i <= maxNum; i++){
       sum += i;
       cout<<  i<<" ";
       
   }
  cout<<"sum ="<<sum<<endl;
  
}


int main() {
    // Write C++ code here
    
   int num1,num2;
   while(true){
   cin>>num1>>num2;
    if(num1 <=0 || num2 <=0){
        break;
    }
   Sum(num1, num2);
   }
   
   
  
 

    return 0;
}