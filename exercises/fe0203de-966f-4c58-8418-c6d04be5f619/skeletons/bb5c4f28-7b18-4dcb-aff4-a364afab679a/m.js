function main() {
    let grade = parseFloat(readln());

    if (grade == 5.0) {
        console.log('Congratulations!');
    }
    if (grade >= 4.0) {
        console.log('Not bad!');
    }       
    if (grade >= 3.0) {
        console.log('Made it again!');
    } else {
        console.log('What a pity.')
    }    
}