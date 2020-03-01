
console.log('-----------    EXAMPLE 1   ------------')

console.log('-----------------------------------------------------')
console.log('A var can be called even before its declaration')
console.log ('value1: ' + value1);
var value1 = 20;
console.log('-----------------------------------------------------')
{
    let val2 = 30;
    console.log('value2: ' +val2);
    console.log('Error because A let variable cannot be called even before its declaration')
}
console.log('-----------------------------------------------------')
{
    const val2 = 30;
    console.log('value2: ' + val2);
    console.log('A const variable cannot be called before its declaration')
}
console.log('-----------------------------------------------------')
console.log('-----------------------------------------------------')
console.log('-----------    EXAMPLE 2   ------------')
console.log('Var is Function scope Type');
var value3 = 40;
function random(){
    console.log('value3: ' +value3);
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
    let value4 = 30;
    console.log('value4: ' + value4);
    console.log('Tries to search in the block scope , here it is function random')
}
random();
console.log('Function random did not mofidy value4')
console.log('value4:' + value4);

console.log('-----------------------------------------------------')
console.log('-----------------------------------------------------')

function random2() {
    var value5 = 20;
    let value6 = 20;
    const value7 = 20;
    {
        var value5 = 30;
        let value6 = 30;
        const value7 = 30; 
        console.log('Value of var inside block is: ' + value5)
        console.log('Value of let inside block is: ' + value6)
        console.log('Value of const inside block is: ' + value7) 
    }
    console.log('Value of var outside block is: ' + value5)
    console.log('Value of let outside block is: ' + value6)
    console.log('Value of const outside block is: ' + value7) 
}
random2();



