function main() {
    console.log('Enter the secret lunch code:')
    let code;

    for(let i = 1; i <= 3; i++) {
        code = readln();

        if(code == 'Yummy!') {
            console.log('That is a good one!');
            break;
        } else {
            console.log('That is not good.');
        }
        if(i == 3) {
            console.log('Maximum number of login attempts has been reached.');
        }
    }
}