A composition of loops is called a nested loop. The most common type of nested loops will be one loop inside another. The first loop is usually called the outer loop while the second loop is called the inner loop. 
\
Take a look at this example:
```
for (counter = 1; counter < 4; counter++) { // count from 1 to 3 three times
    console.log("Count from 1 to 3");
        for (counterTwo = 1; counterTwo < 4; counterTwo++){
            console.log(counterTwo);
        }
}

>>> "Count from 1 to 3"
>>> 1
>>> 2
>>> 3
>>> "Count from 1 to 3"
>>> 1
>>> 2
>>> 3
>>> "Count from 1 to 3"
>>> 1
>>> 2
>>> 3
```
The sample code above runs the outer loop and the inner loop four times each. The program prints the numbers 1 to 3, 3 different times.
\
Modify the following program to display a rectangular triangle that will have 1 star in the first line, two in the second & two, and seven in the last (seventh) & seven.
\
**Do not use if. Do not use the *(asterisk operator). Do not use variables other than x and y.**