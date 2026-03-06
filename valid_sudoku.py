class Solution(object):
    def isValidSudoku(self, board):
        for i in range(9):
            t = []
            
            # Check row
            for j in range(9):
                if board[i][j] != ".":
                    if board[i][j] in t:
                        return False
                    t.append(board[i][j])
            
            t = []
            # Check column
            for j in range(9):
                if board[j][i] != ".":
                    if board[j][i] in t:
                        return False
                    t.append(board[j][i])
            
            t = []
            # Check 3x3 subgrid
            x, y = i // 3 * 3, i % 3 * 3
            for j in range(3):
                for k in range(3):
                    if board[x + j][y + k] != ".":
                        if board[x + j][y + k] in t:
                            return False
                        t.append(board[x + j][y + k])
        
        return True
