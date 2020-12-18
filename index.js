var PersonLogic = require('./domain/person/person.logic');
var person1 = new PersonLogic('Syamsul','7306020502010001','2001-02-05');
//console.log(person1.nik.substring(6,12));

if (person1.getWeekType() === 'Weekday' || person1.getWeekType() === 'Weekend') {
    console.log(`${person1.name} lahir pada tipe minggu ${person1.getWeekType()}`)
  } else {
    console.log(`Tanggal lahir ${person1.name} bermasalah`)  
  }
  console.log(`Saat ini berumur ${person1.getAge()}`)

// =====
var PersonByAge = require('./domain/personAge/personAge.logic');
var age1 = new PersonByAge('Syamsul', '7306020502010001', '2001-02-05');
console.log(`Merupakan seorang ${age1.generation()}`)

var PersonValidity = require('./domain/personValidity/personValidity.logic');
var nik1 = new PersonValidity('Syamsul','7306020502010001','2001-02-05')
console.log(`Jumlah Digit NIK ${nik1.name} ${nik1.nik} ${nik1.nikValidity()}`);
console.log(`Tgl Lahir ${nik1.bod} dan NIK ${nik1.nik} ${nik1.name} ${nik1.bodValidity()}`);