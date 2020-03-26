# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        first = self.getNumberFromList(l1)
        second = self.getNumberFromList(l2)

        return self.toNodeList(str(int(first) + int(second)))

    def getNumberFromList(self, listNode, acc=''):
        if listNode == None:
            return acc

        return self.getNumberFromList(listNode.next, str(listNode.val) + acc)

    def toNodeList(self, n):
        if len(n) == 0:
            return None

        node = ListNode(n[-1])
        node.next = self.toNodeList(n[:-1])

        return node
