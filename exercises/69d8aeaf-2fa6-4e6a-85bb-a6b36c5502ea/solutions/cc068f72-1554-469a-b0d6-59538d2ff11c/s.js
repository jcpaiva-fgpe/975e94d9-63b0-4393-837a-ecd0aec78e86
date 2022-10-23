function main() {
    x = readln();

    if(10 < x < 100 && x % 3 == 0) {
        console.log('Matches both conditions.');
    } else {
        console.log('Does not match both conditions at once.');
    }    
}