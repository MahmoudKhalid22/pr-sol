#include <iostream>

using namespace std;

int getDigits(int a) {
    int sum = 0;
    while(a > 0){
        sum += a % 10;
        a /= 10;
    }
    return sum;
}

int main() {
    int N, a, b;
    cin >> N >> a >> b;
    int result = 0;
    for (int i = 1; i <= N; i++) {
        int digitSum = getDigits(i);
        if (digitSum >= a && digitSum <= b) {
            result += i;
        }
    }
    cout << result;

    return 0;
}
