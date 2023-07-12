const fullName = "julian amoah";
let firstName = fullName.slice(0, 7);
let lastName = fullName.slice(7, 12);
let upper = firstName.toUpperCase().charAt(0) + firstName.slice(1,6);
let reverse = lastName.split('').reverse().join('');
let count = fullName.length;
let check = fullName.includes("a");


console.log(`Hello my name is ${fullName}. First name is: ${firstName}, Last name: ${lastName}.
Making first name uppercase returns: ${upper}. 
Reversing last name returns: ${reverse}. 
Total number of characters in full name: ${count}.
Occurrence of the letter 'a' in full name: ${check}`);
