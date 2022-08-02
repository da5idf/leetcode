var mergeTwoLists = function (list1, list2) {

    let head;
    if (!list1 && !list2) return null;
    else if (!list1) return list2;
    else if (!list2) return list1;
    else {
        if (list1.val < list2.val) {
            head = list1;
            list1 = list1.next;
        } else {
            head = list2;
            list2 = list2.next;
        }
        let current = head;
        while (list1 !== null && list2 !== null) {
            if (list1.val < list2.val) {
                current.next = list1;
                current = current.next;
                list1 = list1.next
            } else {
                current.next = list2;
                current = current.next;
                list2 = list2.next;
            }
        }
        list1 === null ? current.next = list2 : current.next = list1;
    }

    return head;

};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));