const map = (arr,func) => {
    var resultArray = [];
    for(i=0;i<arr.length;i++){
        resultArray[i] = func(arr[i]);
    }
    return resultArray;
}
identity = (num) => {
    return num;
}
cube = (num) => {
    return num*num*num;
}
module.exports = map;
