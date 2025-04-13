// Task no 01: Array Filtering and Mapping

// Step 1: Create an array of person objects
const people = [
    { name: 'Alice', age: 25, gender: 'female' },
    { name: 'Bob', age: 30, gender: 'male' },
    { name: 'Clara', age: 22, gender: 'female' },
    { name: 'David', age: 35, gender: 'male' },
    { name: 'Eve', age: 28, gender: 'female' }
  ];
  
  // Step 2: Function to filter out all females and map to names
  function getMaleNames(peopleArray) {
    return peopleArray
      .filter(person => person.gender !== 'female') // Filter out females
      .map(person => person.name);                  // Map to names
  }
  
  // Step 3: Call the function and print the result
  const result = getMaleNames(people);
  console.log(result);
  