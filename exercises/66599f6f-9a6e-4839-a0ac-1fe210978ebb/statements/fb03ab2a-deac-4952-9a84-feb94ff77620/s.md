Take a look at the "The dot" exercise if you haven't yet, then go back to this one.
\
To access properties which names contains spaces we need to use brackets:
```
let obj = {
    "crazy property": 123
}

console.log(obj["crazy property"])

>>> 123
```
Note that it is not a common practice to name properties this way. Try to stick to the single-word convention. In this case brackets can be used for example to loop over object properties:
```
let myObject = {
    prop1: 1,
    prop2: 2,
    prop3: 3
}

let objectProperties = Object.keys(myObject); // Object.keys(obj) returns an array with names of all properties
console.log(objectProperties); // ["prop1", "prop2", "prop3"];

for(let i = 0; i < objectProperties.length; i++) {
    console.log(myObject[objectProperties[i]]);
}

>>> ["prop1", "prop2", "prop3"]
>>> 1
>>> 2
>>> 3
```
\
Try the bracket notation, print the numeric values of _amazingObj_. One console.log() for each value.