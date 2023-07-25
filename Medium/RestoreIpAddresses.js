/*
This is intended to be a backtracking problem so that's how I did it.
It's a bit more tricky because of the extra conditions on what makes a 
valid IP Address. 

The base condition is that we have a valid IP address. 
    - 4 Sections
    - Every char used
    - Each section is valid (which was already checked when making the sections)

We can exit the loop if we haven't reached the end of s BUT we have 4 sections

Now we hit our loop which builds the sections.
    - The longest a section can be is 3 digits, so we iterate from start to start + 3
    - if the section isn't valid we skip it
    - otherwise we push it into sections, and recurse
    - pop that section off and continue
*/
var restoreIpAddresses = function (s) {
    const addresses = []
    getIpAddresses(0, s, [], addresses)
    return addresses
};

function getIpAddresses(start, s, sections, addresses) {
    if (makesValidIpAddress(sections, s.length)) return addresses.push(sections.join("."))

    if (start < s.length - 1 && sections.length === 4) return

    for (let i = start; i < start + 3 && i < s.length; i++) {
        const digits = s.slice(start, i + 1);
        if (!isInIPRange(digits)) continue;
        sections.push(digits);
        getIpAddresses(i + 1, s, sections, addresses)
        sections.pop()
    }

}

function makesValidIpAddress(sections, correctLength) {
    if (sections.length !== 4) return false;
    if (sections.join("").length < correctLength) return false

    return true;
}

function isInIPRange(n) {
    if (n.length === 1) return true;
    if (n[0] === '0') return false;

    n = Number(n)
    if (n < 0) return false;
    if (n > 255) return false;
    return true;
}