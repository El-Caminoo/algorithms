def twoSum(arr, target):
  hash = {}
  for member in range(len(arr)):
    value = target - arr[member]
    if value in hash:
      return [hash[value], member]
    else:
      hash[arr[member]] = member

arr = [3, 4, 2, 1, 9, 6]
target = 7

print(twoSum(arr, target))