function main() {
    console.log("Please enter a number:");
    x = readln();

    if(10 < x < 100) {
        console.log('Matches both conditions.');
    } else {
        console.log('Does not match both conditions at once.');
    }    
}