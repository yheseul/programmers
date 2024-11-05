import sys
input = sys.stdin.readline

for _ in range(int(input())):
    idx, word = input().split()
    idx = int(idx)-1

    ans = word[:idx] + word[idx+1:]
    print(ans)