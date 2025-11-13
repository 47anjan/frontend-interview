const arr = [1, 2, 3, 4, 5, 6];

const duplicates = (arr) => {
  const set = new Set(arr);

  return arr.length !== set.size;
};

console.log(duplicates(arr));
