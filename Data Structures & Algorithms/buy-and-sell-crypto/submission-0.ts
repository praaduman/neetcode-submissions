class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minprice = Infinity;
  let maxprofit = 0;

  for(let i = 0; i< prices.length; i++ ){
    minprice = Math.min(minprice,prices[i]);
    let currprofit = prices[i] - minprice;
    maxprofit = Math.max(maxprofit, currprofit)
  }
  return maxprofit;
    }
}
