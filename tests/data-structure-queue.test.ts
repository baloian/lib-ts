import { Queue } from '../lib/data-structure/queue';

describe('Queue', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  test('push adds an item to the queue', () => {
    queue.push(1);
    expect(queue.getList()).toEqual([1]);
  });

  test('pop removes the first item from the queue', () => {
    queue.push(1);
    queue.push(2);
    queue.pop();
    expect(queue.getList()).toEqual([2]);
  });

  test('pop on an empty queue does nothing', () => {
    queue.pop();
    expect(queue.getList()).toEqual([]);
  });

  test('front returns the first item in the queue', () => {
    queue.push(1);
    queue.push(2);
    expect(queue.front()).toBe(1);
  });

  test('front returns undefined if the queue is empty', () => {
    expect(queue.front()).toBeUndefined();
  });

  test('isEmpty returns true for an empty queue', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  test('isEmpty returns false when queue has items', () => {
    queue.push(1);
    expect(queue.isEmpty()).toBe(false);
  });

  test('size returns the number of items in the queue', () => {
    expect(queue.size()).toBe(0);
    queue.push(1);
    expect(queue.size()).toBe(1);
    queue.push(2);
    expect(queue.size()).toBe(2);
  });

  test('clear removes all items from the queue', () => {
    queue.push(1);
    queue.push(2);
    queue.clear();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.getList()).toEqual([]);
  });

  test('updateFront updates the first item in the queue', () => {
    queue.push(1);
    queue.push(2);
    queue.updateFront(10);
    expect(queue.getList()).toEqual([10, 2]);
  });

  test('updateFront does nothing if queue is empty', () => {
    queue.updateFront(10);
    expect(queue.getList()).toEqual([]);
  });

  test('getList returns the internal list of items', () => {
    queue.push(1);
    queue.push(2);
    expect(queue.getList()).toEqual([1, 2]);
  });
});
