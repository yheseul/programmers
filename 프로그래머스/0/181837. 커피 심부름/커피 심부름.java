class Solution {
    public int solution(String[] order) {
        int answer = 0;
        
        for(String menu : order) {
            if(menu.contains("americano") || menu.equals("anything")) {
                answer += 4500;
            }else{
                answer += 5000;
            }
        }
        
        return answer;
    }
}