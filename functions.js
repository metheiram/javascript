
// write a function to cheak if a number is even or odd

function myfunction (number){
     if (number %2 === 0){
        return "even";
     }
     else{
        return "odd" ;
     }

}

console.log(myfunction(5))
console.log(myfunction(8))

// write a function to find the square of a number and return the result 

function square(number){
   return number*number;
}
console.log(square(5))


//write a function expression to find the max of two numbers  

function findmax(a,b){
   return a > b ? a : b;// this is a tarnery operator 
   // it is similar to if else , condition ? if statment is true : if statment is false;
}
console.log(findmax(15,2))


// write a function expression to concatinate two strings and return the results

function concatinateString(s1,s2){
   return s1 + s2;
}

console.log(concatinateString("iram ","mukhtar"))


// write a function to cheak if a string concatinate a specific character and 
//return boolean value 

function containsCharacter(str, char) {
   return str.includes(char);// here we use include method that cheaks
   // if char is present in string return true if ther isn't return false
}

// Example usage:
console.log(containsCharacter("hello", "e")); // Output: true
console.log(containsCharacter("world", "z")); // Output: false



// write a functions that takes two parameters and return their product 
// provide default value of second parameter 

function multiply(a, b = 1) {
   return a * b;
}

// Example usage:
console.log(multiply(5, 10)); // Output: 50
console.log(multiply(7));     // Output: 7 (since b defaults to 1)
