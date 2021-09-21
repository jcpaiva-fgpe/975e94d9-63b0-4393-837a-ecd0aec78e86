To delete a property we need to use a special keyword _delete_:
```
let myObject = {
    min: 1,
    mid: 5,
    max: 10
}
delete myObject.mid;
console.log(myObject);

>>> {min: 1, max: 10}
```
Try to delete all object properties and add a new one called _isCool_.