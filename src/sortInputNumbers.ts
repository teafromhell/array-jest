export const sortInputNumbers = (nums: number[]): string | number => {
  nums = nums.sort((a, b) => a - b);

  let sum: number = 0;
  let check: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!Number.isNaN(nums[i]) && check < 2) {
      sum = sum + nums[i];
      check++;
      if (check === 2) {
        return sum;
      }
    }
  }

  if (check === 1) return sum;
  return "no numbers were added";
};
