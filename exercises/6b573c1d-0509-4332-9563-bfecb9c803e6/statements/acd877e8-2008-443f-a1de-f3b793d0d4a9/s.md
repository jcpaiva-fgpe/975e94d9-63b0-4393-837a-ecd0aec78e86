Almost everything in JavaScript is an `object`. Objects are very similar to `arrays`, but to access the data you use `properties`, not `indexes`.
\
Objects are very useful to store complex structured data, and can represent real world objects, like an animal:
```
let animal = {
    "legs": 4,
    "tails": 1,
    "eyes": 2,
    "name": "dog",
    "friends": ["people", "sometimes cats"],
    "enemies": ["cats", "vacuum cleaners"]
}
```
As you can see properties can store every type of data, even other objects.
\
You can also ommit the quotes for single-word properties:
```
let car = {
    manufacturer: "Ford",
    name: "Focus"
}
```
Make an object which represents a cat called _myCat_ that contains the properties name (a string) such as legs, tails and friends.


