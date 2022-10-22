var reverseKGroup = function (head, k) {
    if (k === 1) return head;

    let dummy = new ListNode(0, head);
    let prev = dummy;
    let current = head.next;
    while (current) {

        let segmentCount = 0;
        let prevSegmentTail = prev;
        for (let i = 0; i < k && current; i++) {
            prev = current;
            current = current.next;
            segmentCount++;
        }

        if (segmentCount === k) {
            [prev, current] = reverseSegment(prevSegmentTail, prevSegmentTail.next, k)
        }
    }
    return dummy.next;
}

var reverseSegment = function (prev, current, count) {
    let head = prev;
    let tail = current;
    for (let i = 0; i < count && current; i++) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    head.next = prev;
    tail.next = current;

    return [tail, current]
}