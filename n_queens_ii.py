class Solution(object):
    def totalNQueens(self, n):
        self.ans = 0
        self._totalNQueens(n, [], [], [])
        return self.ans

    def _totalNQueens(self, n, xysum, xydiff, cur):
        cur_row = len(cur)
        
        if cur_row == n:
            self.ans += 1
            return
        
        for col in range(n):
            if (col not in cur and
                cur_row + col not in xysum and
                cur_row - col not in xydiff):
                
                self._totalNQueens(
                    n,
                    xysum + [cur_row + col],
                    xydiff + [cur_row - col],
                    cur + [col]
                )
