Strings in JavaScript are immutable, which means that they cannot be changed once defined.
\
Take a look at this example:
```
let myString = "I'm immortal!";
myString[4] = "not "; // Does not change the string, just returns the 5th element.
```
We cannot change the value of _myString_ to "I'm not immortal!", because contents of _myString_ cannot be modified once created. But that doesn't mean that this variable cannot be changed. This means that the individual characters of a _string literal_ cannot be changed.
\
There's one way to change _myString_ - the new string assignment:
```
let myString = "I'm immortal!";
myString = "I'm not immortal!";
```
\
Try to correct the string stored in _myAmazingString_ so it contains the string value of "Hello!".