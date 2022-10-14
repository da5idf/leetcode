var deleteNode = function (node) {
    const nextNode = node.next;
    node.val = nextNode.val;
    node.next = nextNode.next;
    nextNode.next = null;
};