// function Person() {
//   this.name = 'yunqi',
//   this.gae = 18
// }
// Person.prototype.id = 1
// var people = new Person()
// people.sex = '男人'
// for(let i in people){
//   console.log(i)
// }
// console.log(Object.keys(people))
var person = {
  name:'jj',
  age:'18',
  _sex:'man'
};
Object.defineProperty(person, "name", {
  value:'Beichen',
  enumerable:false
  // writable:true
})
// console.log(person._sex)
// delete person.name
// console.log(person)

// for(let k of Object.keys(person)) {

//   console.log(person[k])
// }
for ( let i in person ) {
  console.log(person[i])
}
console.log(Object.keys(person))

