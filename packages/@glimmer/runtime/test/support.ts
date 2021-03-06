export function module(name: string, nested: (hooks: NestedHooks) => void): void;
export function module(name: string, setup: Partial<NestedHooks>): void;
export function module(name: string, setup: Partial<NestedHooks>, nested: (hooks: NestedHooks) => void): void;
export function module(name: string, second?: any, third?: any) {
  let nested, setup;

  if (arguments.length === 3) {
    setup = second;
    nested = third;
  } else if (arguments.length === 2) {
    if (typeof second === 'object') {
      setup = second;
    } else {
      nested = second;
    }
  }
  return QUnit.module(name, setup, nested);
}

export function test(name: string, callback: (assert: Assert) => void) {
  return QUnit.test(name, callback);
}

export function todo(name: string, callback: (assert: Assert) => void) {
  return (QUnit as any).todo(name, callback);
}

export const assert = QUnit.assert;
