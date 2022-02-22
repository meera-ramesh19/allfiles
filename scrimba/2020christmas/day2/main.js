function depositProfit(deposit, rate, threshold) {
    //  write code here.
    let years,amount,newrate=0;
   
  while (deposit<threshold){
        newrate+0.2*deposit
       amount=newrate+deposit
       deposit=amount
       years++
    }
    return years
}



/**
* Test Suite 
*/
describe('depositProfit()', () => {
    it('returns number of years it will take to hit threshold based off of deposit & rate', () => {
        // arrange
        const deposit = 100;
        const rate = 20;
        const threshold = 170;
        
        // act
        const result = depositProfit(deposit, rate, threshold)

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(3);
    });
});