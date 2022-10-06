var detectCycle = function (head) {
    if (!head || !head.next) return null;

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next
        if (slow === fast) break;
    }

    if (fast !== slow) return null;

    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow
};

/*
var detectCycle = function(head) {
   
    let current = head;
    let visited = new Set().add(head);
    while (current) {
        current = current.next;
        if (visited.has(current)) return current
        visited.add(current);
    }
    return null
};
*/