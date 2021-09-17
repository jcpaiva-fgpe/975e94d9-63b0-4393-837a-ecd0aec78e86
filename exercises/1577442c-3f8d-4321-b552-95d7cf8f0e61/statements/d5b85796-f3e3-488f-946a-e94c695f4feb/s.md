Another way to change the data in an array is with the .pop() function.
\
You can also change the data in an array using the `.pop()` function. This function is used to remove a value from the end of an array, take a look at this example:
```
let myArray = [1, 3, 4];
let removed = myArray.pop();
console.log(myArray);
console.log(removed);

>>> [1,3]
>>> 4
```
As you can see the `.pop()` function also returns removed element.
\
Try to remove the last element from the _myArray_ array. Assign this removed element to to _removedElement_ variable.