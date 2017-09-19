#!/usr/local/Cellar/node/8.4.0/bin/node

const fs = require('fs');
const add = require('./commands/add.js');
const list = require('./commands/list.js');
const deleting = require('./commands/delete.js');
const complete = require('./commands/complete.js');
var tdList = 'tasks.json';


// console.log(process.argv);
var call = process.argv[2];
var userTask = process.argv[3];

switch (call) {
  case 'add':
    add(tdList, userTask);
    break;
  case 'list':
    list(tdList);
    break;
  case 'complete':
    complete(tdList, userTask);
    break;
  case 'delete':
    deleting(tdList, userTask);
    break;
  default:
    console.log("You can do the following [add, list, complete, delete]");
    break;
}

//console.log(add(['ab', 'cd', 'ef'], process.argv[2]));
