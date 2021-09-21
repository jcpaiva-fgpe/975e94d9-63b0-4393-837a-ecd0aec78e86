function main() {
    let myObject = {
        isAwful: false,
        isBad: false
    }

    // Change code below this line

    delete myObject.isAwful;
    delete myObject.isBad;
    myObject.isCool = true;

    // Change code above this line
    console.log(Object.keys(myObject).length < 2);
    console.log(Object.keys(myObject).forEach((key) => key == 'isCool' && console.log('true')));
}