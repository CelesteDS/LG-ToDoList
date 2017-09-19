const fs = require('fs');

const deleting = function(tdList, idNum){
//grab the list
  let tasks = JSON.parse(fs.readFileSync(tdList, 'utf8'));
//check to make sure they entered a valid id number
  let ind = -1;
  for(let i = 0; i <tasks.length; i++){
    if(tasks[i]['id']==idNum){
      ind = i;
    }
  }

  if(ind>0){
    console.log(`Deleted task ${idNum}: ${tasks[ind]['task']}`);
    tasks.splice(ind, 1);
    fs.writeFileSync(tdList,JSON.stringify(tasks));
  }else{
    console.log("Error: no task with that ID. Use list to see tasks.");
  }

}


module.exports = deleting;
