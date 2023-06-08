function twoSum(arr, target) {
  let hash = new Map();
  for (member in arr) {
    let value = target - arr[member];
    if (hash.has(value)) {
      return new Array(hash.get(value), member);
    } else {
      hash.set(arr[member], member);
    }
  }
}

let arr = [3, 4, 2, 1, 9, 6];
let target = 7;
// answer should be [0, 1]

console.log(twoSum(arr, target));
