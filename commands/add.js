const fs = require('fs');

const add = module.exports = function(tdList, addMe){
  var hold = JSON.stringify(fs.readFileSync(tdList, 'utf8'),'null');
  console.log(hold);
  fs.writeFileSync(tdList,hold+{'task':addMe,'complete':false,'id':0},);

}


//each json elem should have 3 key value
//task:
//complete: (starts false)
//id: increments w each added task
