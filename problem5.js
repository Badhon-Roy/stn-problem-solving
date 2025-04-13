// Task no 06: Unique Values

// Step 1: Create an array with duplicate values
const numbers = [4, 7, 2, 4, 9, 2, 7, 1, 6, 9];

// Step 2: Function to return an array with only unique values
function getUniqueValues(arr) {
  return [...new Set(arr)];
}

// Step 3: Call the function and print the result
const uniqueNumbers = getUniqueValues(numbers);
console.log(uniqueNumbers); // Output: [4, 7, 2, 9, 1, 6]