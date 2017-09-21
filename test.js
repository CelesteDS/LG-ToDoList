const expect = require('chai').expect;
const fs = require('fs');
const add = require("./commands/add.js");
const list = require("./commands/list.js");
const delety = require("./commands/delete.js");
const complete = require("./commands/complete.js");
const { exec } = require("child_process");
const testArr = ['test1', 'test2', 'test3', 'test4'];
const testFile = 'testTasks.json';
const fnToAr = function (filename) {
	return JSON.parse(fs.readFileSync(filename, 'utf8'))
}

describe('add', () => {
	it('should create a new JSON file', (done) => {
	    testArr.forEach(function(elem) {
		add(testFile, elem);
	    })
	    expect(fs.existsSync('testTasks.json')).to.be.true;
	    done();
         })
	it('should put test1 into the JSON', (done) => {
	  expect(fnToAr(testFile)[1].task).to.eql('test1');
	  done();  
	})
})

describe('complete', () => {
	it('should mark the given task as complete', (done) => {
	    complete(testFile, 2);
	    expect(fnToAr(testFile)[2].complete).to.be.true;
	    done();
	})
})

describe('delety', () => {
	it('should delete the given task', (done) => {
	    delety(testFile, 3);
	    expect(fnToAr(testFile)[3].task).to.eql('test4');
	    done();

	})
})

describe('list', function () {
	let output = ''
	list() > output;
	it('should list the tasks', () => {
	    console.log(`The output is ${output}`);
	    it('shouldnt list the complete task', () => {
	    })
	    it('shouldnt list the deleted task', () => {
	    })	
	})
})

