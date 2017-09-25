const fs = require('fs')
/**
* Adds a new task to the JSON task list
* with the task, whether it's complete, and a unique id number
* (creates the JSON file if it doesn't exist)
* @param {string} todoList - the name of the file to write to
* @param {string} addMe - the task to add to the to do list
*/
// bds: Love the JSDoc! :-D
// bds: make sure to include an @returns in your JSDoc, even if it's just
// bds: undefined. Note: there's linting for jsdoc! See
// bds: http://www.acuriousanimal.com/2016/08/14/configuring-atom-with-eslint.html
// bds: (search the page for jsdoc)
const add = function add(todoList, addMe) {
  if (addMe !== undefined) { // in case someone doesn't enter a task
    if (!fs.existsSync(todoList)) {
      // bds: JSON can be an object instead of an array
      // bds: for your strategy here, I'd initialize the JSON to be
      // bds: { currentId: 1, tasks: [] }
      // bds: no need to make a fake task to keep track of the current ID
      // bds: even more simply, though, you could get the length of the
      // bds: tasks array and do away with the need to track the current ID altogether...
      const start = JSON.stringify([{ idCount: 1 }], null, '\t')
      fs.writeFileSync(todoList, start)
    }
    // bds: why the variable name "hold"? I'd recommend rawTasks instead
    const hold = fs.readFileSync(todoList, 'utf8')
    const tasks = JSON.parse(hold)
    tasks.push({ task: addMe, complete: false, id: tasks[0].idCount })
    // bds: hooray for template literals! :-D
    console.log(`Created task ${tasks[0].idCount}`)
    tasks[0].idCount += 1
    fs.writeFileSync(todoList, JSON.stringify(tasks, null, '\t'))
  } else {
    // bds: coding organization philosophy: does this logic belong here, or
    // bds: in tasks.js? I'd say it's tasks.js's job to deal with usage errors,
    // bds: not the commands functions.
    // bds: also: if there is one short consequence of the logic, and one long
    // bds: one, I'd put the short one first (that is, make the condition
    // bds: addMe === undefined) -- it makes the code more readable to see the
    // bds: start of both possible paths close together. Here, you see the else,
    // bds: and you have to read back to figure out what the else is elsing
    console.log('Use format tasks.js add "Your task here"')
  }
}

module.exports = add
// each json elem should have 3 key value
// task:
// complete: (starts false)
// id: increments w each added task
