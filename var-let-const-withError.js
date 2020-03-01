

console.log('-----------    EXAMPLE 1   ------------')
console.log('A var can be called even before its declaration')
console.log('value1: ' + value1);
var value1 = 20;
console.log('-----------------------------------------------------')
{
    
    console.log('value2: ' + val2);
    let val2 = 30;
    console.log('Error because A let variable cannot be called even before its declaration')
}
console.log('-----------------------------------------------------')
{
    console.log('value2: ' + val2);
    const val2 = 30;
    console.log('A const variable cannot be called before its declaration')
}
console.log('-----------------------------------------------------')
console.log('-----------------------------------------------------')
console.log('-----------    EXAMPLE 2   ------------')
console.log('Var is Function scope Type');
var value3 = 40;
function random() {
    console.log('value3: ' + value3);
    console.log('Tries to Search one level up in the scope ie Global')
    value3 = 30;
    console.log("Modified the value within function but it should reflect the same in global scope");
    console.log('value3:' + value3);
}
random();
value3 = 30;
console.log('value3:' + value3);

console.log('-----------------------------------------------------')
let value4 = 40;
function random() {
    console.log('value4: ' + value4);
    console.log('Tries to search in the block scope , here it is function random')
    let value4 = 30;
    console.log('value4:' + value4);
}
random();
console.log('Function random did not mofidy value4')
console.log('value4:' + value4);