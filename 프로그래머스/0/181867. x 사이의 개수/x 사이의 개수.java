class Solution {
    public int[] solution(String myString) {
        String[] arr = myString.split("x");
        int[] answer = new int[arr.length + (myString.endsWith("x") ? 1 : 0)];
        
        for (int i = 0; i < arr.length; i++) {
            answer[i] = arr[i].length();
        }
        
        if (myString.endsWith("x")) {
            answer[answer.length - 1] = 0;
        }

        return answer;
    }
}
