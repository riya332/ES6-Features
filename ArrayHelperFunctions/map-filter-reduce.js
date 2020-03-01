var companies = ['MICROSOFT', 'APPLE', 'GOOGLE', 'AMAZON'];
function changeCase(str){
    return str.toLowerCase();
}
 let mappedResult = companies.map(changeCase);
 console.log('MAP EXAMPLE :' + mappedResult);
 
function filterStr(str){
    return str.startsWith('A');
}
let filteredCompanies = companies.filter(filterStr);
console.log('FILTER EXAMPLE: ' + filteredCompanies);


function concatenateStrings(baseString, str1){
    return baseString + ', ' + str1;
}
let reducedResult = companies.reduce(concatenateStrings, '')
console.log('REDUCE EXAMPLE: ' + reducedResult);