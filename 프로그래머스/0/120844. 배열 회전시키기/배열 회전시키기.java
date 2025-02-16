class Solution {
    public int[] solution(int[] numbers, String direction) {
        int lng = numbers.length;
        int[] answer = new int[lng];
        
        if(direction.equals("right")) {
            answer[0] = numbers[lng-1];
            for(int i=1; i<lng; i++) {
                answer[i] = numbers[i-1];
            }
        }else if(direction.equals("left")) {
            answer[lng-1] = numbers[0];
            for(int i=0; i<lng-1; i++) {
                answer[i] = numbers[i+1];
            }
        }
        
        return answer;
    }
}