const moment = require("moment");

const sortProduct = input => {
  // sort
  input.sort((a,b)=> a.dateAdded > b.dateAdded)

  let ret =  input
  // groupe by id
  .reduce((acc, value)=>{
    if(moment(value.dateAdded).year() > 2000){
      if(acc[value.name] == undefined){ acc[value.name] = []}
      acc[value.name].push(value) 

      // format
      acc[value.name] = acc[value.name]
      .reduce((acc, value)=> {
        if(value.monthOfYear == undefined){
          return [...acc, 
              {
                name : value.name, 
                year : moment(value.dateAdded).year(),
                monthOfYear : moment(value.dateAdded).month() +1,
                quantity : value.quantity
              }]
        }
        else{
          return [...acc, value]
        }
      },[])
    }

    return acc
  },{})

  //console.log(ret)
  return ret;

};

module.exports = {
  title: "Exercise 1",
  run: sortProduct
};
