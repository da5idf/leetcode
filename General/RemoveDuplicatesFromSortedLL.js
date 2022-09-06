var deleteDuplicates = function (head) {
    if (!head) return head;

    let current = head;
    while (current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }
    return head;
};

// var deleteDuplicates = function(head) {
//     if (!head) return head;
    
//     let current = head;
//     while (current && current.next) {
//         let next = current.next;
//         while (next && current.val === next.val) {
//             next = next.next;
//         }
//         current.next = next;
//         current = current.next;
//     }
//     return head;
// };