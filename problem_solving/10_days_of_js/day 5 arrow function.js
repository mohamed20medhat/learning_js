/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      result.push(nums[i] * 2);
    } else {
      result.push(nums[i] * 3);
    }
  }

  return result;
  // console.log(nums[0])
}
