const fs = require('fs')
/**
* Adds a new task to the JSON task list
* with the task, whether it's complete, and a unique id number
* (creates the JSON file if it doesn't exist)
* @param {string} tdList - the name of the file to write to
* @param {string} addMe - the task to add to the to do list
*/
const add = function (tdList, addMe) {
  if (addMe != undefined) {
    if (!fs.existsSync(tdList)) {
      let start = JSON.stringify([{idCount: 1}], null, '\t')
      fs.writeFileSync(tdList, start)
    }
    let hold = fs.readFileSync(tdList, 'utf8')
    const tasks = JSON.parse(hold)
    tasks.push({task: addMe, complete: false, id: tasks[0].idCount})
    console.log('Created task ' + tasks[0].idCount)
    tasks[0].idCount++
    fs.writeFileSync(tdList, JSON.stringify(tasks, null, '\t'))
  } else {
    console.log('Describe a task to add it to the list')
  }
}

module.exports = add
// each json elem should have 3 key value
// task:
// complete: (starts false)
// id: increments w each added task
