/**
 * 
 */
export const isTruthy = (val: any, including: any[] = [true]): boolean =>
  !['', 'false', 'False', 0, false, null, undefined]
    .filter(
      v =>
        !including.some(
          ev => ev === v
        )
    )
    .some(v => v === val);
