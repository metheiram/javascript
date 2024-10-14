

// All about array in js 

var myarray = ["string" , 34., 45];


var firstarray = [1,2,3,4,5]
console.log(firstarray)

// nested array 

var mynestedarray = [["this is my first array"], ["this is my second array "],[45]]


// finding element in specific index in an array 


var myvar = [50,60,70];
console.log(myvar.length)
myvar = myvar[2];

console.log(myvar)

// modify array data in indexes 

var ourarray = [45,67,89]
ourarray[0]= 56;
console.log(ourarray)


// Access multidimentional array in js 


var myarray = [[1,2,23],[4,5,6,],[7,8,9]      ]

// here we want to print 8 so we wirte the code written below

var myData = myarray[2][1];

console.log(myData)


// add something at the end of the array we use push function 

// here we want to add an arry in myarray 

myarray.push(["we add new array",]);

console.log(myarray)


// remove something at the end of an array  by pop function 

var ourARRAY = [1,2,3];

// here we want to remove 3 in this array 

var removeFromArray = ourARRAY.pop([1])
console.log(ourARRAY)

// here is another example if we want to remove something from specific location 

var removeFromArray = ourARRAY.pop([1])
console.log(ourARRAY)


// manipulate array with shift()..
// it is like pop function but . it will remove first element of an array


// maniulate array with unshift()
// it is like push function but it will add something at the biggning of the array 


