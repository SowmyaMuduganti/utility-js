const reduce = (arr,reducer,initialValue) => {
    var total = initialValue;
    if(initialValue==null){
        if(arr.length==0){
            return undefined;
        }
        total = '';
    }
    for(i=0;i<arr.length;i++){
        total = reducer(total,arr[i]);
    }
    return total;
}
module.exports = reduce;
