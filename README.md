# Lib
A library of common TypeScript functions.

## Install
```bash
npm install github:baloian/lib
```

## Import
```typescript
import { sleep } from '@baloian/lib';
```

## Functions
```typescript
// 1.
sleep(ms: number): Promise<any>

// 2.
round(value: number, decimals: number = 2): number

// 3.
timeDiff(start: number, end: number = 0, tz: string = 'America/New_York'): string

// 4.
pctDiff(current: number, previous: number): number

// 5. Calculate what percentage VALUE is of TOTAL.
pctOf(value: number, total: number): number
```


## Contributions
Contributions are welcome and can be made by submitting GitHub pull requests
to this repository. In general, the source code follows
[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) and the
rules specified in `.eslintrc.json` file.


## License
This source code is available to everyone under the standard
[MIT LICENSE](https://github.com/baloian/marcal/blob/master/LICENSE).
