const DELAY_MILLISEC = 60000;

function findDuplicateTransactions (transactions = []) {
  // add your code here
  return searchDuplicates(sortDesc(transactions))
          .filter(item => item !== null)
}

function sortDesc(items) {
  return items.sort((x,y) => x.id < y.id ? -1 : x.id > y.id ? 1 : 0);
}

function searchDuplicates([first, ...items]){
      if(items.length === 0){return []}

      let {match, others} = matchDuplicates(first, items);

      if(others.length > 0){
          return [match.length === 1 ? null: match, ...searchDuplicates(others)]
      }

      return match.length === 1 ? null: [match];
}

function matchDuplicates(first, items){
  return items.reduce((accum, item) => {
              let lastItemSaved = accum.match[accum.match.length-1];
              if(matchInfo(lastItemSaved, item) && hasDelay(lastItemSaved, item)){
                accum.match.push(item)
              }else{
                accum.others.push(item)
              }
              return accum;
          }, {match: [first], others: []})
};

function hasDelay({time:timeOne}, {time:timeTwo}){
  return Math.abs(Date.parse(timeOne) - Date.parse(timeTwo)) <= DELAY_MILLISEC;
}

function matchInfo(objOne, objTwo){
  return  objOne.amount === objTwo.amount &&
          objOne.category === objTwo.category &&
          objOne.sourceAccount === objTwo.sourceAccount &&
          objOne.targetAccount === objTwo.targetAccount
}

