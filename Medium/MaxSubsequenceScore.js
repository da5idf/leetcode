/*
First we zip nums1 and nums2 and sort by decreasing order of nums2.
    For the example nums1 = [1,3,3,2], nums2 = [2,1,3,4], k = 3 we have:
    zipped = 4 3 2 1 --> from nums2
             2 3 1 3 --> from nums1
    zipped = [[4, 2], [3, 3], [2, 1], [1, 3]]

By sorting in decreasing order of nums2, we ensure that once we reach i = k - 1
    the min multiplier maps to zipped[i][0]

The next key step to keep track of what values from nums1 we want to use. 
    We do so by using a min queue. To initialize this step, we iterate from 0 <= i < k
    adding zipped[i][1] i.e. the value from nums1 that maps to the sorted nums2.
    We also add to a topKSum variable that tracks the current running sum.

At the end of this loop, we have k values in our min queue, so we can calculate an initial ans.

Next, we iterate from k <= i < nums1.length.
    At each step, we add the value from nums1 that maps to nums2 at idx i.
    We also SUBTRACT the value at the top of the min queue i.e. the smallest value we've 'seen'
        from nums1 thus far. 
        zipped =    x1, x2, x3, x4, x5, x6, x7, x8
                    y1, y2, y3, y4, y5, y6, y7, y8
        Say k = 3 and we are evaluating (x7, y7)
        We know (becasue of how we constructed zipped) that y7 is the min multiplier.
            But how do we know which 3 x values from (x1, x2, x3, x4, x5, x6, x7) we must use?
            By the definition of the problem, we must use x7. Then since we don't care about y values anymore,
            we just want the max 2 x's from the remaining x values.
                By keeping track of x values in a min queue, we know we are removing the smallest
                x value as we dequeue. In other words, the min queue contains the max (k - 1) max x values
                and the x value at index i, the current index of the loop
        
    Finally, we reevaluate the ans

*/


var maxScore = function (nums1, nums2, k) {
    let zipped = []
    for (let i = 0; i < nums1.length; i++) {
        zipped.push([nums2[i], nums1[i]]);
    }
    zipped.sort((a, b) => b[0] - a[0])

    const pq = new MinPriorityQueue({ priority: x => x })
    let topKSum = 0;
    for (let i = 0; i < k; i++) {
        pq.enqueue(zipped[i][1]);
        topKSum += zipped[i][1];
    }

    let ans = topKSum * zipped[k - 1][0];
    for (let i = k; i < nums1.length; i++) {

        topKSum += zipped[i][1] - pq.dequeue().element;
        pq.enqueue(zipped[i][1]);

        ans = Math.max(ans, topKSum * zipped[i][0])
    }

    return ans;
};