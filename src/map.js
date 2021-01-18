const map = (arr,func) => {
    var resultArray = [];
    mapHelper(arr,0,resultArray,func);
    return resultArray;
}
mapHelper = (arr,index, resultArray, func) => {
    if(index==arr.length){
        return;
    }
    resultArray[index] = func(arr[index]);
    mapHelper(arr,index+1,resultArray,func);
}
identity = (num) => {
    return num;
}
cube = (num) => {
    return num*num*num;
}
module.exports = map;
