const reduce = require('./reduce');

const max = (arr) => {
    return reduce(arr,(x,y) => x>y?x:y,0);
}

module.exports = max;
