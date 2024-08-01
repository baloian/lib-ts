type ValueType = number | string;

export class TestRunner {
  private testCases: Array<{ name: string; func: () => void }> = [];

  addTestCase(name: string, func: () => void) {
    this.testCases.push({ name, func });
  }

  run() {
    this.testCases.forEach(({ name, func }) => {
      try {
        func();
        console.log(`Test '${name}' passed.`);
      } catch (error: any) {
        console.error(`Test '${name}' failed: ${error.message}`);
      }
    });
  }
}


export class Test {
  static expect(value: ValueType) {
    return new Expectation(value);
  }
}


class Expectation {
  private value: ValueType;

  constructor(value: ValueType) {
    this.value = value;
  }

  toBe(expected: ValueType) {
    if (this.value === expected) {
      console.log(`✅ Test passed: ${this.value} is ${expected}`);
    } else {
      throw new Error(`❌ Test failed: Expected ${this.value} to be ${expected}`);
    }
  }

  toEqual(expected: ValueType) {
    if (this.value === expected) {
      console.log(`✅ Test passed: ${this.value} equals ${expected}`);
    } else {
      throw new Error(`❌ Test failed: Expected ${this.value} to equal ${expected}`);
    }
  }

  toBeGreaterThan(expected: number) {
    if (typeof this.value === 'number' && this.value > expected) {
      console.log(`✅ Test passed: ${this.value} is greater than ${expected}`);
    } else {
      throw new Error(`❌ Test failed: Expected ${this.value} to be greater than ${expected}`);
    }
  }

  toBeLessThan(expected: number) {
    if (typeof this.value === 'number' && this.value < expected) {
      console.log(`✅ Test passed: ${this.value} is less than ${expected}`);
    } else {
      throw new Error(`❌ Test failed: Expected ${this.value} to be less than ${expected}`);
    }
  }

  toContain(substring: string) {
    if (typeof this.value === 'string' && this.value.includes(substring)) {
      console.log(`✅ Test passed: ${this.value} contains ${substring}`);
    } else {
      throw new Error(`❌ Test failed: Expected ${this.value} to contain ${substring}`);
    }
  }

  toEqualArray(expectedArray: ValueType[]) {
    if (Array.isArray(this.value) && Array.isArray(expectedArray) && this.areArraysEqual(this.value, expectedArray)) {
      console.log(`✅ Test passed: Arrays are equal`);
    } else {
      throw new Error(`❌ Test failed: Expected arrays to be equal`);
    }
  }

  toEqualJson(expectedJson: object) {
    if (this.isObject(this.value) && this.isObject(expectedJson) && this.areJsonEqual(this.value as any, expectedJson)) {
      console.log(`✅ Test passed: JSON objects are equal`);
    } else {
      throw new Error(`❌ Test failed: Expected JSON objects to be equal`);
    }
  }

  private areArraysEqual(array1: ValueType[], array2: ValueType[]): boolean {
    if (array1.length !== array2.length) return false;
    return array1.every((value, index) => value === array2[index]);
  }

  private isObject(value: any): boolean {
    return value && typeof value === 'object' && !Array.isArray(value);
  }

  private areJsonEqual(json1: object, json2: object): boolean {
    return JSON.stringify(json1) === JSON.stringify(json2);
  }
}
