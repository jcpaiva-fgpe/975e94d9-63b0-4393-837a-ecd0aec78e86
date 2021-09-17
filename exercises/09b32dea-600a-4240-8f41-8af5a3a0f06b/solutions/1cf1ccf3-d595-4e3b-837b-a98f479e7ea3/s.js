function main() {
    let myArray = [["adsada", 1], ["Hi", 2], ["Hey", 3]];
    // Add code below this line

    myArray.shift();
    myArray.unshift(["Hello", 1]);

    // Add code above this line
    console.log(myArray[0].toString())
}