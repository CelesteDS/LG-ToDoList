const fs = require('fs');

const list = (tdList) => {
  //if no tasks have yet been added, print appropriate message
  if(!fs.existsSync(tdList)){
    console.log("Nothing in your to do list yet! Use add to add an item.");
  }else{
    console.log('ID Description\n-- -----------');
    let yrList = JSON.parse(fs.readFileSync(tdList, 'utf8'));
    if(yrList.length>1){
    for(var i = 1; i < yrList.length; i++){
      if(!yrList[i]['complete']){
       console.log(yrList[i]['id']+'  '+yrList[i]['task']);
     }
    }
  }else{
    console.log("You have 0 tasks")
  }

  }

}

module.exports = list;
