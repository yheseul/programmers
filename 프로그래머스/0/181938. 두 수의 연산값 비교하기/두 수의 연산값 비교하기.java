class Solution {
    public int solution(int a, int b) {
        String str = String.valueOf(a)+String.valueOf(b);
        int num = 2*a*b;
        return str.equals(String.valueOf(num)) ? Integer.parseInt(str) : Math.max(Integer.parseInt(str), num);
    }
}