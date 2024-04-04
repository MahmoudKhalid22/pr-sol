#include <iostream>

using namespace std;



int main() {
    int arr1,arr2;
    cin>>arr1>>arr2;

    int arr2D[arr1][arr2];
    int max;
    int min;
    if(arr1 >= arr2){
        max = arr1;
        min = arr2;
    }else{
        max = arr2;
        min = arr1;
    }

    for(int i =0;i<min;i++){
        for(int j = 0;j<max;j++){
           cin>>arr2D[i][j];
        }
    }
 
    int x;
    cin>>x;
    bool found = false;
     for(int i =0;i<min;i++){
        for(int j = 0;j<max;j++){
           if(x == arr2D[i][j]) {
            found = true;
            break;
            }
        }

        if(found) {
            break;
            }
        
    }

    if(found){
        cout<<"will not take number";
    }else{
        cout<<"will take number";
    }

    return 0;
}