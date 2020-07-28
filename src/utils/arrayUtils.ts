import ObjectUtils from "./objectUtils";

export default class ArrayUtils {
  /**
   * check whether current array is empty or null/undefined.
   * @param array
   * @returns  true if array is empty or null/undefined; otherwise, false.
   * @throws if input parameter is not array type or null/undefined
   * @example ArrayUtils.isEmpty([]) = true;
   * @example ArrayUtils.isEmpty(null) = true;
   * @example ArrayUtils.isEmpty(undefined) = true;
   * @example ArrayUtils.isEmtpy([1]) = false;
   * @example ArrayUtils.isEmtpy("string") throw error;
   * @example ArrayUtils.isEmtpy(123) throw error;
   */
  public static isEmpty<T>(array: T[] | undefined | null): boolean {
    if (ObjectUtils.isNullOrUndefined(array)) {
      return true;
    }
    if (!ObjectUtils.isArray(array)) {
      throw Error("input parameter is not a array or null/undefined");
    }
    return array.length === 0;
  }
}
