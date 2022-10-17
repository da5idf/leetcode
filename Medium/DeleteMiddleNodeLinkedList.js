var deleteMiddle = function (head) {
    let slow = head;
    let fast = head;

    let count = 0;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        count++
    }

    const deleteNode = slow.next;
    slow.next = deleteNode.next;
    deleteNode.next = null;

    return head;
};