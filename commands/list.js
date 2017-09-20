const fs = require('fs')
/**
* Lists the uncompleted tasks with their ID #
* @param {string} tdList - the name of the JSON file the tasks are in
*/
const list = (tdList) => {
    // if no tasks have yet been added, print appropriate message
    console.log('ID Description\n-- -----------')
    let tasks = 'You have 0 tasks'
    if (fs.existsSync(tdList)) {
        let yrList = JSON.parse(fs.readFileSync(tdList, 'utf8'))
        if (yrList.length > 1) {
            for (var i = 1; i < yrList.length; i++) {
                if (!yrList[i]['complete']) {
                    tasks.includes('You have 0 tasks') ? tasks = '' : null
                    tasks += yrList[i]['id'] + '  ' + yrList[i]['task'] + '\n'
                }
            }
        }
    }
    console.log(tasks)
}

module.exports = list;
