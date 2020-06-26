var person = {
  name:'jj',
  age:'18',
  _sex:'man'
};
Object.defineProperty(person, "name", {
  value:'Beichen',
  // writable:true
})
// console.log(person._sex)
// delete person.name
// console.log(person)

for(let k of Object.keys(person)) {
  console.log(Object.keys(person))
  console.log(person[k])
}

