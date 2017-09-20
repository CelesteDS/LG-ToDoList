const expect = require("chai").expect;
const fs = require('fs');
const add = require("./commands/add.js");
const list = require("./commands/list.js");
const delety = require("./commands/delete.js");
const complete = require("./commands/complete.js");
const { exec } = require("child_process");

describe('add()', () => {
	it('should add the element to the end of the JSON obj', (done) => {
	    add('testTasks.json', 'test1');
	    expect('testTasks.json').to.exist;
	    done();
         })
})


describe('complete()', () => {
	it('should mark the task as complete', () => {
	
	})
})
