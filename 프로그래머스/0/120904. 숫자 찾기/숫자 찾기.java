class Solution {
    public int solution(int num, int k) {
        String numStr = Integer.toString(num);
        String kStr = Integer.toString(k);
        int idx = numStr.indexOf(kStr);
        return (idx == -1) ? -1 : idx +1;
    }
}