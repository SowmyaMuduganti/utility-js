const reduce = (arr,reducer,initialValue) => {
    if(initialValue==null){
        if(arr.length==0){
            return undefined;
        }
        return arr.reduce(reducer);
    }
    return arr.reduce(reducer,initialValue);
}
module.exports = reduce;
