const fs = require('fs')
/**
 * Deletes a task from the task list by id number
 * @param {string} todoList - the name of the file the tasks are in
 * @param {string} idNum - the id of task to delete
 */
 // bds: make sure to include an @returns in your JSDoc, even if it's just
 // bds: undefined.

// bds: my eslint was very angry that all of the below was indented one space.
 const deleting = function deleting(todoList, idNum) {
  // grab the list
  const tasks = JSON.parse(fs.readFileSync(todoList, 'utf8'))
  // check to make sure they entered a id number from the list
  // bds: lots of repeat from "complete.js". Maybe make a file that contains
  // bds: shared code (in the form of a function) and import it into both files?
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
