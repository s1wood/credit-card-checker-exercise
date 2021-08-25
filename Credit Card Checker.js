// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
function validateCred(isValid) {
  let cardCopy = isValid.slice();
  for (let i = cardCopy.length - 2; i >= 0; i -= 2) {
    cardCopy[i] *= 2;
    if (cardCopy[i] > 9) {
      cardCopy[i] -= 9;
    }
  }

  let cardSum = cardCopy.reduce((a, b) => a + b);
  let result = cardSum % 10 === 0;
  return result;
}

//This was the solution provided by Codecademy, much neater but not sure about line 47 and how it works so is commented out for now
/*
function validateCred(cardArray) {
  let total = 0;
  for (let i = cardArray.length - 1; i >= 0; i--) {
    let currValue = cardArray[i]
    if ((cardArray.length - 1 - i) % 2 === 1) {
      currValue *= 2;
      if (currValue > 9) {
        currValue -= 9;
      }
    }
    total += currValue;
  }
  console.log(total)
  return total % 10 === 0;
}*/

const findInvalidCards = (cards) => {
  let invalidArray = []

  for(let i = 0; i < cards.length; i++) {
    if(!validateCred(cards[i])) {
      invalidArray.push(cards[i])
    }
  }
  return invalidArray
};

const idInvalidCardCompanies = (invalidNums) => {
  let companyNames = []

  for(let i = 0; i < invalidNums.length; i++) {
    let companyNum = invalidNums[i].slice(0, 1);
    
    if(companyNum == 3) {
      if(companyNames.indexOf('Amex (American Express)') < 0)
      companyNames.push('Amex (American Express)')

    } else if(companyNum == 4) {
      if(companyNames.indexOf('Visa') < 0)
      companyNames.push('Visa')

    } else if(companyNum == 5) {
      if(companyNames.indexOf('Mastercard') < 0)
      companyNames.push('Mastercard')

    } else if(companyNum == 6) {
      if(companyNames.indexOf('Discover') < 0)
      companyNames.push('Discover')
      
    } else {
      console.log('Company not found')
    }
  }
  return companyNames
}


console.log(validateCred(mystery1))
console.log(validateCred(invalid5))

console.log(findInvalidCards(batch))
console.log(idInvalidCardCompanies([invalid1]));
console.log(idInvalidCardCompanies(batch))
console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5]))