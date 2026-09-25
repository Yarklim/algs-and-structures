// =========== O(n^2), память O(1) ============

// Ищет минимальный элемент и ставит его на нужное место.

// Ррандомный массив из 100 чисел от -500 до 500
const array = Array(100)
  .fill(null)
  .map(() => Math.floor(Math.random() * 1000) - 500);

function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

console.log(selectionSort(array));
