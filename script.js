/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

  /*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

function isAdult(number) {
    if (number >= 18) {
        return "Adult";
    } else {
        return "Minor";
    }
}

console.log('Exercise 2 Result:', isAdult(21));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

function isCharAVowel(letter) {
    switch (letter) {
        case `a`:
        case `e`:
        case `i`:
        case `o`:
        case `u`:
            return true
        default: 
            return false
    }
}

console.log('Exercise 3 Result:', isCharAVowel("a"));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

function generateEmail(name, domain) {
    return `${name}@${domain}`;
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

function greetUser(name, ToD) {
    return `Good ${ToD}, ${name}!`;
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

function maxOfThree(first, second, third) {
    if (first > second && first > third) {
        return first;
    } else if (second > first && second > third) {
        return second;
    } else if (third > first && third > second) {
        return third;
    } else {
        return `two or more are equal`;
    }
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

function calculateTip(bill, percentage) {
    let tip = bill * (percentage/100)
    return tip
}

console.log('Exercise 7 Result:', calculateTip(50, 20));

/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

function convertTemperature(temperature, scale) {
    let type
    if (scale === 'C') {
        type = "Fahrenheit"
        temperature = temperature * (9/5) + 32
    } else if (scale === 'F') {
        type = "Celsius"
        temperature = (temperature - 32) * (5/9)
    } else {
        return `nah`
    }
    return `${temperature} (${type})`
}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

function basicCalculator(num1, num2, operation) {
    // if (operation === "add") {
    //     total = num1 + num2
    //     return total
    // } else if (operation === "subtract") {
    //     total = num1 - num2
    //     return total
    // } else if (operation === "multiply") {
    //     total = num1 * num2
    //     return total
    // } else if (operation === "divide") {
    //     total = (num1 / num2)
    //     return total
    // } else return "nah"
    switch (operation) {
        case 'add':
            total = num1 + num2
            return total
        case 'subtract':
            total = num1 - num2
            return total
        case 'multiply':
            total = num1 * num2
            return total
        case 'divide':
            total = (num1 / num2)
            return total
        default:
            console.log('Invalid operation')
    }    
     
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "divide"));

/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/

function calculateGrade(score) {
    if (score >= 90) {
        return `A`
    } else if (score >= 80) {
        return `B`
    } else if (score >= 70) {
        return `C`
    } else if (score >= 60) {
        return `D`
    } else return `F`
}

console.log('Exercise 10 Result:', calculateGrade(85));

/*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre12'.

Complete the exercise in the space below:
*/

function createUsername(first, last) {
    let fir = first.substring(0,3)
    let las = last.substring(0,3)
    let length = first.length + last.length
    return `${fir}${las}${length}`
    }

console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));

/*
Exercise 12: numArgs()

Challenge yourself with numArgs. 
This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/


// could also use a `return arc.length` on its own

function numArgs(...arg) {
    let count
    for (i = 0; i < arg.length; i++) {
        count = i + 1
    }
    return count
}

console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));
