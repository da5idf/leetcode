var reverseKGroup = function (head, k) {

}

var swapNodes = function (head) {
    if (!head || !head.next) return head;

    let dummy = new ListNode(0, head);
    let prev = dummy;
    let current = head;
    while (current && current.next) {
        let next = current.next.next;

        let swap = current.next;
        prev.next = swap;
        swap.next = current;
        current.next = next;
        prev = current;
        current = next;
    }
    return dummy.next;
}

var reverseList = function (head) {

    if (!head) return null;

    if (!head.next) return head;

    newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return newHead;
};