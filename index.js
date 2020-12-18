var PersonLogic = require('./domain/person/person.logic');
var person1 = new PersonLogic('Syamsul','12345','2000-02-02');
//console.log(person1);
//console.log(person1.getWeekType());

var PersonByAge = require('./domain/personAge/personAge.logic');
var person2 = new PersonByAge('Syamsul','12345','2000-02-02');
//console.log(person2.generation());

if (person1.getWeekType() === 'Weekday' || person1.getWeekType() === 'Weekend') {
    console.log(`${person1.name} lahir pada tipe minggu ${person1.getWeekType()}`)
  } else {
    console.log(`Tanggal lahir ${person1.name} bermasalah`)  
  }
  console.log(`Saat ini berumur ${person1.getAge()}`)

// =====

var age1 = new PersonByAge('Syamsul', '12345', '2000-02-02');
console.log(`Merupakan seorang ${age1.generation()}`)