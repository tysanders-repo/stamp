---
title: "Daily Leetcode 01"
date: 2025-07-14
excerpt: "Today's problem and solution approach for the daily LeetCode challenge."
tags: ["leetcode", "algorithms", "python"]
category: "coding"
---

Today's problem: 3201. Find the Maximum Length of Valid Subsequence I

We are given a integer array `nums`, and we want to find the maximum length of a subsequence `sub` with length `x` that satisfies the following conditions:

```
(sub[0] + sub[1]) % 2 == (sub[1] + sub[2]) % 2 == ... == (sub[x - 2] + sub[x - 1]) % 2
```

essentially, we want to find the longest subsequence where the sum of consecutive elements is either all even or all odd (0 or 1). We notice a pattern here:

1) odd + even = odd
2) odd + odd = even
3) even + even = even

in (1) we notice that since additon is commutative, the order of the elements does not matter.
we can then safely say that instead of tracking the sum of each consecutive pair, we can just track the parity (whether it is even or odd) of each element. As long as the sequence follows the alternating or all odd all even pattern, we can return the length of the sequence.

my first solution looked like this:

```python
def allMatch(nums):
    i = 1
    parity = nums[0] % 2
    for n in nums[1:]:
        if n % 2 != parity:
            pass
        else:
            i += 1
    return i

def alternating(nums):
    i = 1
    parity = nums[0] % 2
    for n in nums[1:]:
        if n % 2 == parity:
            pass
        else:
            parity = parity ^ 1
            i += 1
    return i

class Solution:
    def maximumLength(self, nums: List[int]) -> int:
        #if the sequence is len 2 return len
        if (len(nums) == 2): return 2

        matching = allMatch(nums)
        alternate = alternating(nums)

        return max(matching, alternate)
```

this passes 784/951 of the test cases. it fails on the following test case:
```
[1,8,4,2,4]
```
it's pretty clear that the sequence is a good match for all even, since every element except the first is even. however, our first solution fails to account for when the first element is the problem child. Since it determines the parity of the sequence based on the first element, it will fail if the first element is odd. We can also notice that the function would fail if the sequence has a lot of odd elements and then millions of even elements. Instead of trying to guess what the most common parity is, we can just "construct" a subsequence that is all even and all odd at the same time. Since we don't actually need to return the subsequence, we can just return the length of the subsequence, we can just track the length of both even and odd subsequences and return the max of the two.

```python
def allMatch(nums):
    i, j = 0, 0
    parity = nums[0] % 2
    for n in nums:
        if n % 2 != parity:
            j += 1
        else:
            i += 1
    return max(i, j)
```

That's it! we passed all the test cases. Our runtime, since we iterate through the array twice is 2N, or O(N). That's pretty good!

Thanks for reading!





