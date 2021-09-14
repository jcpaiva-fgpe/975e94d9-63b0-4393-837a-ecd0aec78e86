**!** If you don't understand the _let_ keyword yet, please skip this exercise for now and go to the **let keyword**.
\
In JavaScript, `const` means that the identifier can't be **reassigned**. We need to assign the value when we are declare the variable:
```
const PI = 3.14159265359;
console.log(PI);

>>> 3.14159265359
```
```
const PI;
PI = 3.14159265359;
console.log(PI);

>>> Uncaught SyntaxError: Missing initializer in const declaration
```
**As a general rule, always declare a variable with const unless you know that the value will change.**
\
Now that _let_ and _const_ are here to stay, and you understand their concepts, I’d suggest avoid using _var_ at all.
Thanks to using only _let_ and _const_ your code will be cleaner and more elegant.
