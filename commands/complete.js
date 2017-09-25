const fs = require('fs')
/**
 * Adds a new task to the JSON task list
 * (creates the JSON file if it doesn't exist)
 * @param {string} todoList - the name of the file the tasks are in
 * @param {string} idNum - the id of task to complete
 */
 // bds: make sure to include an @returns in your JSDoc, even if it's just
 // bds: undefined
const complete = function complete(todoList, idNum) {
  // grab the list
  const tasks = JSON.parse(fs.readFileSync(todoList, 'utf8'))
  // check to make sure they entered a id number from the list

  // bds: this is great to build from scratch so you understand how to do it
  // bds: however, more idiomatic javascript would be to use Array#find
  // bds: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  // bds: see the example "Find an object in an array by one of its properties"
  let ind = -1
  for (let i = 1; i < tasks.length; i += 1) {
    if (tasks[i].id === Number(idNum)) {
      ind = i
      // bds: you'll want to break here, to avoid looking at other IDs after
      // bds: you've already found your target
    }
  }
  // bds: the nesting of if/then/elses below is not ideal -- it's hard to read
  // bds: and follow. Use the fact that "return" ejects you from the function to
  // bds: get rid of the maze. ;-)
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
