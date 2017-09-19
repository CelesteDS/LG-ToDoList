const expect = require("chai").expect;
const fs = require('fs');
const add = require("./commands/add.js");
const list = require("./commmands/list.js");
const delete = require("./commands/delete.js");
const complete = require("./commands/complete.js");

describe('add()', () => {
	it('should add the element to the end of the JSON obj', () => {
	    add('testTasks.json', 'test1');
	    expect('testTasks.json').to.exist;
         })
})


describe('complete()', () => {
	it('should mark the task as complete'), () => {
	
	})
})
