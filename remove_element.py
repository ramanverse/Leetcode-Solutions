class Solution(object):
    def removeElement(self, nums, val):
        p = 0
        
        for num in nums:
            if num != val:
                nums[p] = num
                p += 1
        
        return p
