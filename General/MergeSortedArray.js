var merge = function (nums1, m, nums2, n) {
    let length = m + n;
    let pointer1 = m - 1;
    let pointer2 = n - 1;

    for (let i = length - 1; i >= 0; i--) {
        if (pointer1 < 0) {
            nums1[i] = nums2[pointer2];
            pointer2--;
        }
        else if (pointer2 < 0) {
            nums1[i] = nums1[pointer1];
            pointer1--;
        }
        else if (nums1[pointer1] >= nums2[pointer2]) {
            nums1[i] = nums1[pointer1]
            pointer1--;
        } else {
            nums1[i] = nums2[pointer2];
            pointer2--;
        }
    }
    return nums1
};