/**
 * Get smallest subarray length whose sum is greater than or equal to sum
 * @param arr
 * @param sum
 * @returns
 */
function smallestSubArraySumGreaterThanOrEqual(
  arr: number[],
  sum: number
): number {
  let currentSum: number = 0;
  let smallestSubArray: number = Number.POSITIVE_INFINITY;
  let start: number = 0;

  for (let curr = 0; curr < arr.length; curr++) {
    currentSum += arr[curr];

    while (currentSum >= sum) {
      smallestSubArray = Math.min(smallestSubArray, curr - start + 1);

      // Best case, array of size 1
      if (curr - start + 1 === 1) {
        return 1;
      }

      currentSum -= arr[start];
      start++;
    }
  }

  return smallestSubArray;
}

console.log(smallestSubArraySumGreaterThanOrEqual([1, 1, 3, 1, 1, 4, 2, 1], 6));
