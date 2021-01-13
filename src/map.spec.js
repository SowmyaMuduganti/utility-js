const map = require('./map');

describe('Map', () => {

    it('map([1,2,3], identity) is [1,2,3]', () => {
        expect(map([1,2,3], identity)).toEqual([1,2,3]);
    });

    it('map([1,2,3], cube) is [1,8,27]', () => {
        expect(map([1,2,3], cube)).toEqual([1,8,27]);
    });

    it('map([], cube) is []', () => {
        expect(map([], cube)).toEqual([]);
    });

    it('map([a{x : 10}],someObject => someObject.x + 1) is [11]', () => {
        expect(map([{x : 10}], someObject => someObject.x + 1)).toEqual([11]);
    });

})
