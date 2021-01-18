const filter = (arr,test) => {
    var filteredArray = [];
    filterHelper(arr,0,test,filteredArray);
    return filteredArray;
}
filterHelper = (arr, index, test, filteredArray) => {
    if(index==arr.length)
        return
    if(test(arr[index]))
        filteredArray.push(arr[index]);
    filterHelper(arr, index+1, test, filteredArray);
}
filterUpperCase = (character) => {
    return character == character.toUpperCase()
}
module.exports = filter;
