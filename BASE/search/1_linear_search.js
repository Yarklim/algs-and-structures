const array = [1, 4, 5, 8, 6, 3, 7, 10, 9, 15, 25];

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}
