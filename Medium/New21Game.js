/*
The way s operates in this solution is tricky.
s keeps track of the cumulative probabilities of reaching a state less than k. 
    First, we set s = 1 if k > 0 and 0 otherwise.
        This is because p[0] = 1 if k > 0 and p[0] = 0 if k = 0.
        In other words, if k = 0 then we never draw a number.
        So with p = 1 we have n or fewer points.
            This p = 1 is captured by setting p[0] = 1.
    
    In each iteration of the for loop, we set p[i] = s / maxPts
        For i = 1 this is obvious-- the chance of going from 0 -> 1 = 1 / maxPts
        We update the numerator s when i < k with the line: s += p[i]
            by example, if k = 5, n = 8 and maxPts = 3
            p = [1, 1/3, 4/9, 16/27]
            notice how for i = 2, 4/9 = (1 + 1/3) / 3 or
                p[2] = SUM(probs < 2) / maxPts = s / 3
            For i = 3, 16/27 = (1 + 1/3 + 4/9) / 3
            This makes sense because for each index j, j < i s.t. j -> i is possible
                you can reach i, with p[j] / maxPts
            In our case, you can reach 3 from 0, 1, 2. 
            so reaching 3 = (Σp[3 - j]) / maxPts for 3 - j >= Min(0, 3 - maxPts)
        When i - maxPts >= 0 AND i - maxPts < k we have to update s as well.
            Continuing the example, when i = 3 we need to remove p[0] from s (Σp[i]) BEFORE
            we hit the next loop when i = 4.
            i.e. we can't calculate p[4] = (p[0] + p[1] + p[2] + p[3]) / maxPts
            The correct quotient does not have p[0] in it! and p[i - maxPts] = p[3 - 3] = p[0]
            So before i iterates to 4, we reduce s by 1 = p[0]
    
    We calculate the answer by Σp[i] for k <= i <= n because
        p[i] describes the probability of having i points at 
        any point in the game (given inputs k, n, maxPts)

        Again, when k = 0, we only sum p[0] = 1 which makes sense:
            if we can't draw any points, we end the game with 0 points
            which means we have n or less points
        
        

*/

var new21Game = function (n, k, maxPts) {
    let p = new Array(n + 1).fill(0);
    p[0] = 1;
    let s = k > 0 ? 1 : 0
    for (let i = 1; i <= n; i++) {
        p[i] = s / maxPts;
        if (i < k) {
            s += p[i];
        }
        if (i - maxPts >= 0 && i - maxPts < k) {
            s -= p[i - maxPts];
        }
    }

    let ans = 0;
    for (let i = k; i <= n; i++) {
        ans += p[i];
    }

    return ans
};

/* 
TLE
In this solution, we add to p[i] if we are able to 
reach it from idx i - j. Going from (i - j) to i 
has probability = 1 / maxPts. So because reaching i from (i - j)
is dependent on the probability of reaching (i - j) in the first 
place, we take the product p[i - j] * (1 / maxPts) = p[i - j] / maxPts
to calculate the probability of reaching i from (i - j).
This product gets *added* to p[i] because reaching i from other indecies
is not dependent. 

*/
var new21Game = function (n, k, maxPts) {
    let p = new Array(n + 1).fill(0);
    p[0] = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= maxPts; j++) {
            if (i - j >= 0 && i - j < k) p[i] += p[i - j] / maxPts;
        }
    }

    let ans = 0;
    for (let i = k; i <= n; i++) {
        ans += p[i];
    }

    return ans
};

/*
maxPts = 3
1
    0 -> 1 with p = 1/3
    1/3     .3333                       s = 1.0000000 / 3
2   0 -> 2 with p = 1/3
    1 -> 2 with p = 1/3 * 1/3 = 1/9
    4/9     .4444                       s = 1.3333333 / 3
3   0 -> 3 with p = 1/3         9/27
    1 -> 3 with p = 1/3 * 1/3   3/27
    2 -> 3 with p = 4/9 * 1/3   4/27
    16/27   .59259                      s = 1.7777777 / 3
4   1 -> 4 with p = 1/3 * 1/3   9/81
    2 -> 4 with p = 4/9 * 1/3   12/81
    3 -> 4 with p = 16/27 * 1/3 16/81
    37/81   .45679
*/