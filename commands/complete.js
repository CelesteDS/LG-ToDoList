const fs = require('fs')
/**
 * Adds a new task to the JSON task list
 * (creates the JSON file if it doesn't exist)
 * @param {string} todoList - the name of the file the tasks are in
 * @param {string} idNum - the id of task to complete
 */
const complete = function complete(todoList, idNum) {
  // grab the list
  const tasks = JSON.parse(fs.readFileSync(todoList, 'utf8'))
  // check to make sure they entered a id number from the list
  let ind = -1
  for (let i = 1; i < tasks.length; i += 1) {
    if (tasks[i].id === Number(idNum)) {
      ind = i
    }
  }
  if (ind > 0) {
    if (!tasks[ind].complete) {
      tasks[ind].complete = true
      console.log(`Completed task ${idNum}: ${tasks[ind].task}`)
      fs.writeFileSync(todoList, JSON.stringify(tasks))
    } else {
      console.log('That task has already been completed!')
    }
  } else {
    console.log('Invalid number. Use list to see all tasks.')
  }
}

module.exports = complete
