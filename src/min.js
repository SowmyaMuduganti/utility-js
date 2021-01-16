const min = (arr) => {
    var minOfArr = arr[0];
    for(i=1;i<arr.length;i++){
        if(arr[i]<minOfArr){
            minOfArr = arr[i];
        }
    }
    return minOfArr;
}
module.exports = min;