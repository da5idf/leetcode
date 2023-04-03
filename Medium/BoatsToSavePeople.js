/***
 * This is a greedy algorithm.
 * If the heaviest person can ride with the lightest person, we put them on a boat.
 * Otherwise, the heaviest person rides alone.
 */

// more elegant solution:
var numRescueBoats = function (people, limit) {
    people.sort((a, b) => b - a);
    let count = 0;
    let heaviestIdx = 0;
    let lightestIdx = people.length - 1;

    while (heaviestIdx <= lightestIdx) {
        count++ // each time we loop, we know we used a boat because max passsengers per boat = 2

        // by the contraints, we know people[heaviestIdx] <= limit. So we always increase heaviestIdx.
        // if we can add the lightest person to the boat, we do so and decrease that idx.
        if (people[heaviestIdx] + people[lightestIdx] <= limit) lightestIdx--;
        heaviestIdx++;
    }
    return count
}

// my answer has a lot of excess.
var numRescueBoats = function (people, limit) {
    people.sort((a, b) => b - a);

    let n = people.length;

    let heaviestIdx = 0;
    let lightestIdx = n - 1;
    let count = 0;
    let curCapacity = 0;
    let passengers = 0;

    while (heaviestIdx <= lightestIdx) {
        while (curCapacity + people[heaviestIdx] <= limit && passengers < 2) {
            curCapacity += people[heaviestIdx++]
            passengers++;
        }
        while (curCapacity + people[lightestIdx] <= limit && passengers < 2) {
            curCapacity += people[lightestIdx--]
            passengers++;
        }
        count++;
        curCapacity = 0;
        passengers = 0;
    }

    return count;
};