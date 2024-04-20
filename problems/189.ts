// 189. Rotate Array

console.clear()

// function rotate(nums: number[], k: number): void {
//   for (let i = 1; i <= k; i++) {
//     nums.unshift(nums.pop()!)
//   }
// }

// function rotate(nums: number[], k: number): void {
//   const remove = nums.splice(nums.length - (k % nums.length), k)
//   nums.unshift(...remove)
// }

function rotate(nums: number[], k: number): void {
  k = k % nums.length

  for (
    let left = 0, right = nums.length - 1;
    right > left;
    left++, right--
  ) {
    [nums[left], nums[right]] = [nums[right], nums[left]]
  }

  console.log(nums)

  for (
    let left = 0, right = k - 1;
    right > left;
    left++, right--
  ) {
    [nums[left], nums[right]] = [nums[right], nums[left]]
  }

  console.log(nums)

  for (
    let left = k, right = nums.length - 1;
    right > left;
    left++, right--
  ) {
    [nums[left], nums[right]] = [nums[right], nums[left]]
  }

  console.log(nums)
}

rotate([1, 2, 3, 4, 5, 6, 7], 3)
rotate([1, 2], 5)

export {}
