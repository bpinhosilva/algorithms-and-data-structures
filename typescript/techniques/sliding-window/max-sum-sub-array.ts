/**
 * Get the maximum sum of subarray of length k
 * @param arr
 * @param k
 * @returns
 */
function maxSumSubArray(arr: number[], k: number): number {
  let maxSum: number = Number.NEGATIVE_INFINITY;
  let currentSum: number = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (i >= k - 1) {
      maxSum = Math.max(currentSum, maxSum);

      currentSum -= arr[i - (k - 1)];
    }
  }

  return maxSum;
}

/**
 * For example:
 *
 * | 1, 2, 3 |, 4, 5
 * 1,| 2, 3, 4 |, 5
 * 1, 2, | 3, 4, 5 |
 */

console.log(maxSumSubArray([1, 2, 1, 7, 8, 3, 1, 8, 1, 3], 3));
