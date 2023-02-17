// Iteration #1: Find the maximum
// Implement the function maxOfTwoNumbers that takes two numbers as arguments and returns the bigger number.

function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(maxOfTwoNumbers(65, 78));

// la solucion con ternario

const maxOfTwoNumbersArrow = (num3, num4) => {
    return a > b ? a : a === b ? a : b
}

console.log(maxOfTwoNumbersArrow(65, 78));


// --------------------------------------------------------------------------------------------------

// Iteration #2: Find the longest word
// Implement the function findLongestWord that takes as an argument an array of words and 
// returns the longest one. If there are 2 with the same length, it should return the first occurrence.

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findLongestWord(words) {
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}

console.log("The longuest word is: " + findLongestWord(words));

// --------------------------------------------------------------------------------------------------
       
// Iteration #3: Calculate the sum
// Implement the function named sumNumbers that takes an array of numbers as an argument, 
// and returns the sum of all of the numbers in the array.

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return total;
}

console.log(sumNumbers(numbers)); 

// --------------------------------------------------------------------------------------------------

// Iteration #3.2: A generic sum() function
// Let's implement the function sum() that calculates the sum for an array filled with (almost) any 
// type of data. Note that strings should have their length added to the total, and boolean values should be 
// coerced into their corresponding numeric values.

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
const sum = (mixedArray) => {
    let totalSum = 0;
    
    for (let i = 0; i < mixedArray.length; i++) {
      //Strings
      if (typeof mixedArray[i] === "string") {
        totalSum += mixedArray[i].length;
  }
  //Booleans
    else if (mixedArray[i] === true) {
      totalSum++;
    }
  //Numbers
  else {
    totalSum += mixedArray[i];
      }
    }
    return totalSum;
  }

// --------------------------------------------------------------------------------------------------

// Iteration #4: Calculate the average

// Implement the function averageNumbers that expects an array of numbers and returns the average of the numbers.

const numbers = [2, 6, 9, 10, 7, 4, 1, 9];

const averageNumbers = (numbers) => {
    return (sumNumbers(numbers) / numbers.length).toFixed(2);
};
console.log(`The acerage of this array is: ${averageNumbers(numbers)}`);

