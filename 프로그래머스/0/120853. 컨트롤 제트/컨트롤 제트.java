class Solution {
    public static int solution(String s) {
        String[] parts = s.split(" ");
        int sum = 0;
        int lastNumber = 0;
        boolean isZ = false;
        
        for (int i = 0; i < parts.length; i++) {
            String part = parts[i];
            
            if (part.equals("Z")) {
                sum -= lastNumber;
            } else {
                lastNumber = Integer.parseInt(part);
                sum += lastNumber;
            }
        }
        return sum;
    }
}