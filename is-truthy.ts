export type falseys =
  | ''
  | 'false'
  | 'False'
  | 0
  | '0'
  | false
  | null
  | undefined;

/**
 * @description
 * A utility function to handle values generally considered to be falsey.
 * Typically, shortcuts such as `!!val` are sufficient. But when dealing
 * with user input or other wider array, the double-bang method can produce
 * undesired results.
 *
 *
 * @param {any} [val] Value to be evaluated
 * @param {falseys} [including] Falsey values to evaluate as truthy.
 *
 */
export const isTruthy = (
  val: any,
  including: Array<falseys | true> = [true]
): boolean =>
  !['', 'false', 'False', 0, false, null, undefined]
    .filter((v) => !including.some((ev) => ev === v))
    .some((v) => v === val);
