function main() {
    let pattern = 'logmein';
    let password = readln();

    if (password == pattern) {
	    console.log('You are logged in');
    } else {
        console.log("Acces denied")
    }
}