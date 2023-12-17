#include <iostream>
#include <cctype>

using namespace std;

int main() {
    int a,b;
    cin>>a>>b;
    string code;
    cin>>code;

    bool right = true;
    
    // you can also use str.length()
    for(int i = 0;i<a; i++){
         if(code[a] != '-') {
            right = false;
            break;
        }
        if (!isdigit(code[i])) {
            right = false;
        }
    }
    for(int i = a+1;i<code.size(); i++){
         if(code[a] != '-') {
            right = false;
            break;
        }
        if (!isdigit(code[i])) {
            right = false;
        }
    }
       
        if(right){
            cout<<"Yes"<<endl;
        }else{
            cout<<"No"<<endl;
        }

    return 0;
}