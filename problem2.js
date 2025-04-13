// Task no 02: Object Manipulation

// Step 1: Create an array of book objects
const books = [
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }
  ];
  
  // Step 2: Function to return an array of book titles
  function getBookTitles(bookArray) {
    return bookArray?.map(book => book.title);
  }
  
  // Step 3: Call the function and print the result
  const titles = getBookTitles(books);
  console.log(titles);