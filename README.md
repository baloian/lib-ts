# TypeScript Library
A library of native TypeScript functions and data structures with no external dependencies.

## Install
```bash
npm install github:baloian/lib-ts
```

## Usage
```typescript
import { pctDiff } from '@baloian/lib-ts';

const diff: number = pctDiff(100, 50);
console.log(diff);
```

## Functions
```typescript
// Function makes the program sleep for a given number of milliseconds.
sleep(ms: number): Promise<any>

// Rounding number to a decimal place
round(value: number, decimals: number = 2): number

// Get time difference in human readable form.
timeDiff(start: number, end: number, rounded: boolean = false): string

// Calculates percentage change of two values (current and previous).
pctDiff(current: number, previous: number): number

// Calculates what percentage VALUE is of TOTAL.
pctOf(value: number, total: number): number

// Returns the sum of the property value in the array of objects.
sumOfPropVal(list: unknown[], prop: string): number

/*
* Fisher-Yates shuffle algorithm, Durstenfeld's variant as described in
* https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
*
* This function shuffles the given array in-place.
*/
shuffle<T>(array: T[]): void

/*
* Returns random element (array[i]) of array such that 0 <= i < array.length
* The random implementation avoids modulo bias.
*/
getRandomElemOfArray<T>(data: T[]): T | undefined

/*
 * Convert a number to a USD dollar value.
 * For example, formatToUSD(123459.87) -> $123,458.87
 */
formatToUSD(amount: number): string

// Copy object
deepCopy<T>(obj: T): T

// Convert a number (representing a month) to a month name.
function numberToMonth(monthNumber: number): string | null
```

## Data Structures
#### Queue
```typescript
push(item: T): void;
pop(): void;
front(): T | undefined;
isEmpty(): boolean;
size(): number;
clear(): void;
updateFront(data: T): void;
getList(): T[];
```
Example
```typescript
import { Queue, QueueType } from '@baloian/lib';

const q = new Queue<number>();
q.push(5);
console.log(q.front());
```

## Contributions
Contributions are welcome and can be made by submitting GitHub pull requests
to this repository. In general, the source code follows
[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) and the
rules specified in `.eslintrc.json` file.


## License
This source code is available to everyone under the standard
[MIT LICENSE](https://github.com/baloian/marcal/blob/master/LICENSE).
