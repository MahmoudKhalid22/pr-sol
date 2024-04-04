import java.util.ArrayList;
import java.util.Scanner;

public class W_Mirror_Array
{
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int M = sc.nextInt();

        ArrayList<ArrayList<Integer>> arr = new ArrayList<>();


        for (int i = 0; i < N; i++) {
            ArrayList<Integer> row = new ArrayList<>();
            for (int j = 0; j < M; j++) {
                int temp = sc.nextInt();
                row.add(temp);
            }
            arr.add(row);
        }


        for (int i = 0; i < N; i++) {
            ArrayList<Integer> row = arr.get(i);
            for (int j = M - 1; j >= 0; j--) {
                System.out.print(row.get(j) + " ");
            }
            System.out.println();
        }    
    }
}