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
_This object does not have a property named **name**_ (change _name_ to the name of the missing property).