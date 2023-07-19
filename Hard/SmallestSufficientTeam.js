/*
This is a more complex dfs/backtracking problem.
First we create a bitmap of each person's skills. If each skill
is a power of 2 then ALLSKILLS will be something like 11111111
where the number of 1's will be the number of skills.
By making a bit map, we can easily combine different people skils by 
using the bit or operator.
    ex. person1Skills = 001011
        person2Skills = 110101
        then person1Skills | person2Skills = 111111 = ALLSKILLS

The dfs requires a memo that maps a set of skills `skillset` to a group of people
    whose sum of skills is skillset. We can use this to avoid dfs repitition
Specifically, if we have an entry for skillset in our map `minPeopleForSkillset`
    AND the array at minPeopleForSkillset[skillset] is shorter than our currentSkillsetPeople
    array this means that we are on a path that takes more people to complete the same set of skills.
        we can thus return and cancel this path.
If the prior condition is not met, then we need to update our map with our currentSkillsetPeople.
Next, we iterate through the people array starting at personIdx. We add their skillset to
    the current skillset and push that index into the currentSkillsetPeople array.
    We dfs starting on the next index.
After completing that path, we pop the last person off the currentSkillsetPeople array to continue our search
*/
var smallestSufficientTeam = function (req_skills, people) {
    const bitSkills = {}
    let ALLSKILLS = 0
    req_skills.forEach((skill, i) => {
        bitSkills[skill] = 1 << i
        ALLSKILLS += 1 << i
    })

    people = people.map(personSkills => {
        let bitmap = 0;
        personSkills.forEach(skill => {
            bitmap += bitSkills[skill]
        })
        return bitmap;
    })
    const minPeopleForSkillset = {};

    function dfs(currentSkillsetPeople, personIdx, skillset) {
        const minPeopleForCurrSkillset = minPeopleForSkillset[skillset];
        if (minPeopleForCurrSkillset && minPeopleForCurrSkillset.length < currentSkillsetPeople.length)
            return
        minPeopleForSkillset[skillset] = currentSkillsetPeople.slice()

        for (let i = personIdx; i < people.length; i++) {
            const nextSkillset = (skillset | people[i]);
            currentSkillsetPeople.push(i);
            dfs(currentSkillsetPeople, i + 1, nextSkillset)
            currentSkillsetPeople.pop()
        }
    }

    dfs([], 0, 0)
    return minPeopleForSkillset[ALLSKILLS]
};