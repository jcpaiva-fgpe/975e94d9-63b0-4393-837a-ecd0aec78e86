ES6, released in 2015, added many powerful new features to the JavaScript language. We've already told you that there are three keywords which allows you to create a new variable: `var`, `let` and `const`. Which one to use and when?
\
Before 2015 we were used to the `var` keyword, because of the lack of an alternative. Every single variable was made with it.
\
To understand why the JavaScript world needed additional two keywords we need to learn about _scope_. Let's start with the **let** keyword.
\
Variables declared by _var_ keyword are scoped to the immediate function body (hence the **function scope**).
The _let_ keyword on the other hand is scoped to the immediate **enclosing** body denoted by `{ }`
\
Take a look at these examples:
```
function main() {
    var old = "Old";
    let new = "New";

    console.log(old, new); // Old New

    {
        var older = "Older";
        let newer = "Newer";
        console.log(older, newer); // Older Newer
    }

    console.log(older); // Older
    console.log(newer); // ReferenceError
}
```
As you can see the old `var` keyword could be pretty confusing. That's why the `let` keyword was introduced.
\
What is very important, at the top level _let_, unlike _var_, does not create a variable globally:
```
var old = "Old";
let new = "New";

console.log(old); // Old
console.log(new); // undefined
```
Thanks to this keyword we can a lot easier predict the behavior of our variables.
\
Try to fix the code below by changing the _var_ keyword to _let_.
