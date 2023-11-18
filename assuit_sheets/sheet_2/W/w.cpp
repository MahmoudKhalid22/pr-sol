#include <iostream>

using namespace std;

int main() {
    int i, j, rows;

    // Input number of rows from user
    cin >> rows;

    // Print upper part of the pattern
    for(i = 0; i < rows; i++) {
        for(j = 1; j < rows-i; j++) {
            cout << " ";
        }
        for(j = 0; j < 2*i+1; j++) {
            cout << "*";
        }
        cout << endl;
    }

    // Print lower part of the pattern
    for(i = rows-1; i >= 0; i--) {
        for(j = 1; j < rows-i; j++) {
            cout << " ";
        }
        for(j = 0; j < 2*i+1; j++) {
            cout << "*";
        }
        cout << endl;
    }

    return 0;
}
