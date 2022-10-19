const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

var minimumCost = function (n, highways, discounts) {
    // first we need to initialize our bi-directional adjacency map
    const roadMap = {};
    for (const [start, end, toll] of highways) {
        if (!roadMap[start]) roadMap[start] = [];
        if (!roadMap[end]) roadMap[end] = [];

        roadMap[start].push([end, toll]);
        roadMap[end].push([start, toll]);
    }

    // we can return right away if the source node isn't connected to any other city
    if (!roadMap[0]) return -1

    // initialize a MinPriorityQueue where minHeap[i] = [cost, city, remainingDiscounts]
    // We prioritize by low cost to high cost.
    // You can simply use this package when running your code on Leetcode. 
    // Otherwise see comment below for slight adjustments in lines with *
    let minHeap = new MinPriorityQueue(a => a[0]); // * 1
    minHeap.enqueue([0, 0, discounts])

    // We initialize a cost array tripCosts where tripCosts[i] = cost to get to city i
    const tripCosts = new Array(n + 1).fill(Infinity);
    while (!minHeap.isEmpty()) {
        // (a) the next element on the heap is the cheapest path we have yet to evaluate
        const [cost, city, remainingDiscounts] = minHeap.dequeue() // * 2

        // because of (a) if city = n - 1 then we can return the cost from the element we dequeued.
        if (city === n - 1) return cost;

        // The first criteria is straight forward: if the cost from this element is > current cost to get to city, skip.
        // The second criteria catches cases where it's best to apply a discount to an expensive edge  
        if (cost >= tripCosts[city] && remainingDiscounts === 0) continue;

        // if we reach this line, cost < tripCosts[city] so update
        tripCosts[city] = cost;

        // evaluate each edge from this node
        for (const [nextCity, nextToll] of roadMap[city]) {
            // The current cost to next city is tripCosts[nextCity]
            // so if cost + nextToll < tripCosts[nextCity] we want to enqueue this element.
            // Moreover, if we have remaining discounts, we enqueue 2 elements-- 1 with discount, one without. 
            if (cost + nextToll < tripCosts[nextCity]) {
                minHeap.enqueue([cost + nextToll, nextCity, remainingDiscounts]);
                if (remainingDiscounts > 0) {
                    // ~~(nextToll / 2) = Math.floor(nextToll / 2) using bit operators.
                    minHeap.enqueue([cost + ~~(nextToll / 2), nextCity, remainingDiscounts - 1])
                }
            }
        }
    }
    // we never reached our destination from the source node so return -1
    return -1;
};

let n = 1000
let highways = [[0, 1, 100000], [1, 2, 100000], [2, 3, 100000], [3, 4, 100000], [4, 5, 100000], [5, 6, 100000], [6, 7, 100000], [7, 8, 100000], [8, 9, 100000], [9, 10, 100000], [10, 11, 100000], [11, 12, 100000], [12, 13, 100000], [13, 14, 100000], [14, 15, 100000], [15, 16, 100000], [16, 17, 100000], [17, 18, 100000], [18, 19, 100000], [19, 20, 100000], [20, 21, 100000], [21, 22, 100000], [22, 23, 100000], [23, 24, 100000], [24, 25, 100000], [25, 26, 100000], [26, 27, 100000], [27, 28, 100000], [28, 29, 100000], [29, 30, 100000], [30, 31, 100000], [31, 32, 100000], [32, 33, 100000], [33, 34, 100000], [34, 35, 100000], [35, 36, 100000], [36, 37, 100000], [37, 38, 100000], [38, 39, 100000], [39, 40, 100000], [40, 41, 100000], [41, 42, 100000], [42, 43, 100000], [43, 44, 100000], [44, 45, 100000], [45, 46, 100000], [46, 47, 100000], [47, 48, 100000], [48, 49, 100000], [49, 50, 100000], [50, 51, 100000], [51, 52, 100000], [52, 53, 100000], [53, 54, 100000], [54, 55, 100000], [55, 56, 100000], [56, 57, 100000], [57, 58, 100000], [58, 59, 100000], [59, 60, 100000], [60, 61, 100000], [61, 62, 100000], [62, 63, 100000], [63, 64, 100000], [64, 65, 100000], [65, 66, 100000], [66, 67, 100000], [67, 68, 100000], [68, 69, 100000], [69, 70, 100000], [70, 71, 100000], [71, 72, 100000], [72, 73, 100000], [73, 74, 100000], [74, 75, 100000], [75, 76, 100000], [76, 77, 100000], [77, 78, 100000], [78, 79, 100000], [79, 80, 100000], [80, 81, 100000], [81, 82, 100000], [82, 83, 100000], [83, 84, 100000], [84, 85, 100000], [85, 86, 100000], [86, 87, 100000], [87, 88, 100000], [88, 89, 100000], [89, 90, 100000], [90, 91, 100000], [91, 92, 100000], [92, 93, 100000], [93, 94, 100000], [94, 95, 100000], [95, 96, 100000], [96, 97, 100000], [97, 98, 100000], [98, 99, 100000], [99, 100, 100000], [100, 101, 100000], [101, 102, 100000], [102, 103, 100000], [103, 104, 100000], [104, 105, 100000], [105, 106, 100000], [106, 107, 100000], [107, 108, 100000], [108, 109, 100000], [109, 110, 100000], [110, 111, 100000], [111, 112, 100000], [112, 113, 100000], [113, 114, 100000], [114, 115, 100000], [115, 116, 100000], [116, 117, 100000], [117, 118, 100000], [118, 119, 100000], [119, 120, 100000], [120, 121, 100000], [121, 122, 100000], [122, 123, 100000], [123, 124, 100000], [124, 125, 100000], [125, 126, 100000], [126, 127, 100000], [127, 128, 100000], [128, 129, 100000], [129, 130, 100000], [130, 131, 100000], [131, 132, 100000], [132, 133, 100000], [133, 134, 100000], [134, 135, 100000], [135, 136, 100000], [136, 137, 100000], [137, 138, 100000], [138, 139, 100000], [139, 140, 100000], [140, 141, 100000], [141, 142, 100000], [142, 143, 100000], [143, 144, 100000], [144, 145, 100000], [145, 146, 100000], [146, 147, 100000], [147, 148, 100000], [148, 149, 100000], [149, 150, 100000], [150, 151, 100000], [151, 152, 100000], [152, 153, 100000], [153, 154, 100000], [154, 155, 100000], [155, 156, 100000], [156, 157, 100000], [157, 158, 100000], [158, 159, 100000], [159, 160, 100000], [160, 161, 100000], [161, 162, 100000], [162, 163, 100000], [163, 164, 100000], [164, 165, 100000], [165, 166, 100000], [166, 167, 100000], [167, 168, 100000], [168, 169, 100000], [169, 170, 100000], [170, 171, 100000], [171, 172, 100000], [172, 173, 100000], [173, 174, 100000], [174, 175, 100000], [175, 176, 100000], [176, 177, 100000], [177, 178, 100000], [178, 179, 100000], [179, 180, 100000], [180, 181, 100000], [181, 182, 100000], [182, 183, 100000], [183, 184, 100000], [184, 185, 100000], [185, 186, 100000], [186, 187, 100000], [187, 188, 100000], [188, 189, 100000], [189, 190, 100000], [190, 191, 100000], [191, 192, 100000], [192, 193, 100000], [193, 194, 100000], [194, 195, 100000], [195, 196, 100000], [196, 197, 100000], [197, 198, 100000], [198, 199, 100000], [199, 200, 100000], [200, 201, 100000], [201, 202, 100000], [202, 203, 100000], [203, 204, 100000], [204, 205, 100000], [205, 206, 100000], [206, 207, 100000], [207, 208, 100000], [208, 209, 100000], [209, 210, 100000], [210, 211, 100000], [211, 212, 100000], [212, 213, 100000], [213, 214, 100000], [214, 215, 100000], [215, 216, 100000], [216, 217, 100000], [217, 218, 100000], [218, 219, 100000], [219, 220, 100000], [220, 221, 100000], [221, 222, 100000], [222, 223, 100000], [223, 224, 100000], [224, 225, 100000], [225, 226, 100000], [226, 227, 100000], [227, 228, 100000], [228, 229, 100000], [229, 230, 100000], [230, 231, 100000], [231, 232, 100000], [232, 233, 100000], [233, 234, 100000], [234, 235, 100000], [235, 236, 100000], [236, 237, 100000], [237, 238, 100000], [238, 239, 100000], [239, 240, 100000], [240, 241, 100000], [241, 242, 100000], [242, 243, 100000], [243, 244, 100000], [244, 245, 100000], [245, 246, 100000], [246, 247, 100000], [247, 248, 100000], [248, 249, 100000], [249, 250, 100000], [250, 251, 100000], [251, 252, 100000], [252, 253, 100000], [253, 254, 100000], [254, 255, 100000], [255, 256, 100000], [256, 257, 100000], [257, 258, 100000], [258, 259, 100000], [259, 260, 100000], [260, 261, 100000], [261, 262, 100000], [262, 263, 100000], [263, 264, 100000], [264, 265, 100000], [265, 266, 100000], [266, 267, 100000], [267, 268, 100000], [268, 269, 100000], [269, 270, 100000], [270, 271, 100000], [271, 272, 100000], [272, 273, 100000], [273, 274, 100000], [274, 275, 100000], [275, 276, 100000], [276, 277, 100000], [277, 278, 100000], [278, 279, 100000], [279, 280, 100000], [280, 281, 100000], [281, 282, 100000], [282, 283, 100000], [283, 284, 100000], [284, 285, 100000], [285, 286, 100000], [286, 287, 100000], [287, 288, 100000], [288, 289, 100000], [289, 290, 100000], [290, 291, 100000], [291, 292, 100000], [292, 293, 100000], [293, 294, 100000], [294, 295, 100000], [295, 296, 100000], [296, 297, 100000], [297, 298, 100000], [298, 299, 100000], [299, 300, 100000], [300, 301, 100000], [301, 302, 100000], [302, 303, 100000], [303, 304, 100000], [304, 305, 100000], [305, 306, 100000], [306, 307, 100000], [307, 308, 100000], [308, 309, 100000], [309, 310, 100000], [310, 311, 100000], [311, 312, 100000], [312, 313, 100000], [313, 314, 100000], [314, 315, 100000], [315, 316, 100000], [316, 317, 100000], [317, 318, 100000], [318, 319, 100000], [319, 320, 100000], [320, 321, 100000], [321, 322, 100000], [322, 323, 100000], [323, 324, 100000], [324, 325, 100000], [325, 326, 100000], [326, 327, 100000], [327, 328, 100000], [328, 329, 100000], [329, 330, 100000], [330, 331, 100000], [331, 332, 100000], [332, 333, 100000], [333, 334, 100000], [334, 335, 100000], [335, 336, 100000], [336, 337, 100000], [337, 338, 100000], [338, 339, 100000], [339, 340, 100000], [340, 341, 100000], [341, 342, 100000], [342, 343, 100000], [343, 344, 100000], [344, 345, 100000], [345, 346, 100000], [346, 347, 100000], [347, 348, 100000], [348, 349, 100000], [349, 350, 100000], [350, 351, 100000], [351, 352, 100000], [352, 353, 100000], [353, 354, 100000], [354, 355, 100000], [355, 356, 100000], [356, 357, 100000], [357, 358, 100000], [358, 359, 100000], [359, 360, 100000], [360, 361, 100000], [361, 362, 100000], [362, 363, 100000], [363, 364, 100000], [364, 365, 100000], [365, 366, 100000], [366, 367, 100000], [367, 368, 100000], [368, 369, 100000], [369, 370, 100000], [370, 371, 100000], [371, 372, 100000], [372, 373, 100000], [373, 374, 100000], [374, 375, 100000], [375, 376, 100000], [376, 377, 100000], [377, 378, 100000], [378, 379, 100000], [379, 380, 100000], [380, 381, 100000], [381, 382, 100000], [382, 383, 100000], [383, 384, 100000], [384, 385, 100000], [385, 386, 100000], [386, 387, 100000], [387, 388, 100000], [388, 389, 100000], [389, 390, 100000], [390, 391, 100000], [391, 392, 100000], [392, 393, 100000], [393, 394, 100000], [394, 395, 100000], [395, 396, 100000], [396, 397, 100000], [397, 398, 100000], [398, 399, 100000], [399, 400, 100000], [400, 401, 100000], [401, 402, 100000], [402, 403, 100000], [403, 404, 100000], [404, 405, 100000], [405, 406, 100000], [406, 407, 100000], [407, 408, 100000], [408, 409, 100000], [409, 410, 100000], [410, 411, 100000], [411, 412, 100000], [412, 413, 100000], [413, 414, 100000], [414, 415, 100000], [415, 416, 100000], [416, 417, 100000], [417, 418, 100000], [418, 419, 100000], [419, 420, 100000], [420, 421, 100000], [421, 422, 100000], [422, 423, 100000], [423, 424, 100000], [424, 425, 100000], [425, 426, 100000], [426, 427, 100000], [427, 428, 100000], [428, 429, 100000], [429, 430, 100000], [430, 431, 100000], [431, 432, 100000], [432, 433, 100000], [433, 434, 100000], [434, 435, 100000], [435, 436, 100000], [436, 437, 100000], [437, 438, 100000], [438, 439, 100000], [439, 440, 100000], [440, 441, 100000], [441, 442, 100000], [442, 443, 100000], [443, 444, 100000], [444, 445, 100000], [445, 446, 100000], [446, 447, 100000], [447, 448, 100000], [448, 449, 100000], [449, 450, 100000], [450, 451, 100000], [451, 452, 100000], [452, 453, 100000], [453, 454, 100000], [454, 455, 100000], [455, 456, 100000], [456, 457, 100000], [457, 458, 100000], [458, 459, 100000], [459, 460, 100000], [460, 461, 100000], [461, 462, 100000], [462, 463, 100000], [463, 464, 100000], [464, 465, 100000], [465, 466, 100000], [466, 467, 100000], [467, 468, 100000], [468, 469, 100000], [469, 470, 100000], [470, 471, 100000], [471, 472, 100000], [472, 473, 100000], [473, 474, 100000], [474, 475, 100000], [475, 476, 100000], [476, 477, 100000], [477, 478, 100000], [478, 479, 100000], [479, 480, 100000], [480, 481, 100000], [481, 482, 100000], [482, 483, 100000], [483, 484, 100000], [484, 485, 100000], [485, 486, 100000], [486, 487, 100000], [487, 488, 100000], [488, 489, 100000], [489, 490, 100000], [490, 491, 100000], [491, 492, 100000], [492, 493, 100000], [493, 494, 100000], [494, 495, 100000], [495, 496, 100000], [496, 497, 100000], [497, 498, 100000], [498, 499, 100000], [499, 500, 100000], [500, 501, 100000], [501, 502, 100000], [502, 503, 100000], [503, 504, 100000], [504, 505, 100000], [505, 506, 100000], [506, 507, 100000], [507, 508, 100000], [508, 509, 100000], [509, 510, 100000], [510, 511, 100000], [511, 512, 100000], [512, 513, 100000], [513, 514, 100000], [514, 515, 100000], [515, 516, 100000], [516, 517, 100000], [517, 518, 100000], [518, 519, 100000], [519, 520, 100000], [520, 521, 100000], [521, 522, 100000], [522, 523, 100000], [523, 524, 100000], [524, 525, 100000], [525, 526, 100000], [526, 527, 100000], [527, 528, 100000], [528, 529, 100000], [529, 530, 100000], [530, 531, 100000], [531, 532, 100000], [532, 533, 100000], [533, 534, 100000], [534, 535, 100000], [535, 536, 100000], [536, 537, 100000], [537, 538, 100000], [538, 539, 100000], [539, 540, 100000], [540, 541, 100000], [541, 542, 100000], [542, 543, 100000], [543, 544, 100000], [544, 545, 100000], [545, 546, 100000], [546, 547, 100000], [547, 548, 100000], [548, 549, 100000], [549, 550, 100000], [550, 551, 100000], [551, 552, 100000], [552, 553, 100000], [553, 554, 100000], [554, 555, 100000], [555, 556, 100000], [556, 557, 100000], [557, 558, 100000], [558, 559, 100000], [559, 560, 100000], [560, 561, 100000], [561, 562, 100000], [562, 563, 100000], [563, 564, 100000], [564, 565, 100000], [565, 566, 100000], [566, 567, 100000], [567, 568, 100000], [568, 569, 100000], [569, 570, 100000], [570, 571, 100000], [571, 572, 100000], [572, 573, 100000], [573, 574, 100000], [574, 575, 100000], [575, 576, 100000], [576, 577, 100000], [577, 578, 100000], [578, 579, 100000], [579, 580, 100000], [580, 581, 100000], [581, 582, 100000], [582, 583, 100000], [583, 584, 100000], [584, 585, 100000], [585, 586, 100000], [586, 587, 100000], [587, 588, 100000], [588, 589, 100000], [589, 590, 100000], [590, 591, 100000], [591, 592, 100000], [592, 593, 100000], [593, 594, 100000], [594, 595, 100000], [595, 596, 100000], [596, 597, 100000], [597, 598, 100000], [598, 599, 100000], [599, 600, 100000], [600, 601, 100000], [601, 602, 100000], [602, 603, 100000], [603, 604, 100000], [604, 605, 100000], [605, 606, 100000], [606, 607, 100000], [607, 608, 100000], [608, 609, 100000], [609, 610, 100000], [610, 611, 100000], [611, 612, 100000], [612, 613, 100000], [613, 614, 100000], [614, 615, 100000], [615, 616, 100000], [616, 617, 100000], [617, 618, 100000], [618, 619, 100000], [619, 620, 100000], [620, 621, 100000], [621, 622, 100000], [622, 623, 100000], [623, 624, 100000], [624, 625, 100000], [625, 626, 100000], [626, 627, 100000], [627, 628, 100000], [628, 629, 100000], [629, 630, 100000], [630, 631, 100000], [631, 632, 100000], [632, 633, 100000], [633, 634, 100000], [634, 635, 100000], [635, 636, 100000], [636, 637, 100000], [637, 638, 100000], [638, 639, 100000], [639, 640, 100000], [640, 641, 100000], [641, 642, 100000], [642, 643, 100000], [643, 644, 100000], [644, 645, 100000], [645, 646, 100000], [646, 647, 100000], [647, 648, 100000], [648, 649, 100000], [649, 650, 100000], [650, 651, 100000], [651, 652, 100000], [652, 653, 100000], [653, 654, 100000], [654, 655, 100000], [655, 656, 100000], [656, 657, 100000], [657, 658, 100000], [658, 659, 100000], [659, 660, 100000], [660, 661, 100000], [661, 662, 100000], [662, 663, 100000], [663, 664, 100000], [664, 665, 100000], [665, 666, 100000], [666, 667, 100000], [667, 668, 100000], [668, 669, 100000], [669, 670, 100000], [670, 671, 100000], [671, 672, 100000], [672, 673, 100000], [673, 674, 100000], [674, 675, 100000], [675, 676, 100000], [676, 677, 100000], [677, 678, 100000], [678, 679, 100000], [679, 680, 100000], [680, 681, 100000], [681, 682, 100000], [682, 683, 100000], [683, 684, 100000], [684, 685, 100000], [685, 686, 100000], [686, 687, 100000], [687, 688, 100000], [688, 689, 100000], [689, 690, 100000], [690, 691, 100000], [691, 692, 100000], [692, 693, 100000], [693, 694, 100000], [694, 695, 100000], [695, 696, 100000], [696, 697, 100000], [697, 698, 100000], [698, 699, 100000], [699, 700, 100000], [700, 701, 100000], [701, 702, 100000], [702, 703, 100000], [703, 704, 100000], [704, 705, 100000], [705, 706, 100000], [706, 707, 100000], [707, 708, 100000], [708, 709, 100000], [709, 710, 100000], [710, 711, 100000], [711, 712, 100000], [712, 713, 100000], [713, 714, 100000], [714, 715, 100000], [715, 716, 100000], [716, 717, 100000], [717, 718, 100000], [718, 719, 100000], [719, 720, 100000], [720, 721, 100000], [721, 722, 100000], [722, 723, 100000], [723, 724, 100000], [724, 725, 100000], [725, 726, 100000], [726, 727, 100000], [727, 728, 100000], [728, 729, 100000], [729, 730, 100000], [730, 731, 100000], [731, 732, 100000], [732, 733, 100000], [733, 734, 100000], [734, 735, 100000], [735, 736, 100000], [736, 737, 100000], [737, 738, 100000], [738, 739, 100000], [739, 740, 100000], [740, 741, 100000], [741, 742, 100000], [742, 743, 100000], [743, 744, 100000], [744, 745, 100000], [745, 746, 100000], [746, 747, 100000], [747, 748, 100000], [748, 749, 100000], [749, 750, 100000], [750, 751, 100000], [751, 752, 100000], [752, 753, 100000], [753, 754, 100000], [754, 755, 100000], [755, 756, 100000], [756, 757, 100000], [757, 758, 100000], [758, 759, 100000], [759, 760, 100000], [760, 761, 100000], [761, 762, 100000], [762, 763, 100000], [763, 764, 100000], [764, 765, 100000], [765, 766, 100000], [766, 767, 100000], [767, 768, 100000], [768, 769, 100000], [769, 770, 100000], [770, 771, 100000], [771, 772, 100000], [772, 773, 100000], [773, 774, 100000], [774, 775, 100000], [775, 776, 100000], [776, 777, 100000], [777, 778, 100000], [778, 779, 100000], [779, 780, 100000], [780, 781, 100000], [781, 782, 100000], [782, 783, 100000], [783, 784, 100000], [784, 785, 100000], [785, 786, 100000], [786, 787, 100000], [787, 788, 100000], [788, 789, 100000], [789, 790, 100000], [790, 791, 100000], [791, 792, 100000], [792, 793, 100000], [793, 794, 100000], [794, 795, 100000], [795, 796, 100000], [796, 797, 100000], [797, 798, 100000], [798, 799, 100000], [799, 800, 100000], [800, 801, 100000], [801, 802, 100000], [802, 803, 100000], [803, 804, 100000], [804, 805, 100000], [805, 806, 100000], [806, 807, 100000], [807, 808, 100000], [808, 809, 100000], [809, 810, 100000], [810, 811, 100000], [811, 812, 100000], [812, 813, 100000], [813, 814, 100000], [814, 815, 100000], [815, 816, 100000], [816, 817, 100000], [817, 818, 100000], [818, 819, 100000], [819, 820, 100000], [820, 821, 100000], [821, 822, 100000], [822, 823, 100000], [823, 824, 100000], [824, 825, 100000], [825, 826, 100000], [826, 827, 100000], [827, 828, 100000], [828, 829, 100000], [829, 830, 100000], [830, 831, 100000], [831, 832, 100000], [832, 833, 100000], [833, 834, 100000], [834, 835, 100000], [835, 836, 100000], [836, 837, 100000], [837, 838, 100000], [838, 839, 100000], [839, 840, 100000], [840, 841, 100000], [841, 842, 100000], [842, 843, 100000], [843, 844, 100000], [844, 845, 100000], [845, 846, 100000], [846, 847, 100000], [847, 848, 100000], [848, 849, 100000], [849, 850, 100000], [850, 851, 100000], [851, 852, 100000], [852, 853, 100000], [853, 854, 100000], [854, 855, 100000], [855, 856, 100000], [856, 857, 100000], [857, 858, 100000], [858, 859, 100000], [859, 860, 100000], [860, 861, 100000], [861, 862, 100000], [862, 863, 100000], [863, 864, 100000], [864, 865, 100000], [865, 866, 100000], [866, 867, 100000], [867, 868, 100000], [868, 869, 100000], [869, 870, 100000], [870, 871, 100000], [871, 872, 100000], [872, 873, 100000], [873, 874, 100000], [874, 875, 100000], [875, 876, 100000], [876, 877, 100000], [877, 878, 100000], [878, 879, 100000], [879, 880, 100000], [880, 881, 100000], [881, 882, 100000], [882, 883, 100000], [883, 884, 100000], [884, 885, 100000], [885, 886, 100000], [886, 887, 100000], [887, 888, 100000], [888, 889, 100000], [889, 890, 100000], [890, 891, 100000], [891, 892, 100000], [892, 893, 100000], [893, 894, 100000], [894, 895, 100000], [895, 896, 100000], [896, 897, 100000], [897, 898, 100000], [898, 899, 100000], [899, 900, 100000], [900, 901, 100000], [901, 902, 100000], [902, 903, 100000], [903, 904, 100000], [904, 905, 100000], [905, 906, 100000], [906, 907, 100000], [907, 908, 100000], [908, 909, 100000], [909, 910, 100000], [910, 911, 100000], [911, 912, 100000], [912, 913, 100000], [913, 914, 100000], [914, 915, 100000], [915, 916, 100000], [916, 917, 100000], [917, 918, 100000], [918, 919, 100000], [919, 920, 100000], [920, 921, 100000], [921, 922, 100000], [922, 923, 100000], [923, 924, 100000], [924, 925, 100000], [925, 926, 100000], [926, 927, 100000], [927, 928, 100000], [928, 929, 100000], [929, 930, 100000], [930, 931, 100000], [931, 932, 100000], [932, 933, 100000], [933, 934, 100000], [934, 935, 100000], [935, 936, 100000], [936, 937, 100000], [937, 938, 100000], [938, 939, 100000], [939, 940, 100000], [940, 941, 100000], [941, 942, 100000], [942, 943, 100000], [943, 944, 100000], [944, 945, 100000], [945, 946, 100000], [946, 947, 100000], [947, 948, 100000], [948, 949, 100000], [949, 950, 100000], [950, 951, 100000], [951, 952, 100000], [952, 953, 100000], [953, 954, 100000], [954, 955, 100000], [955, 956, 100000], [956, 957, 100000], [957, 958, 100000], [958, 959, 100000], [959, 960, 100000], [960, 961, 100000], [961, 962, 100000], [962, 963, 100000], [963, 964, 100000], [964, 965, 100000], [965, 966, 100000], [966, 967, 100000], [967, 968, 100000], [968, 969, 100000], [969, 970, 100000], [970, 971, 100000], [971, 972, 100000], [972, 973, 100000], [973, 974, 100000], [974, 975, 100000], [975, 976, 100000], [976, 977, 100000], [977, 978, 100000], [978, 979, 100000], [979, 980, 100000], [980, 981, 100000], [981, 982, 100000], [982, 983, 100000], [983, 984, 100000], [984, 985, 100000], [985, 986, 100000], [986, 987, 100000], [987, 988, 100000], [988, 989, 100000], [989, 990, 100000], [990, 991, 100000], [991, 992, 100000], [992, 993, 100000], [993, 994, 100000], [994, 995, 100000], [995, 996, 100000], [996, 997, 100000], [997, 998, 100000], [998, 999, 100000]]
let discounts = 500
console.log(minimumCost(n, highways, discounts))