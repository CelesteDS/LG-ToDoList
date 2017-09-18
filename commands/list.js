const fs = require('fs');

const list = (tdList) => {
  if(!fs.existsSync(tdList)){
    console.log("Nothing in your to do list yet! Use add to add an item.");
  }else{
    console.log(JSON.parse(fs.readFileSync(tdList, 'utf8')));
  }

}



module.exports = list;
