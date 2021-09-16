You can easily append data to the end of an array via the `push()` function.
\
The `.push()` takes one or more parameters and "pushes" them onto the end of the array.
\
Take a look at this example:
```
let myArray = [1, 2, 3];
myArray.push(4);

console.log(myArray[myArray.length - 1]);
>>> 4
```
Try to push `["Hi", "Bye"]` onto the end of `myArray`.