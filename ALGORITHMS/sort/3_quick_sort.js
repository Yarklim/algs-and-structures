// =========== O(n log n), память O(log n) ============

/**
 * ========= Разделяй и властвуй ==========
 * Состоит из 3 этапов
 * 1. Разделяй (Divide)
 * 2. Властвуй (Conquer)
 * 3. Объединяй (Combine)
 */

const arr = [0, 3, 4, 2, 7, 1, 9, 6, 5, 2, 8, 4, 7, -1, -5, 23, 6, 35, 48, 32];

// 1-й способ. С созданием массивов:
function quickSort1(array) {
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
  return [...quickSort1(left), pivot, ...quickSort1(right)];
}

// console.log(quickSort1(arr));

// 2-й способ. С указателями, без создания массивов:
const arr2 = [4, 1, 3, 14, 5, 9, 2, 7, 11];

function partition(arr, left, right) {
  const pivot = arr[Math.floor((left + right) / 2)];
  let i = left - 1;
  let j = right + 1;

  while (true) {
    do {
      i++;
    } while (arr[i] < pivot);
    do {
      j--;
    } while (arr[j] > pivot);

    if (i >= j) return j;

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function quickSort2(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return;

  const pivotIndex = partition(arr, left, right);
  quickSort2(arr, left, pivotIndex);
  quickSort2(arr, pivotIndex + 1, right);

  return arr;
}

console.log(quickSort2(arr2));
