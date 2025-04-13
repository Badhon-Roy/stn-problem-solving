// Task no 06: Array Reduction

// Step 1: Create an array of numbers
const numbers = [10, 5, 8, 13, 22, 7, 6];

// Step 2: Function to calculate the sum of even numbers using reduce
function sumEvenNumbers(arr) {
  return arr.reduce((sum, num) => {
    return num % 2 === 0 ? sum + num : sum;
  }, 0);
}

// Step 3: Call the function and print the result
const result = sumEvenNumbers(numbers);
console.log(result);


