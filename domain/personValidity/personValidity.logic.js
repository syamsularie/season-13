var PersonLogic = require('../person/person.logic')

class PersonValidityLogic extends PersonLogic{
  constructor(...args) {
    super(...args)
  }
  nikValidity(){
    if (this.nik.length === 16){
      return "Valid"
    }else{
      return "Tidak Valid"
    }
  }
  bodValidity(){
    var year = this.bod.substring(2,4)
    var month = this.bod.substring(5,7)
    var date = this.bod.substring(8,10)
    var result = date.concat(month,year)
    var nikdate = this.nik.substring(6,12)
    //console.log(result)
    if (result === nikdate){
      return "Valid"
    }else{
      return "Tidak Valid"
    }
  }
}
module.exports = PersonValidityLogic;