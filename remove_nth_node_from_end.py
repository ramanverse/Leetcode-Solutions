# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def removeNthFromEnd(self, head, n):
        dummy = ListNode(-1)
        dummy.next = head
        
        p, q = dummy, dummy
        
        for _ in range(n):
            p = p.next
        
        while p.next:
            p = p.next
            q = q.next
        
        q.next = q.next.next
        
        return dummy.next
