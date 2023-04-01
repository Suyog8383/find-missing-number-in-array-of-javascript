let arr = [5, 9, 6, 8, 7, 10, 11, 13];
function findMissingNumber(arr) {
  let obj = {};
  //   let max = Math.max(...arr);
  //   let min = Math.min(...arr);
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = true;
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }

  let res = [];
  for (let i = min; i <= max; i++) {
    if (obj.hasOwnProperty(i)) {
      continue;
    } else {
      res.push(i);
    }
  }
  return res;
}
console.log(findMissingNumber(arr));
