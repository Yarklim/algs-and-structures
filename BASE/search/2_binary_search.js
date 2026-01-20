// Бинарный поиск выполняется только в отсортированном массиве
// O(log n)

const array = [1, 4, 8, 25, 99, 115, 675, 1101, 1400, 2100, 4050, 9787, 12320];

export const binarySearch = (nums, target) => {
  // Указатели - левый и правый элемент массива
  let left = 0;
  let right = nums.length - 1;

  // Поиск
  while (left <= right) {
    // При каждой итерации определяю середину массива (индекс)
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid; // Элемент найден
    } else if (nums[mid] < target) {
      left = mid + 1; // Ищу в правой половине
    } else {
      right = mid - 1; // Ищу в левой половине
    }
  }

  return -1;
};

// ================== Рекурсивный бинарный поиск ====================
export const recursiveBinarySearch = (array, item, start, end) => {
  let middle = Math.floor((start + end) / 2);
  if (item === array[middle]) {
    return middle;
  }
  if (item < array[middle]) {
    return recursiveBinarySearch(array, item, start, middle - 1);
  } else {
    return recursiveBinarySearch(array, item, middle + 1, end);
  }
};
