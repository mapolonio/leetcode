class Solution(object):
    def twoSum(self, nums, target):
        for i, first in enumerate(nums):
            if i < len(nums):
                for j, second in enumerate(nums[i + 1:], i + 1):
                    if first + second == target:
                        return [i, j]
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
