function candies(children, candy) {
  //divide the candy into equal parts for one child and multiply the number of children
    return Math.floor(candy / children) * children;
}

candies(3,10);

/**
* Test Suite 
*/
describe('candies()', () => {
    it('returns ammount of total equal candy to be eaten', () => {
        // arrange
        const children = 3;
        const candy = 10;
        
        // act
        const result = candies(children, candy);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(9);
    });
});