/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  const swap = (index1: number, index2: number) => {
    const temp = nums[index1]
    nums[index1] = nums[index2]
    nums[index2] = temp
  }

  console.log(nums)

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = nums.length - 1; j > i; j--) {
      console.log('j: ', j)
      console.log(nums[j - 1], nums[j])

      if (nums[j - 1] > nums[j]) {
        swap(j - 1, j)
      }

      console.log(nums)
    }
  }
}

sortColors([2, 0, 2, 1, 1, 0])

