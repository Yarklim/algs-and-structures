const arr = [0, 3, 4, 2, 7, 1, 9, 6, 5, 2, 8, 4, 7, -1, -5, 23, 6, 35, 48, 32];

function bubbleSort(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[j + 1] < array[j]) {
				let tmp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = tmp;
			}
		}
	}
	return array;
}

console.log(bubbleSort(arr));