public class Solution {
    public static void main(String[] args) {
        int[] answer1 = solution(new int[]{0, 1, 1, 1, 0});
        int[] answer2 = solution(new int[]{0, 1, 0, 1, 0});
        int[] answer3 = solution(new int[]{0, 1, 1, 0});

        printArray(answer1);
        printArray(answer2);
        printArray(answer3);
    }

    public static int[] solution(int[] arr) {
        int[] stk = new int[arr.length];
        int size = 0;

        for (int i = 0; i < arr.length; i++) {
            if (size == 0) {
                stk[size++] = arr[i];
            } else if (stk[size - 1] == arr[i]) {
                size--;
            } else {
                stk[size++] = arr[i];
            }
        }

        if (size == 0) {
            return new int[]{-1};
        }

        int[] answer = new int[size];
        for (int i = 0; i < size; i++) {
            answer[i] = stk[i];
        }
        return answer;
    }

    public static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}
