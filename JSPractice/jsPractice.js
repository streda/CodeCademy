/* 
Write a function factorial() that takes a number as an argument and returns the factorial of the number.

Example:

factorial(6); 
// returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720 
Assume only positive numbers will be given as an argument for the factorial() function.
 */

// Write function below
const factorial = num => {
  let fact = 1
  for (let i = num; i > 0; i--) {
    fact = fact * i;
  } return fact;
};

console.log(factorial(7));
console.log('------------------------------------');


/* 
Write a function subLength() that takes 2 parameters, a string and a single character. 
The function should search the string for the two occurrences of the character and 
return the length between them including the 2 characters. If there are less than 2 
or more than 2 occurrences of the character the function should return 0.

Examples:

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0
*/

const subLength = (str, char) => {
  const count = str.split('').filter(ltr => ltr === char).length;
  if (count === 2) {
    return (str.lastIndexOf(char) - str.indexOf(char)) + 1;
  }
  return 0;
};

console.log(subLength('Saturday', 'a') + ' : is the length of the characters between the two occurences of the character.'); // returns 6
console.log(subLength('summer', 'm') + ' : is the length of the characters between the two occurences of the character.'); // returns 2
console.log(subLength('digitize', 'i') + ' : is the length of the characters between the two occurences of the character.'); // returns 0
console.log(subLength('cheesecake', 'k') + ' : is the length of the characters between the two occurences of the character.'); // returns 0

console.log('------------------------------------');


/* 
Write a function groceries() that takes an array of object literals of grocery items. 
The function should return a string with each item separated by a comma except the last
two items should be separated by the word 'and'. Make sure spaces (' ') are inserted 
where they are appropriate.

Examples:

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
 
groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'
*/

const groceries = arr => {
  if (arr.length === 1) {
    return arr[0].item;
  } else if (arr.length === 2) {
    return arr[0].item + ' and ' + arr[1].item;
  }
  let str = '';
  arr.forEach((obj, indx) => {
    if (indx + 1 == arr.length)
      str += `and ${obj.item}`;
    else if (indx + 2 == arr.length)
      str += `${obj.item} `;
    else
      str += `${obj.item}, `;
  })
  return str;
};

console.log(groceries([{ item: 'Carrots' }, { item: 'Hummus' }, { item: 'Pesto' }, { item: 'Rigatoni' }]));
// returns 'Carrots, Hummus, Pesto and Rigatoni'

console.log(groceries([{ item: 'Bread' }, { item: 'Butter' }]));
// returns 'Bread and Butter'
console.log(groceries([{ item: 'Cheese Balls' }]));
// returns 'Cheese Balls'

// const substr = new Array("One", "Two", "Three");
// let commaList = '';

// for (let i = 0; i < substr.length; ++i) {
//     if (i == substr.length - 1)
//         commaList += " and " + substr[i];
//     else
//         commaList += ", " + substr[i];
// }

// console.debug(commaList.substr(2, commaList.length));
console.log('------------------------------------');

// ALTERNATIVE ANSWER

function arrayToText(array) {
  if (array.length <= 2) {
    return array.join(' and ');
  } else {
    return array.slice(0, -1).join(', ') + ' and ' + array[array.length - 1];
  }
}

console.log(groceries([{ item: 'Carrots' }, { item: 'Hummus' }, { item: 'Pesto' }, { item: 'Rigatoni' }]));
// returns 'Carrots, Hummus, Pesto and Rigatoni'

console.log(groceries([{ item: 'Bread' }, { item: 'Butter' }]));
// returns 'Bread and Butter'
console.log(groceries([{ item: 'Cheese Balls' }]));
// returns 'Cheese Balls'