If statements are used to make decisions in code. The keyword _if_ tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses.
\
If the condition is false you can add a second statement after in the parentheses after the _else_ keyword.
```
if(condition is true) {
    statement is going to be executed
}
```
\
Here's a small example:
```
function main() {
    let myNumber = 12;
    if(myNumber > 10) {
        console.log(`Your number ${myNumber} is bigger than 10.`);
    } else {
        console.log(`Your number ${myNumber} is lower than 10.`);
    }
}

>>> Your number 12 is bigger than 10.
```

\
In the program below add a condition, that checks if the value of the variable age is less than 18. In that case _child_ should be displayed.
\
As next in the first line, change the value of age to 9 and run the program.
\
To complete the task, write your code and click the Submit button.