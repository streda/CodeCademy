let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    const targetNumber = Math.floor(Math.random() * 10);
    return targetNumber;
    // return Math.floor(Math.random() * 10);
};
console.log(generateTarget());

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    const humanDifference = Math.abs(targetNumber - humanGuess);
    const computerDifference = Math.abs(targetNumber - computerGuess);
    if (humanDifference <= computerDifference) {
        return true;
    } else {
        return false;
    }
    // return humanDifference <= computerDifference;
};

//if (computerGuess === targetNumber && humanGuess === targetNumber){
//     return 'Human wins';
//   }
// };


const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore += 1;
    }
    else if (winner === 'computer') {
        computerScore += 1;
    }
};

const advanceRound = () => {
    currentRoundNumber += 1;
};

// console.log(advanceRound());
// console.log(updateScore());

