var companies = ['MICROSOFT', 'APPLE', 'GOOGLE', 'AMAZON'];
function print(x){
    console.log(x);
}
with(companies){
    forEach(print);
}
