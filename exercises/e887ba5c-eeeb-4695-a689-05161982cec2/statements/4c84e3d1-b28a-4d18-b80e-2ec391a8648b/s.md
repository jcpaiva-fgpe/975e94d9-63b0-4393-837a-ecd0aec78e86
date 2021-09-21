You can check whether the object has a property or not using _.hasOwnProperty(propertyName)_:
```
let myObject = {
    length: 15,
    max: 2,
    min: 3
}

console.log(myObject.hasOwnProperty("mid"));
console.log(myObject.hasOwnProperty("min"));

>>> false
>>> true
```
\
Write a program that will print this message when object does not have a specific property:
\
_This object does not have a property named nameOfTheProperty_ (change _nameOfTheProperty__ to the name of the missing property).
\
If the object has a property just print its value. You can test your code using inputs.
