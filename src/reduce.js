const reduce = (arr,reducer,initialValue) => {
    var total = initialValue;
    if(initialValue==null){
        if(arr.length==0){
            return undefined;
        }
        total = '';
    }
    return reduceHelper(arr,0,reducer,total);
}
reduceHelper = (arr, index, reducer, total) => {
    if(index==arr.length){
        return total;
    }
    total = reducer(total,arr[index]);
    return reduceHelper(arr,index+1, reducer, total);
}
module.exports = reduce;
