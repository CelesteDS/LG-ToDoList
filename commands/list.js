const fs = require('fs');

const list = (tdList) => {
  if(!fs.existsSync(tdList)){
    console.log("Nothing in your to do list yet! Use add to add an item.");
  }else{
    console.log('ID Description\n-- -----------');
    let yrList = JSON.parse(fs.readFileSync(tdList, 'utf8'));
    for(var i = 1; i < 3; i++){
       console.log(yrList[i]['id']+'  '+yrList[i]['task']);
    }

  }

}

module.exports = list;
