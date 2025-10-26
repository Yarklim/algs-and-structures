const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const binarySearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

console.log(binarySearch(array, 9));

// ======================================================
// const search = (nums, target) => {
//   let left = 0;
//   let right = nums.length - 1;
//   let mid;

//   while (left <= right) {
//     mid = Math.floor((right - left) / 2) + left;

//     if (target === nums[mid]) {
//       return mid;
//     } else if (target < nums[mid]) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return -1;
// };

// console.log(search(array, 13));

// =======================================================
// let count = 0;
// function binarySearch2(array, item) {
//   let start = 0;
//   let end = array.length;
//   let middle;
//   let found = false;
//   let position = -1;
//   while (found === false && start <= end) {
//     middle = Math.floor((start + end) / 2);
//     if (array[middle] === item) {
//       found = true;
//       position = middle;
//       return position;
//     }
//     if (item < array[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//   }
//   return position;
// }

// console.log(binarySearch2(array, 8));

// ========================================================
// function recursiveBinarySearch(array, item, start, end) {
// 	let middle = Math.floor((start + end) / 2);
// 	if (item === array[middle]) {
// 		return middle;
// 	}
// 	if (item < array[middle]) {
// 		return recursiveBinarySearch(array, item, start, middle - 1);
// 	} else {
// 		return recursiveBinarySearch(array, item, middle + 1, end);
// 	}
// }

// console.log(recursiveBinarySearch(array, 12, 0, array.length));
