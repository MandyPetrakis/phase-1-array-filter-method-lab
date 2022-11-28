function findMatching(array, string) {
    let match = array.filter((driver) => driver.toUpperCase() === string.toUpperCase())
    return match
}

function fuzzyMatch(array, letter) {
    let startsWith = array.filter((driver) => driver.startsWith(letter))
    return startsWith
}

function matchName(array, name) {
    let match = array.filter((driver) => driver.name === name)
    return match
}