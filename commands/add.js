const fs = require('fs');

const add = module.exports = function(tdList, addMe){
  var hold = fs.readFileSync(tdList, 'utf8');
  console.log(hold);
  fs.writeFileSync(tdList,`${hold}{'task':${addMe},'complete':${false},'id':${0}},\n`);

}


//each json elem should have 3 key value
//task:
//complete: (starts false)
//id: increments w each added task
