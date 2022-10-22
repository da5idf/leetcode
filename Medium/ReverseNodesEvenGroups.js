var reverseEvenLengthGroups = function (head) {
    let current = head;
    let count = 1;
    let prev = null;

    while (current) {

        let prevGroupTail = prev;
        let segmentCount = 0;
        for (let i = 0; i < count && current; i++) {
            prev = current;
            current = current.next;
            segmentCount++;
        }

        if (segmentCount % 2 === 0) {
            [prev, current] = reverseSegment(prevGroupTail, prevGroupTail.next, segmentCount);
        }
        count++;
    }
    return head;
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