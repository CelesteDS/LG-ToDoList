const fs = require('fs');

const add = module.exports = function(tdList, addMe){
  if(addMe != undefined){
    if(!fs.existsSync(tdList)){
    let start = JSON.stringify([{idCount:1}]);
    fs.writeFileSync(tdList, start);
  }
  let hold = fs.readFileSync(tdList, 'utf8');
  const tasks = JSON.parse(hold);
  tasks.push({task:addMe, complete:false, id:tasks[0]['idCount']});
  console.log('Created task ' + tasks[0]['idCount']);
  tasks[0]['idCount']++;
  fs.writeFileSync(tdList,JSON.stringify(tasks));
}else{
  console.log("Describe a task to add it to the list");
}

}


//each json elem should have 3 key value
//task:
//complete: (starts false)
//id: increments w each added task
