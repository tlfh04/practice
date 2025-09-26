import sys
input = sys.stdin.readline
# count = 0

# A = [ int(input()) for _ in range(10)]

# arr = [ i % 42 for i in A ]

# print(len(set(arr)))

arr = [int(input()) for _ in range(9)]
max = 0
cnt = 0
for i in arr:
  if i > max:
    max = i
    cnt +=1

print(max)
print(arr.index(max)+1)