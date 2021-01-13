const filter = require('./filter');

describe('Filter', () => {

    it('filter([], x => true) gives []', () => {
        expect(filter([], x => true)).toEqual([]);
    });

    it('filter([1,2,3],x => true) gives [1,2,3]', () => {
        expect(filter([1,2,3],x => true)).toEqual([1,2,3]);
    });

    it('filter([1,2,3],x => false) gives []', () => {
        expect(filter([1,2,3],x => false)).toEqual([]);
    });

    it('filter([1,2,3],x => x > 1) gives [2,3]', () => {
        expect(filter([1,2,3],x => x > 1)).toEqual([2,3]);
    });

    it("filter(['a','B','c','D'], filterUpperCase) gives [B,D]", () => {
        expect(filter(['a','B','c','D'], filterUpperCase)).toEqual(['B','D']);
    });

})


