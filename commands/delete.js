const fs = require('fs')
/**
 * Deletes a task from the task list by id number
 * @param {string} todoList - the name of the file the tasks are in
 * @param {string} idNum - the id of task to delete
 */
const deleting = function deleting(todoList, idNum) {
  // grab the list
  const tasks = JSON.parse(fs.readFileSync(todoList, 'utf8'))
  // check to make sure they entered a id number from the list
  let ind = -1
  for (let i = 1; i < tasks.length; i += 1) {
    if (tasks[i].id === Number(idNum)) {
      ind = i
    }
  }
  // with a legit list item id, remove that item from list
  if (ind > 0) {
    console.log(`Deleted task ${idNum}: ${tasks[ind].task}`)
    tasks.splice(ind, 1)
    fs.writeFileSync(todoList, JSON.stringify(tasks))
  } else {
    console.log('Error: no task with that ID. Use list to see tasks.')
  }
}

module.exports = deleting
