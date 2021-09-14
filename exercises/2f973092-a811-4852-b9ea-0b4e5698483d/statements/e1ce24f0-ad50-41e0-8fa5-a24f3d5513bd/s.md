Template Literals use back-ticks (``) rather than the quotes ("") to define a string:
\
```
let text = `Hello!`;
```
\
They have a lot of great features, such as:
- Multi-line string
```
let multiLine = `Hello
this is
a multiline string;
```
- Quotes inside strings - you can use both single and double quotes inside
```
let quotesInside = `I'm often called an "amazing" programmer`;
```
- Expression and strings interpolation
```
let woah = `Total: {(price * (1 + VAT)).toFixed(2)} ${currency}$`
console.log(woah);

>>>  Total: 2.50 EUR
```
\
Display a string of characters that beginns with a quotation mark, an apostrophe and a semicolon on the end, just like that: "'; 
\
You can use back-ticks, single or double quotes.