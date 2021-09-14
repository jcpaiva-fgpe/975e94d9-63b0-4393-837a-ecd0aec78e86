You can create more than one variable at once using this syntax:
```
    let [x, y] = [3, 4];
    console.log(x, y);
    >>> 3 4
```
This assignment is called a **destructuring assignment**.
\

If you find it too complex, you can also try to use this:
```
    const x = 1, y = 2;
    console.log(x, y);
    >>> 1 2
```
\

You can then switch values of these variables in one line:
```
    let [x, y] = [1, 2];
    [x, y] = [y, x];
    console.log(x, y);
    >>> 2 1
```

Set the variable **x** to 3 and the variable **y** to 4, then using a comma, replace the values of the variables (so that the current x value goes to y, and the y value goes to x), and finally display it on one line values of x and y variables.
\
You'll need to use the _let_ keyword only once, no more.