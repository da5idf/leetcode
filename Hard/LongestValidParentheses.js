/***
 *  This is a nice DP problem.
 *      As we iterate through our string, we can evaluate the validity of a substring.
 *      Notice that all valid paren strings end with ")"
 *          So right off the bat, if s[i] === "(" we can skip it. In other words, we 
 *          do not evaluate if that char is part of a valid substring until hitting a ")"
 *      If we hit a closing paren we have to evaluate if it's part of a valid substring.
 *          1. If the previous character is an open paren, then the substring "()" is valid.
 *              we need to increment our DP solution for this index. Specifically,
 *              dp[i] = dp[i - 2] + 2
 *              '0, 1, 2,...i-2, i-1, i,....'
 *              '0, 1, 2,...i-2,  ( , ),....'
 *              if dp[i-2] === 0 then it was not part of a valid substirng.
 *              if dp[i-2] > 0 then it was part of a valid substirng.
 *              In either case, we take that value and add 2, the length of "()", to it.
 *          2. If the previous character is also a closed paren then we need to find the
 *              the character that corresponds to the matching paren for index i.
 *                  s[i - dp[i - 1] - 1] gives us this matching paren.
 *                      dp[i - 1] tells us how many chars were in i-1's valid substring.
 *                      if dp[i - 1] === 0 then the prev char was NOT in a valid substring and 
 *                          the matching char is s[i - 1] = ")", which we already knew.
 *                          In this case, dp[i] = 0
 *                      if dp[i - 1] = c > 0 then c characters are in i - 1's valid substring.
 *                          to get the correct matching char for i then, we take 
 *                          i - (dp[i - 1] + 1) = i - dp[i - 1] - 1
 *                  if s[i - dp[i - 1] - 1] === "(" then we have a valid match. 
 *                      we can set dp[i] = dp[i - 1] + dp[i - dp[i - 1] - 2] + 2
 *                      '....i - dp[i - 1] - 2, MATCHING CHAR, ...., i - 1, i'
 *                      dp[i - 1] = valid substring length of previous char
 *                      dp[i - dp[i - 1] - 2] = valid substring length of char before Mathcing Char
 *                      + 2 because we are adding Matching Char and s[i]
 *
 */

var longestValidParentheses = function (s) {
    s = ")" + s // we need an extra 0 at the beginning of our dp array.
    const dp = new Array(s.length + 1).fill(0);

    let max = 0;
    for (let i = 1; i < s.length; i++) {
        const char = s[i];
        if (char === ")") {
            const prev = s[i - 1];

            if (prev === "(") dp[i] = dp[i - 2] + 2
            else {
                // is the previous ")" part of a valid string?
                const matchingChar = s[i - dp[i - 1] - 1]
                if (matchingChar === "(") dp[i] = dp[i - 1] + (dp[i - dp[i - 1] - 2] || 0) + 2
            }
            max = Math.max(max, dp[i])
        }
    }
    return max;
}

/*
    dp [002040]
        012345
        )()())

    s[i - dp[i - 1] - 1] = s[5 - 4 - 1] = s[0] = ")"
*/