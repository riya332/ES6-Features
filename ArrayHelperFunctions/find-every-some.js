var companies = ['MICROSOFT', 'APPLE', 'GOOGLE', 'AMAZON'];

function findStr(str) {
    return str.startsWith('A');
}
let findExample = companies.find(findStr);
console.log('Find EXAMPLE: ' + findExample);

let everyExample = companies.every(findStr);
console.log('Every EXAMPLE: ' + everyExample);// Return false since every element does not meet the condition

let someExample = companies.some(findStr);
console.log('Some Example: ' + someExample);