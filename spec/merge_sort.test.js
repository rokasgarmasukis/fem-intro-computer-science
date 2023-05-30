/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  // code goes here
  if (nums.length === 1) {
    return nums;
  }

  let sorted = merge(
    mergeSort(nums.slice(0, nums.length / 2)),
    mergeSort(nums.slice(nums.length / 2, nums.length)),
  );

  return sorted;
};

const merge = (array1, array2) => {
  let mergedArray = [];

  while (true) {
    if (array2.length === 0) {
      mergedArray = mergedArray.concat(array1);
      break;
    } else if (array1.length === 0) {
      mergedArray = mergedArray.concat(array2);
      break;
    } else {
      if (array1[0] <= array2[0]) {
        let item = array1.shift();
        mergedArray.push(item);
      } else {
        let item = array2.shift();
        mergedArray.push(item);
      }
    }
  }

  return mergedArray;
};

const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
const ans = mergeSort(nums);
console.log(ans);

// unit tests
// do not modify the below code
test('merge sort', function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
