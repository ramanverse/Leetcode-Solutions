class Solution(object):
    def canJump(self, nums):
        cur = 0
        i, n = 0, len(nums)
        
        while i <= cur:
            if cur >= n - 1:
                return True
            
            cur = max(cur, i + nums[i])
            i += 1
        
        return False
