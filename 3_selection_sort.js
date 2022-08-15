const arr = [0, 3, 4, 2, 7, 1, 9, 6, 5, 2, 8, 4, 7, -1, -5, 23, 6, 35, 48, 32];

function selectionSort(array) {
	for (let i = 0; i < array.length; i++) {
		let indexMin = i;
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] < array[indexMin]) {
				indexMin = j;
			}
		}
		let tmp = array[i];
		array[i] = array[indexMin];
		array[indexMin] = tmp;
	}
	return array;
}

console.log(selectionSort(arr));