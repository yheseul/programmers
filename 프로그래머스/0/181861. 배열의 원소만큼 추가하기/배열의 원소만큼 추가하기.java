import java.util.ArrayList;

public class Solution {
    public static ArrayList<Integer> solution(int[] arr) {
        ArrayList<Integer> newArr = new ArrayList<>();
        
        for (int a : arr) {
            for (int i = 0; i < a; i++) {
                newArr.add(a);
            }
        }
        
        return newArr;
    }
}