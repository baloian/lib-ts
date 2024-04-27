# TypeScript Library
A library of common TypeScript functions.

## Install
```bash
npm install github:baloian/lib
```

## Usage
```typescript
import { pctDiff } from '@baloian/lib';

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
timeDiff(start: number, end: number = 0, tz: string = 'America/New_York'): string

// Calculates percentage change of two values (current and previous).
pctDiff(current: number, previous: number): number

// Calculates what percentage VALUE is of TOTAL.
pctOf(value: number, total: number): number

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

// Returns the sum of the property value in the array of objects.
sumOfPropVal(list: unknown[], prop: string): number
```


## Contributions
Contributions are welcome and can be made by submitting GitHub pull requests
to this repository. In general, the source code follows
[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) and the
rules specified in `.eslintrc.json` file.


## License
This source code is available to everyone under the standard
[MIT LICENSE](https://github.com/baloian/marcal/blob/master/LICENSE).
