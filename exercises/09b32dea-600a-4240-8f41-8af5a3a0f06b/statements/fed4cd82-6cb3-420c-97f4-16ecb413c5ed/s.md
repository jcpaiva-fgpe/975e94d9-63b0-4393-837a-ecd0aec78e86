`.pop()` and `.push()` functions work at the very end of an array by removing or adding the last element. What if you want to do something about the first one?
\
Take a look at the `.shift()` and `.unshift()` functions:
- `.shift()` works just like `.pop()`, except it removes the first element
- `.unsift()` is similar to `.push()`, except it adds the element at the beginning of the array
\
```
let myArray = [1,2];
myArray.shift();
myArray.unshift(0);
console.log(myArray);

>>> [0, 2] 
```
\
Try to remove the first element of the `myArray` variable using `.shift()`, and then add value of `["Hello", 1]` using `.unshift()`.