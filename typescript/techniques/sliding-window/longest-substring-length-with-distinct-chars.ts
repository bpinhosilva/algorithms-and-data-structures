/**
 * Get longest substring with maximum k distinct characters
 * For example, with k = 2 => aaaaaabbb is allowed, but not aaabbbc
 * @param str
 * @param k
 * @returns longest substring length
 */
function longestSubstringLengthWithDistinctChars(
  str: string,
  k: number
): number {
  let charMap: Map<string, number> = new Map<string, number>();
  let start: number = 0;
  let longestSubstring: number = Number.NEGATIVE_INFINITY;

  for (let curr = 0; curr < str.length; curr++) {
    if (charMap.has(str[curr])) {
      charMap.set(str[curr], charMap.get(str[curr]) + 1);
    } else {
      charMap.set(str[curr], 1);
    }

    while (charMap.size > k) {
      charMap.set(str[start], charMap.get(str[start]) - 1);

      if (charMap.get(str[start]) === 0) {
        charMap.delete(str[start]);
      }

      start++;
    }

    longestSubstring = Math.max(longestSubstring, curr - start + 1);
  }

  return longestSubstring;
}

console.log(longestSubstringLengthWithDistinctChars("bbccccef", 2));
