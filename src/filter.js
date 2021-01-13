const filter = (arr,test) => {
    return arr.filter(test);
}
filterUpperCase = (character) => {
    return character == character.toUpperCase()
}
module.exports = filter;
