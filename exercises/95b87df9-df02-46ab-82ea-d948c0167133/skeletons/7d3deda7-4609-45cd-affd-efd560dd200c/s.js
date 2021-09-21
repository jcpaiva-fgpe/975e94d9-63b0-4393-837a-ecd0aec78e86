function main(){
    let myObject = {
        prop1: 1,
        prop2: 2,
        prop3: 3
    }

    let objectProperties = Object.keys(myObject); // Object.keys(obj) returns an array with names of all properties
    console.log(objectProperties); // ["prop1", "prop2", "prop3"];

    for(let i = 0; i < objectProperties.length; i++) {
        console.log(myObject["prop1"]); // Change this line
    }
}