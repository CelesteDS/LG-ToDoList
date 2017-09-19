const fs = require('fs');

const list = (tdList) => {
  //if no tasks have yet been added, print appropriate message
  let tasks = "";
  if(!fs.existsSync(tdList)){
    tasks += "You have 0 tasks";
  }else{
    console.log('ID Description\n-- -----------');
    let yrList = JSON.parse(fs.readFileSync(tdList, 'utf8'));
    if(yrList.length>1){
    for(var i = 1; i < yrList.length; i++){
      if(!yrList[i]['complete']){
       tasks += yrList[i]['id']+'  '+yrList[i]['task']+'\n';
     }
    }
  }else{
    tasks += "You have 0 tasks";
  }
  //in the case of all tasks completed, tasks will be empty
  if(tasks.length<=0){
    tasks += "You have 0 tasks";
  }
  }
console.log(tasks);
}

module.exports = list;
