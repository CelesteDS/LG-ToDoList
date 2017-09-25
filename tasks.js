#!/usr/bin/env node
// ^this is the way to ensure node is found anywhere

const add = require('./commands/add.js')
const list = require('./commands/list.js')
const deleting = require('./commands/delete.js')
const complete = require('./commands/complete.js')

const todoList = 'tasks.json'

const call = process.argv[2]
const userTask = process.argv[3]
// bds: what if the task is more than one word, and not quoted?

switch (call) {
  case 'add':
    add(todoList, userTask)
    break
  case 'list':
    list(todoList)
    break
  case 'complete':
    complete(todoList, userTask)
    break
  case 'delete':
    deleting(todoList, userTask)
    break
  default:
    console.log('You can do the following [add, list, complete, delete]')
    break
}
// bds: this looks great -- nice and clean :-)
