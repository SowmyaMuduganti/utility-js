const filter = (arr,test) => {
    var filteredArray = [];
    var j=0;
    for(i=0;i<arr.length;i++){
        if(test(arr[i])){
            filteredArray[j] = arr[i];
            j += 1;
        }
    }
    return filteredArray;
}
filterUpperCase = (character) => {
    return character == character.toUpperCase()
}
module.exports = filter;
