class Solution(object):
    def trap(self, height):
        l, r, ans = 0, len(height) - 1, 0
        
        while l < r:
            t = min(height[l], height[r])
            
            while l < r and height[l] <= t:
                ans += t - height[l]
                l += 1
            
            while l < r and height[r] <= t:
                ans += t - height[r]
                r -= 1
        
        return ans
