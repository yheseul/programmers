class Solution {
    public int solution(String binomial) {
        String[] cal = binomial.split(" ");
        
        switch (cal[1]) {
            case "+":
                return Integer.parseInt(cal[0]) + Integer.parseInt(cal[2]);
            case "-":
                return Integer.parseInt(cal[0]) - Integer.parseInt(cal[2]);
            case "*":
                return Integer.parseInt(cal[0]) * Integer.parseInt(cal[2]);
        }
        return 0;
    }
}
