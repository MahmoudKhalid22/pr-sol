#include <iostream>
#include <string>

using namespace std;

 int main(int argc, char const *argv[])
 {
    /* code */
    string s;
    cin>>s;

    string r;
    bool leadingZero = true;
    for (int i = s.length() -1 ; i > -1; i--)
    {
        if(s[i] != '0'){
            leadingZero = false;
        }
        if(!leadingZero){
          r.push_back(s[i]);
        }          
    }  
    cout<<r;
    
    return 0;
 }
 