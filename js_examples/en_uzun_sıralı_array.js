let arr1 = [11,97, 100, 9, 4, 10, 12,98, 200, 1, 3, 2, 13];

let arr2 = [5, 7, 8, 10, 2, 3, 6];

let consectiveArray = [];
const consective = (arr) => {
  if (arr == []) {
    return [];
  }
  const consectiveParts = [];
  let sorted = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (sorted[i] - sorted[i + 1] == -1) {
      if (!consectiveArray.includes(sorted[i])) {
        consectiveArray.push(sorted[i]);
      }

      consectiveArray.push(sorted[i + 1]);
    } else {
      consectiveArray.length != 0 && consectiveParts.push(consectiveArray);
      consectiveArray = [];
    }
  }
  // console.log(sorted);
  // console.log(consectiveParts);
  return consectiveParts.filter(
    (siraliParça) =>
      siraliParça.length ==
      Math.max(...consectiveParts.map((siraliparca) => siraliparca.length))
  )[0];
};

console.log(consective(arr1));
