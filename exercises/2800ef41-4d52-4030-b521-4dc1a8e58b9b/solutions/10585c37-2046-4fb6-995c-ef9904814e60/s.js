function main() {
    let myArray = [[1,2], [1,2]];

    // This code checks if your array is multi-dimensional. Please, change the code above.
    console.log(myArray.every(item => Array.isArray(item))); // Returns true if myArray is multi-dimensional
}