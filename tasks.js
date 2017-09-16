#!/usr/local/Cellar/node/8.4.0/bin/node

const fs = require('fs');
const add = require('./commands/add.js');
var tdList = 'tasks.json'

console.log(process.argv);
var call = process.argv[2];
var userTask = process.argv[3];

switch (call) {
  case 'add':
    add(tdList, userTask);
    console.log(JSON.stringify(fs.readFileSync(tdList, 'utf8'),'null','\t'));
    break;
  /*case list:
    list();
    break;
  case complete:
    complete(userTask);
    break;
  case delete:
    delete(userTask);
    break;*/
  default:
    console.log("You can do the following [add, list, complete, delete]");
    break;
}

//console.log(add(['ab', 'cd', 'ef'], process.argv[2]));
