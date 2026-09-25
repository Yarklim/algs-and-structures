// =========== O(n log n), память O(log n) ============

const arr = [0, 3, 4, 2, 7, 1, 9, 6, 5, 2, 8, 4, 7, -1, -5, 23, 6, 35, 48, 32];

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less = [];
  let greater = [];
  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) continue;
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort(arr));
