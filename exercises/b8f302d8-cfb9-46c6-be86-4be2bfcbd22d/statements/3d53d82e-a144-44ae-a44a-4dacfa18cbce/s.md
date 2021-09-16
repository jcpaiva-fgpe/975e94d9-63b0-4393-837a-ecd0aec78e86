We can access the data inside arrays using _indexes_.
\
An item in a JavaScript array is accessed by referring to the index number of the item in square brackets. We know 0 will always output the first item in an array. 
\
Take a look at this example:
```
let myArray = [50,60,70];
console.log(myArray[1]);

>>> 60
```
\
To access the data in a multidimensional array you need to add another pair of brackets:
```
let myArray = [[1, 50], [2, 60], [3, 70]];
console.log(myArray[1][0]);

>>> 2
```

\
You shouldn't add any spaces between the array name and the square brackets - JS probably will process it, but it can be confusing for other programmers.
\
Create a variable called myVariable and set it to equal the first value of the second nested array of _myArray_ using bracket notation.