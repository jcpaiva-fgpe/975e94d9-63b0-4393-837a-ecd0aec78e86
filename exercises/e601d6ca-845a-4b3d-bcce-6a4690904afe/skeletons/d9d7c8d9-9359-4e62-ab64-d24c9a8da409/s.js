function main() {
    let age = parseInt(readln('How old are you?\n'));

    while (age < 18) {
        console.log('Underage.');
        
        age = parseInt(readln('How old are you now?\n'));
    }
        
    console.log('Finally adult!');
}