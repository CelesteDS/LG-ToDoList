const fs = require('fs');

const complete = function(tdList, idNum){
  //grab the list
    let tasks = JSON.parse(fs.readFileSync(tdList, 'utf8'));
  //check to make sure they entered a id number from the list
    let ind = -1;
    for(let i = 0; i <tasks.length; i++){
      if(tasks[i]['id']==idNum){
        ind = i;
      }
    }
    if(ind>0){
      if(!tasks[ind]['complete']){
        tasks[ind]['complete'] = true;
        console.log(`Completed task ${idNum}: ${tasks[ind]['task']}`);
        fs.writeFileSync(tdList,JSON.stringify(tasks));
      }else{
        console.log("That task has already been completed!");
      }
    }else{
      console.log("Invalid number. Use list to see all tasks.")
    }




}

module.exports = complete;
