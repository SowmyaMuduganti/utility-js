const map = (arr,func) => {
    return arr.map(func);
}
identity = (num) => {
    return num;
}
cube = (num) => {
    return num*num*num;
}
module.exports = map;
