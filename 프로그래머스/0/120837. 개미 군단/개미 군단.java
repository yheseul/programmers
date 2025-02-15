class Solution {
    public int solution(int hp) {
        int ants1 = hp / 5;
        int ants2 = (hp % 5) / 3;
        int ants3 = (hp % 5) % 3;
        return ants1 + ants2 + ants3;
    }
}