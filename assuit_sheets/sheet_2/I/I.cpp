#include <iostream>
#include <string>
using namespace std;

bool isPalindrome(string s) {
    int n = s.length();
    for (int i = 0; i < n / 2; i++) {
        if (s[i] != s[n - i - 1]) {
            return false;
        }
    }
    return true;
}

int main() {
    string s;
  
    cin >> s;

    string reversed;
    bool leadingZero = true;
    for (int i = s.length() - 1; i >= 0; i--) {
        if (s[i] != '0') {
            leadingZero = false;
        }
        if (!leadingZero) {
            reversed.push_back(s[i]);
        }
    }

    cout << reversed << endl;
    if (isPalindrome(s)) {
        cout << "YES" << endl;
    } else {
        cout << "NO" << endl;
    }

    return 0;
}
