#include <iostream>
#include <bitset>
#include <string>

using namespace std;

string decimalToBinary(int decimalNumber) {
    return bitset<8 * sizeof(int)>(decimalNumber).to_string();
}

int binaryToDecimal(const string& binaryString) {
    bitset<32> bits(binaryString); // Assuming a 32-bit integer, adjust if needed
    return static_cast<int>(bits.to_ulong());
}

int main() {
    int count;

    cin>>count;
    int decimal;
    for(int i = 0; i< count; i++){
        cout << "Enter a decimal number (or enter -1 to exit): ";
        cin >> decimal;

      
            string binaryRepresentation = decimalToBinary(decimal);
            string count = "";

            for (int j = 0; j < binaryRepresentation.length(); j++) {
                if (binaryRepresentation[j] == '1') {
                    count += '1';
                }
            }

            // Output the binary representation and count
            cout << "Binary representation: " << binaryRepresentation << endl;
            cout << "Count of '1's: " << count << endl;

            // Convert count to decimal and output the result
            int result = binaryToDecimal(count);
            cout << "Result after converting count to decimal: " << result << endl;
      

    } 

    return 0;
}
