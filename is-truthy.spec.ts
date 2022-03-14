import { isTruthy, falseys } from './is-truthy';
const desc = (val: any) => (typeof val == 'string' ? `'${val}'` : `${val}`);

describe('isTruthy', () => {
  describe('without inclusion', () => {
    ['foo', 'true', 'True', '1', '0', 'null', 'undefined'].forEach((x) =>
      it(`should return ${desc(x)} to be true`, () => {
        expect(isTruthy(x)).toBeTrue();
      })
    );

    ['false', 'False', false, 0, null, undefined].forEach((x) =>
      it(`should return ${desc(x)} to be false`, () => {
        expect(isTruthy(x)).toBeFalse();
      })
    );
  });

  describe('with inclusion', () => {
    const testValues: falseys[] = ['false', 'False', false, 0, null, undefined];
    testValues.forEach((x) =>
      it(`including ${desc(x)} should return ${desc(x)} to be true`, () => {
        expect(isTruthy(x, [x])).toBeTrue();
      })
    );
  });
});
