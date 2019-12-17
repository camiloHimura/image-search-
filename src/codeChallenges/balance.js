/**
* @param {array} transactions - The transactions list.
* @param {string} category - The name of the category
* @param {date} start - The start date of the date range. Inclusive.
* @param {date} end - The end date of the date range. Exclusive.
* @returns {number} - The balance number
*/
function getBalanceByCategoryInPeriod (transactions = [], category, start, end) {
  if(!Array.isArray(transactions)){
    return 0;
  }

  // add your code here
  let isDateInRange = (time) =>  {
    time = new Date(time);
    return time >= start && time < end
  };

  let isSameCategory = (name) => name.toLowerCase() === category.toLowerCase();

  return transactions
          .reduce((accum, current) =>{
            if(isSameCategory(current.category) && isDateInRange(current.time)){
              accum += current.amount;
            }
            return accum;
          }, 0)
}
