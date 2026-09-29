// ================= Принцип LIFO =================
// Last In, First Out - последним вошёл, первым вышел

// ---------------- Задачи ----------------

// Разгладидь массив используя LIFO
function flatten(...items: any[]) {
  const stack = [...items].reverse();
  const result: any[] = [];

  while (stack.length) {
    const el = stack.pop(); // удаляю елемент из конца списка и записываю его в переменную

    if (Array.isArray(el)) {
      for (let i = el.length - 1; i >= 0; i--) {
        stack.push(el[i]);
      } // если el - это массив, то разворачиваю его и записываю в конец списка

      continue; // начинаю обход заново
    }

    result.push(el);
  }

  return result;
}

console.log(flatten(1, [2, [[3]]], 4, 5, [6, [7]]));
console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']]));
