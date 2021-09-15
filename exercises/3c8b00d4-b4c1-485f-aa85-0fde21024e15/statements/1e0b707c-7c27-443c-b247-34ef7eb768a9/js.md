The _break_ statement "jumps out" of a loop. Breaks it, ends.
\
The _continue_ statement "jumps over" one iteration in the loop.
\
Take a look at this example:
```
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "\n";
}
console.log(text);

>>> The number is 0
    The number is 1
    The number is 2
```
\
The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
\
Here's an example:
```
for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "\n";
}
console.log(text);

>>> The number is 0
    The number is 1
    The number is 2
    The number is 4
    The number is 5
    The number is 6
    The number is 7
    The number is 8
    The number is 9
```
This loop skips the step where i = 3.
\
Write some lines of code to enhance the functionality of the existing program considering the data from the user input.
\
The user has exactly three chances to enter the correct code. Use the **for** loop, and the **break** statement to display the output.
After the user entered the wrong code three times, the string _Maximum number of login attempts has been reached._ will be displayed and 
if the input was correct the message _That is a good one!_ appears, and jumps also out of the loop, same as in previous case.
\
Try to write your code below, define what happens if the wrong code is entered too many times.