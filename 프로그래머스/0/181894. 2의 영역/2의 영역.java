import java.util.*;

class Solution {
    public ArrayList<Integer> solution(int[] arr) {
        ArrayList<Integer> answer = new ArrayList<Integer>();
        int first = -1;
        int second = -1;
        for(int i = 0; i<arr.length; i++){
            if(arr[i]==2){
                first = i;
                break;
            }
        }
        for(int i = arr.length-1; i>=0; i--){
            if(arr[i]==2){
                second = i;
                break;
            }
        }
        if(first==-1 && second==-1){
            answer.add(-1);
        } else{
            for(int i = first; i<=second; i++){
                answer.add(arr[i]);
            }
        }

        return answer;
    }
}