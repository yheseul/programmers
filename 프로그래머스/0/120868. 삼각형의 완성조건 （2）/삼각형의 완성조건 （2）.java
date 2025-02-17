class Solution {
    public int solution(int[] sides) {
        int answer = 0;
        int max = Math.max(sides[0], sides[1]); // 가장 긴 변
        int min = Math.min(sides[0], sides[1]); // 가장 짧은 변

        answer += min * 2 - 1;

        return answer;
    }
}