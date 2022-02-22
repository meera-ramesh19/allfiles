# This is my solution for AlgoDaily problem Majority Element
# Located at https://algodaily.com/challenges/majority-element

###
# @param {number[]} nums
# @return {number}
###
from math import floor


def majority_element(nums):
     freq_dict={}
     for i in nums:
        if i in freq_dict.keys():
          freq_dict[i]+=1
        else:
          freq_dict[i]=1   
     keys,max_value=next(iter(freq_dict.items()))

     for k,v in freq_dict.items():
         if v > max_value:
            keys,max_value=freq_dict.items()
     return keys

print(majority_element([1, 1, 1, 4, 2, 4, 4, 3, 1, 1, 1]))

