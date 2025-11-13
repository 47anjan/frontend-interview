const nums = [2, 1, 11, 15, 7];

const twoSum = (arr, target) => {
  const map = new Map();

  for (const index in arr) {
    const pair = target - arr[index];
    if (map.has(pair)) return [map.get(pair), index];
    else map.set(arr[index], index);
  }

  return [-1, -1];
};

console.log(twoSum(nums, 9));
