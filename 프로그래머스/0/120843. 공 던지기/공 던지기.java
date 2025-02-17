class Solution {
        public int solution(int[] numbers, int k) {
        int index = 0;
            
        if (k * 2 <= numbers.length) {
            for (int i = 1; i < k; i++) {
                index = (index + 2) % numbers.length;
            }
        } else {
            int[] extendedNumbers = new int[numbers.length * 2];
            System.arraycopy(numbers, 0, extendedNumbers, 0, numbers.length);
            System.arraycopy(numbers, 0, extendedNumbers, numbers.length, numbers.length);

            for (int i = 1; i < k; i++) {
                index = (index + 2) % extendedNumbers.length;
            }
            return extendedNumbers[index];
        }
        
        return numbers[index];
    }
}