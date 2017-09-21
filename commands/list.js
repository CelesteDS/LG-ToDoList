const fs = require('fs')
/**
* Lists the uncompleted tasks with their ID #
* @param {string} todoList - the name of the JSON file the tasks are in
*/
const list = (todoList) => {
    // if no tasks have yet been added, print appropriate message
  console.log('ID Description\n-- -----------')
  let tasks = 'You have 0 tasks'
  if (fs.existsSync(todoList)) {
    let list = JSON.parse(fs.readFileSync(todoList, 'utf8'))
    if (list.length > 1) {
      for (let i = 1; i < list.length; i++) {
        if (!list[i].complete) {
          if (tasks.includes('You have 0 tasks')) tasks = ''
          tasks += `${list[i].id} ${list[i].task}\n`
        }
      }
    }
  }
  console.log(tasks)
}

module.exports = list
