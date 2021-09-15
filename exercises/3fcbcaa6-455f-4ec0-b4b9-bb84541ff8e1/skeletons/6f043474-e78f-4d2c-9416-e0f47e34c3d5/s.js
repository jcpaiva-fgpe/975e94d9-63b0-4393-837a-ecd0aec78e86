function main() {
    for(let i = 0; i < 7; i++) {
        let line = "*";
        for(let x = 0; x < 7; x++) {
            line = line + "*";
            console.log(line); // move to new line
        }
    }
}