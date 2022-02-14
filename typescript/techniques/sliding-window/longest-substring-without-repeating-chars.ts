function longestSubstringWithoutRepeatingChars(str: string): number {
  let charSet: Set<string> = new Set<string>();
  let start: number = 0;
  let maxLength: number = Number.NEGATIVE_INFINITY;

  for (let curr = 0; curr < str.length; curr++) {
    while (charSet.has(str[curr])) {
      charSet.delete(str[start]);
      start++;
    }

    charSet.add(str[curr]);

    maxLength = Math.max(maxLength, curr - start + 1);
  }

  return maxLength;
}

// If there is repetition, we need to remove all elements from left until repetition is gone (shrink the window).
console.log(longestSubstringWithoutRepeatingChars("abcdefabcbb"));
