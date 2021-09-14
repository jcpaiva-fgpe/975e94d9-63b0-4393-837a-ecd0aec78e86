function main() {
    const FAVORITE_SONG = 'Careless Whisper';

    // Change code above this line
    try {      
        FAVORITE_SONG = 'Careless Whisper'
        console.log("My favorite song is " + FAVORITE_SONG);
    } catch(err) {
        console.log("Someone has tried to change what is my favorite song!")
    }
}