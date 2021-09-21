function main() {
    let myObject = {
        length: 12,
        max: 13,
        test: 2
    }

    let propertyName = readln(); // This variable stores name of the property the user is looking for

    // Change code below this line
    console.log(myObject.hasOwnProperty(propertyName) ? myObject[propertyName] : `This object does not have a property named ${propertyName}`);
}