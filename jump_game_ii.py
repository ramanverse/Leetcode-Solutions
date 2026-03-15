class Solution(object):
    def jump(self, nums):
        ans = 0  # number of jumps
        cur1 = 0  # current jump boundary
        cur2 = 0  # farthest reachable
        
        for i in range(len(nums)):
            if cur1 < i:
                cur1 = cur2
                ans += 1
            
            cur2 = max(cur2, i + nums[i])
        
        return ans
