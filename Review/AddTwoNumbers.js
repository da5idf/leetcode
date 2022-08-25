var addTwoNumbers = function (l1, l2) {

    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let next = null;
    let carry = 0;
    while (l1 || l2 || carry) {
        let num1 = l1 ? l1.val : 0;
        let num2 = l2 ? l2.val : 0;
        let nextNodeVal = (num1 + num2 + carry) % 10;
        carry = Math.floor((num1 + num2 + carry) / 10)
        current.next = new ListNode(nextNodeVal);
        current = current.next;
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    return dummyHead.next;
};