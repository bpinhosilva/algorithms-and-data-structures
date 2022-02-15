/**
 * Kadane's Algorithm
 * It solves the problem of finding a contiguous subarray with the largest sum,
 * given one-dimensional array A[1..n] of numbers.
 * T: O(n)
 * @param arr
 * @returns
 */
function kadaneAlgorithmMaxSumSubarray(arr: number[]): number {
  let currentSum: number = 0;
  let maxSum: number = Number.NEGATIVE_INFINITY;

  for (let n of arr) {
    currentSum = Math.max(n, currentSum + n);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Best sum is composed of subarray: [4, -1, 2, 1] = 6.
console.log(kadaneAlgorithmMaxSumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
