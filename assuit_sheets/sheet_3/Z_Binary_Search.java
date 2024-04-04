import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class Z_Binary_Search {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int Q = sc.nextInt();
        
        ArrayList<Integer> elements = new ArrayList<>();
        ArrayList<Integer> target = new ArrayList<>();

        
        
        for (int i = 0; i < N ; i++)
        {
            int element = sc.nextInt();
            elements.add(element);
        }
        
        for (int i = 0; i < Q ; i++)
        {
            int temp = sc.nextInt();
            target.add(temp);
        }

        Collections.sort(elements);

        for(int i = 0; i < target.size(); i++) {
            boolean isFound = binarySearch(elements, target.get(i));
            if (isFound) {
                System.out.println("found");
            } else {
                System.out.println("not found");
            }
        }

    }


    public static boolean binarySearch(ArrayList<Integer> arr, int target) {
        int left = 0;
        int right = arr.size() - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (arr.get(mid) == target) {
                return true; 
            } else if (arr.get(mid) < target) {
                left = mid + 1; 
            } else {
                right = mid - 1; 
            }
        }
        
        return false;
    }

}