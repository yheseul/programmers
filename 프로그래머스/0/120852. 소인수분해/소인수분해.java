import java.util.ArrayList;

class Solution {
    public int[] solution(int n) {
        int k = 2;
        ArrayList<Integer> arr = new ArrayList<>();
        
        while (n != 1) {
            if(n % k ==0) {
                if(!arr.contains(k)) {
                    arr.add(k);
                }
                n /= k;
            } else {
                k++;
            }
        }
        
        int[] result = new int[arr.size()];
        for (int i = 0; i < arr.size(); i++) {
            result[i] = arr.get(i);
        }
        
        return result;
    }
}