// Task no 04: Sorting Objects

// Step 1: Create an array of car objects
const cars = [
    { make: 'Toyota', model: 'Camry', year: 2020 },
    { make: 'Honda', model: 'Civic', year: 2018 },
    { make: 'Ford', model: 'Mustang', year: 2022 },
    { make: 'Chevrolet', model: 'Malibu', year: 2019 }
  ];
  
  // Step 2: Function to sort cars by year in ascending order
  function sortCarsByYear(carArray) {
    return carArray.sort((a, b) => a.year - b.year);
  }
  
  // Step 3: Call the function and print the result
  const sortedCars = sortCarsByYear(cars);
  console.log(sortedCars);
  