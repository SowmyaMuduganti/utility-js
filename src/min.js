const reduce = require('./reduce');

const min = (arr) => {
    return reduce(arr,(x,y) => x<y?x:y,Number.MAX_VALUE);
}
module.exports = min;