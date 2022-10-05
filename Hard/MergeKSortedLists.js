var mergeKLists = function (lists) {
    if (!lists.length) return lists;

    const heads = [];
    let remaining = 0;
    for (let i = 0; i < lists.length; i++) {
        if (lists[i] === []) continue;
        heads[i] = lists[i];
        remaining++;
    }

    const dummy = new ListNode(0);
    let current = dummy;
    while (remaining > 0) {
        let nextNode = new ListNode(10001)
        let nextNodeIdx = 0
        for (let i = 0; i < heads.length; i++) {
            if (heads[i] && heads[i].val < nextNode.val) {
                nextNode = heads[i];
                nextNodeIdx = i;
            }
        }
        heads[nextNodeIdx] = heads[nextNodeIdx].next;
        if (heads[nextNodeIdx] === null) remaining--;

        current.next = nextNode;
        current = current.next;
    }

    return dummy.next;
}