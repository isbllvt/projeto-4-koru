function addIsAdult(person) {
  return {
    ...person,                 
    isAdult: person.age >= 18  
  };
}
const person = { name: "João", age: 20 };
const newPerson = addIsAdult(person);

console.log(newPerson);

function combineArrays(...arrays) {
  return [].concat(...arrays); 
}

