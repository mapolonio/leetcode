class Solution(object):
  def lengthOfLongestSubstring(self, s):
      """
      :type s: str
      :rtype: int
      """
      longest = ""
      
      for i, char1 in enumerate(s):
          current = char1
          
          if (i + 1 != len(s) ):            
              for char2 in s[i + 1:]:
                if char2 in current:
                  break
                
                current += char2
                  
          if len(current) > len(longest):
              longest = current

      return len(longest)
