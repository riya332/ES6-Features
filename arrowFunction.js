var companies = ['MICROSOFT', 'APPLE', 'GOOGLE', 'AMAZON'];

let printCompany = val => console.log(val);

companies.forEach(printCompany);

// Where Arrow Fails
var Person = {
    name: 'Riya',
    hobbies: ['Photography', 'Play Music', 'Travel'],
    knowPersonArrow: () => {
         console.log(this.name + ' loves to ' + this.hobbies.join(','));
    },
    knowPerson(){
        console.log(this.name + ' loves to ' + this.hobbies.join(','));
    }
}
Person.knowPerson();
//Person.knowPersonArrow();
