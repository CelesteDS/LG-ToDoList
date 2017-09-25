const fs = require('fs')
/**
* Lists the uncompleted tasks with their ID #
* @param {string} todoList - the name of the JSON file the tasks are in
*/
// bds: make sure to include an @returns in your JSDoc. Here you are actually
// bds: returning something!
const list = (todoList) => {
// testLog holds everything that goes to console.log- used for testing the output

  // bds: these should both be const, not let
  let testLog = 'ID Description\n-- -----------\n'
  let tasks = 'You have 0 tasks'

  const taskList = JSON.parse(fs.readFileSync(todoList, 'utf8'))
  if (taskList.length > 1) {
    // bds: see if you can use Array#reduce here instead
    // bds: and only worry about the "0 tasks" if Array#reduce comes up empty
    for (let i = 1; i < taskList.length; i += 1) {
      if (!taskList[i].complete) {
        if (tasks.includes('You have 0 tasks')) tasks = ''
        tasks += `${taskList[i].id} ${taskList[i].task}\n`
      }
    }
  }
  testLog += tasks
  console.log(testLog)
  return testLog
}

module.exports = list
