const arr = [1, 2, 3, 4, 5, [4, 85, 7, 3, [1, 5], 4, 85], 5, 7, 8];

function flatten(arr) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flatten(item));
    } else {
      acc.push(item);
    }

    return acc;
  }, []);
}

console.log(flatten(arr));
