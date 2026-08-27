// 271. Encode and Decode Strings
// 最後練習時間：2024-04-27
// https://leetcode.com/problems/encode-and-decode-strings/

console.clear()

/**
 * Encodes a list of strings to a single string.
 */
function encode(strs: string[]): string {
  return strs.join('😀')
}

/**
 * Decodes a single string to a list of strings.
 */
function decode(s: string): string[] {
  return s.split('😀')
}

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

console.log(encode(['Hello', 'World'])) // Expected: Hello😀World
console.log(decode('Hello😀World')) // Expected: [ 'Hello', 'World' ]

