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
    for(let i = num; i > 0; i--){
      fact = fact * i;
    } return fact;
  };
  
  console.log(factorial(7));

/* 
Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

Examples:

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0
*/

  const subLength = (str, char) => {
    const count = str.split('').filter(ltr => ltr === char).length;
    if (count === 2){
      return (str.lastIndexOf(char) - str.indexOf(char)) + 1;
    }
    return 0;
  };
  
  
  