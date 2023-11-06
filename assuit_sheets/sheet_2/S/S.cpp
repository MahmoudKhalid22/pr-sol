#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

void Sum(int a, int b) {
    int maxNum = max(a, b);
    int minNum = min(a, b);
    int sum = 0;

    for (int i = minNum + 1; i < maxNum; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
    }
    cout << sum << endl;
}

int main() {
    int count;
    int num1;
    int num2;
    cin >> count;

    for (int i = 1; i <= count; i++) {
        cin >> num1 >> num2;
        Sum(num1, num2);
    }

    return 0;
}
