---
title: "Daily Leetcode 01"
date: 2025-07-14
excerpt: "Today's problem and solution approach for the daily LeetCode challenge."
tags: ["leetcode", "algorithms", "python"]
category: "coding"
---

Today's problem ...

## Solution

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]
        return []

```

- [x] write down intuition
- [x] write down approach
- [x] first test
- [ ] second test