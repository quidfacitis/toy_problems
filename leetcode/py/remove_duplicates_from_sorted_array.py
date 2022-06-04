from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        k = 1
        currentElement = nums[0]
        for i in range(0, len(nums)):
            num = nums[i]
            if num != currentElement:
                nums[k] = num
                k += 1
                currentElement = num

            if i != k - 1:
                nums[i] = '_'

        return k


if __name__ == "__main__":
    s = Solution()
    print(s.removeDuplicates([0,0,1,1,1,2,2,3,3,4])) # 5
    print(s.removeDuplicates([1,1,2])) # 2
    print(s.removeDuplicates([1,2])) # 2