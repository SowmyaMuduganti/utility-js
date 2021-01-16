const max = (arr) => {
    var maxOfArr = 0;
    for(i=0;i<arr.length;i++){
        if(arr[i]>maxOfArr){
            maxOfArr = arr[i];
        }
    }
    return maxOfArr;
}
module.exports = max;
