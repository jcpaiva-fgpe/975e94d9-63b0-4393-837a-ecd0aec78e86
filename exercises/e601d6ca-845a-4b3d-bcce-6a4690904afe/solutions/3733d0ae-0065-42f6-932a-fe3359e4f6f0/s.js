function main() {
    let age = parseInt(readln('How old are you?\n'));

    while (age < 18) {
        console.log(`Still ${18 - age} years until the age of majority.`);
        
        age = parseInt(readln('How old are you now?\n'));
    }
        
    console.log('Finally adult!');
}