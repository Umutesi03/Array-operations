//1. String Transformations
console.log("1. String Transformations\n");

// a. Function that capitalizes the first letter of a string.
function capitalize(str){
  if( typeof str !== 'string' || str.length === 0) return str;
  let indexLetter = str.search(/[a-zA-Z]/);  
  if(indexLetter === -1) return str;
  return str.slice(0, indexLetter) + str[indexLetter].toUpperCase() + str.slice(indexLetter + 1).toLowerCase();  
} 
console.log(capitalize(" 87698KELIAUMUTESI") + "\n");

// b. function that reverses a given string.
function reverse(str){
  return ` The string is ${str} The reverse of it is ${str.split('').reverse().join("")}\n`; 
} 
console.log(reverse(' Umutesi Loves programming'));

// c. function that checks if a string is a palindrome
function isPalindrome(str){
  let string = str.replace(/[^a-zA-Z]/g,"").toLowerCase();
  let boldStr = `\x1b[1m${str}\x1b[0m`;
  if(string === string.split("").reverse().join("")){
    return `The string "${boldStr}" is a Palindrome since it reads the same backward as forward\n`;
  }
  else {
    return `The string "${boldStr}" is not a Palindrome since it doesn't reads the same backward as forward\n`;
  }
} 
console.log(isPalindrome("A man, a plan, a canal, Panama!"));

// d. function that counts the number of words in a given string.
function wordCount(str){
  return `The number of word in string ${str} is ${str.split(" ").length}\n`;
}
console.log(wordCount("Umutesi Loves programing"));

// e. function that converts a string to snake_case.
function toSnakeCase(str){
  return str.toLowerCase().split(" ").join("_") + "\n";
}
console.log(toSnakeCase("umutesi Kelia"));

// f. function that converts a string to camelCase.
function toCamelCase(str){
  let convertedStr = str.toLowerCase().split(" ");
  return convertedStr.shift() + convertedStr.map(word => word[0].toUpperCase() + word.slice(1)).join("") + "\n";
}
console.log(toCamelCase("Umutesi kelia"));

// g. function that finds the longest word in a given string.
function longestWord(str){
  let longWord = str.split(" ").sort((a,b) => b.length - a.length)[0];
  return `The longest word in "${str}" is ${longWord}\n`;
}
console.log(longestWord("Umutesi loves programming"));

// f. function that counts the number of times a specific letter appears in a string.
function countLetter(str, letter){
  let numberAppearance = str.toLowerCase().split("").filter(char => char === letter).length;
  return `The number of times the letter "${letter}" appears in "${str}" is ${numberAppearance}\n`;
}
console.log(countLetter("Umutesi loves Programming","m"));


// Array transformation
console.log("Array Transformations\n");

// a. function that doubles every number in an array.
function double(arr){
  return `Every number in array "${arr}" was doubled to form array "${arr.map(num => num*2)}"\n`;
}
console.log(double([1,2,89,90,45]));

// b. function that filters out even numbers from an array.
function filterEven(arr){
  console.log (` From an array "${arr}" we filterd even numbers which are "${arr.filter(num => num%2 === 0)}"\n`);
} 
filterEven([1,2,3,4,5,6,8]);

// c. function that calculates the sum of all numbers in an array.
function sum(arr){
  let summ = arr.reduce((sum, num) => sum += num, 0);
  console.log(`The sum of numbers in "${arr}" is ${summ}\n`);
}
sum([1,2,3,4,5,6,8]);

// d. function that calculates the average of all numbers in an array.
function average(arr) {
  let avg = arr.reduce((sum, num) => sum += num, 0) / arr.length;
  return `The average of numbers in "${arr}" is ${avg}\n`;
}
console.log(average([1,2,3,4,5,6,8]));

// e. function that returns the largest number in an array.
function findMax(arr) {
  return `The maximum number in "${arr}" is ${Math.max(...arr)}\n`;
}
console.log(findMax([3, 1, 8, 2, 9, 5])); 

// f. function that returns the smallest number in an array.
function findMin(arr) {
  return `The minimum number in "${arr}" is ${Math.min(...arr)}\n`;
}
console.log(findMin([3, 1, 8, 2, 9, 5])); 

// g. function that removes duplicate values from an array.
function removeDuplicates(arr) {
  return `Removing duplicate from an array "${arr}" we get "${[...new Set(arr)]}"\n`;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 

// h. function that returns the index of a given value in an array (or -1 if not found).
function findIndex(arr, value) {
  return ` The index of ${value} in array ${arr} is ${arr.indexOf(value)}\n`;
}
console.log(findIndex([10, 20, 30, 40], 30)); 

console.log("3. Object Transformations\n");

// a. Function that returns the full name of a person object.
function fullName(person) {
  return `The full name of the person is "${person.firstName} ${person.lastName}"\n`;
}
console.log(fullName({ firstName: "Umutesi", lastName: "Kelia" }));

// b. Function that checks if a person is 18 or older.
function isAdult(person) {
  return person.age >= 18 
    ? `The person "${person.firstName} ${person.lastName}" is an adult.\n` 
    : `The person "${person.firstName} ${person.lastName}" is not an adult.\n`;
}
console.log(isAdult({ firstName: "Umutesi", lastName: "Kelia", age: 20 }));

// c. Function that filters an array of people based on minAge.
function filterByAge(people, minAge) {
  let filtered = people.filter(person => person.age >= minAge);
  return `From the given people, those who are at least ${minAge} years old are: ${JSON.stringify(filtered)}\n`;
}
console.log(filterByAge([{ firstName: "Alice", age: 25 }, { firstName: "Bob", age: 17 }], 18));

// d. Function that adds a new property to an object.
function addProperty(obj, key, value) {
  obj[key] = value;
  return `After adding the property "${key}" with value "${value}", the updated object is: ${JSON.stringify(obj)}\n`;
}
console.log(addProperty({ name: "Umutesi" }, "age", 22));

// e. Function that checks if an object has a specific property.
function hasProperty(obj, key) {
  return obj.hasOwnProperty(key) 
    ? `The object "${JSON.stringify(obj)}" has the property "${key}".\n` 
    : `The object "${JSON.stringify(obj)}" does not have the property "${key}".\n`;
}
console.log(hasProperty({ name: "Umutesi", age: 22 }, "age"));

// f. Function that returns the number of properties in an object.
function countProperties(obj) {
  return `The object "${JSON.stringify(obj)}" has ${Object.keys(obj).length} properties.\n`;
}
console.log(countProperties({ name: "Umutesi", age: 22, country: "Rwanda" }));


console.log("4. Function Composition & Higher-Order Functions\n");

// a. Compose functions – Reverse and capitalize a string.
function compose(...fns) {
  return (value) => fns.reduceRight((acc, fn) => fn(acc), value);
}
const capitaliz = str => str.toUpperCase();
const revers = str => str.split("").reverse().join("");
const reverseAndCapitalize = compose(capitaliz, revers);
console.log(`The reverse and capitalized version of "umutesi kelia" is "${reverseAndCapitalize("umutesi kelia")}"\n`);

// b. Transform an array of students – Add "Pass" or "Fail" based on grades.
function addStudentStatus(students) {
  let updatedStudents = students.map(student => ({
    ...student,
    status: student.grade > 50 ? "Pass" : "Fail"
  }));
  return `The students with their pass/fail status: ${JSON.stringify(updatedStudents)}\n`;
}
console.log(addStudentStatus([{ name: "Alice", grade: 70 }, { name: "Bob", grade: 40 }]));

// c. Sort an array of objects by a given key.
function sortByKey(arr, key) {
  let sortedArray = arr.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  return `The array sorted by "${key}": ${JSON.stringify(sortedArray)}\n`;
}
console.log(sortByKey([{ name: "Alice", age: 25 }, { name: "Bob", age: 20 }], "age"));

// d. Filter products by category.
function filterByCategory(products, category) {
  let filteredProducts = products.filter(product => product.category === category);
  return `Products in the category "${category}": ${JSON.stringify(filteredProducts)}\n`;
}
console.log(filterByCategory([{ name: "Laptop", category: "Electronics" }, { name: "Apple", category: "Food" }], "Electronics"));

// e. Simple caching function to store previous calculations.
function cachingFunction(fn) {
  let cache = {};
  return function (arg) {
    if (cache[arg]) {
      return `Fetching from cache: The result of "${arg}" is "${cache[arg]}"\n`;
    } else {
      let result = fn(arg);
      cache[arg] = result;
      return `Computing result: The result of "${arg}" is "${result}"\n`;
    }
  };
}
const square = cachingFunction(x => x * x);
console.log(square(5));
console.log(square(5));
console.log(square(10));
