// =========== O(n log n), память O(log n) ============

/**
 * ========= Разделяй и властвуй ==========
 * Состоит из 3 этапов
 * 1. Разделяй (Divide)
 * 2. Властвуй (Conquer)
 * 3. Объединяй (Combine)
 */

const arr = [0, 3, 4, 2, 7, 1, 9, 6, 5, 2, 8, 4, 7, -1, -5, 23, 6, 35, 48, 32];

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let left = [];
  let right = [];
  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) continue;
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(arr));
