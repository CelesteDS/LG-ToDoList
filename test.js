var expect = require("chai").expect;
var add = require("./commands/add.js");

describe('add()', () => {
	it('should add the element to the end of the JSON obj', () => {
	    add('testTasks.json', 'This is my new test task');
	    expect('testTasks.json').to.exist;
         })
})
