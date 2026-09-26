// ==================== Linked List ========================

/**
 * Доступ по индексу - O(n).
 * Поиск значения - O(n).
 * Вставка элемента: начало O(1), конец без tail O(n) / конец с tail O(1), после известного узла O(1), в середину - поиск O(n) + вставка O(1) = O(n).
 * Удаление элемента: начало/конец O(1), после известного узла O(1), в середину - поиск O(n) + вставка O(1) = O(n).
 * Получение элемента: начало/конец O(1), середина O(n).
 *
 * У связанного списка нет прямого доступа к элементу, list[2] - такого механизма нет.
 * Чтобы найти третий элемент, нужно пройти: 10 -> 20 -> 30.
 * Но у Linked List есть сильное свойство: можно очень дешево менять связи между элементами.
 *
 * Плюсы: быстрая вставка/удаление, динамический размер.
 * МинусыЖ медленный доступ к элементам, дополнительная память на указатели.
 *
 * Примеры использования: история переходов или действий (word, браузер); реализация очереди, стека, дека, Least Recently Used Cache.
 */

// Односвязный список [value | next] -> [value | next] -> [value | next] -> null.
// Двусвязный список null <- [value | next] <-> [value | next] <-> [value | next] -> null

// Каждый элемент здесь - это node:
type Node = {
  value: number;
  next: Node | null;
};

// ----------------- Реализация односвязного списка: -------------------
class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: ListNode | null = null;

  // Добавление в начало
  prepend(value: number) {
    const node = new ListNode(value);

    node.next = this.head;
    this.head = node;
  }

  // Добавить в конец
  append(value: number) {
    const node = new ListNode(value);

    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;
  }

  // Найти элемент
  find(value: number): ListNode | null {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return current;
      }

      current = current.next;
    }

    return null;
  }

  // Удалить элемент
  remove(value: number): boolean {
    if (!this.head) {
      return false;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      return true;
    }

    let previous = this.head;
    let current = this.head.next;

    while (current) {
      if (current.value === value) {
        previous.next = current.next;
        return true;
      }

      previous = current;
      current = current.next;
    }

    return false;
  }
}

const list = new LinkedList();
list.prepend(20);
list.prepend(10);
list.append(30);

console.log(list);
console.log(list.head?.next?.next?.value);

list.remove(20);
console.log(list);
console.log(list.head?.next?.next?.value);

// ------------------ Реализация двусвязного списка: -------------------
class DoublyListNode {
  value: number;
  next: DoublyListNode | null;
  prev: DoublyListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  head: DoublyListNode | null = null;
  tail: DoublyListNode | null = null;

  prepend(value: number): void {
    const node = new DoublyListNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;

    this.head = node;
  }

  append(value: number): void {
    const node = new DoublyListNode(value);

    if (!this.tail) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail.next = node;
    node.prev = this.tail;

    this.tail = node;
  }

  find(value: number): DoublyListNode | null {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return current;
      }

      current = current.next;
    }

    return null;
  }

  remove(value: number): boolean {
    const node = this.find(value);

    if (!node) {
      return false;
    }

    if (node.prev) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }

    node.next = null;
    node.prev = null;

    return true;
  }
}
