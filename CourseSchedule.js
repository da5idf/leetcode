class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

var canFinish = function (numCourses, prerequisites) {

    for (let i = 0; i < prerequisites.length; i++) {
        let prereq = prerequisites[i];
        let nextClass = prereq[0]
        let reqClass = prereq[1]

        const nextNode = new Node(nextClass, null)
        const reqNode = new Node(reqClass, reqClass)
    }
}

var hasCycle = function (head) {

    if (!head) return false;

    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
        if (slow === fast) return true
        slow = slow.next;
        fast = fast.next.next
    }
    return false
}