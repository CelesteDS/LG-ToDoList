#!/usr/bin/env node
// ^this is the way to ensure node is found anywhere

const addy = require('./commands/add.js')
const listy = require('./commands/list.js')
const deletey = require('./commands/delete.js')
const completey = require('./commands/complete.js')

const todoList = 'tasks.json'

const call = process.argv[2]
const userTask = process.argv[3]

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
