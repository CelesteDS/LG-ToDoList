const fs = require('fs');

const add = module.exports = function(tdList, addMe){
  let hold = fs.readFileSync(tdList, 'utf8');
  const tasks = JSON.parse(hold);
  tasks.push({task:addMe, complete:false, id:0});

  console.log(tasks);
  fs.writeFileSync(tdList,JSON.stringify(tasks));

}


//each json elem should have 3 key value
//task:
//complete: (starts false)
//id: increments w each added task
