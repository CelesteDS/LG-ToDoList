const expect = require('chai').expect;
const fs = require('fs');
const add = require('./commands/add.js');
const list = require('./commands/list.js');
const delety = require('./commands/delete.js');
const complete = require('./commands/complete.js');
// const { exec } = require('child_process');

const testArr = ['test1', 'test2', 'test3', 'test4'];
const testFile = 'testTasks.json';
const testFile2 = 'testTasks2.json'

// bds: this could be used in your commands files as well!
// bds: consider putting it in a helper file for all to use. ;-)
const fnToAr = function fnToAr(filename) {
  return JSON.parse(fs.readFileSync(filename, 'utf8'))
}

describe('add', () => {
  before(() => {
    testArr.forEach(function (elem) {
      add(testFile, elem);
    })
  })
  it('should create a new JSON file', (done) => {
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
  let printedList = ''
  before(() => {
    testArr.forEach(function (elem) {
      add(testFile2, elem);
    })
    complete(testFile2, 2);
    delety(testFile2, 3);
    printedList = list(testFile2);
  })

  it('should list the tasks', (done) => {
    expect(printedList).to.include('test4');
    done();
  })

  it('shouldnt list the completed task', (finish) => {
    expect(printedList).to.not.include('test2');
    finish();
  })

  it('shouldnt list the deleted task', (finish) => {
    expect(printedList).to.not.include('test3');
    finish();
  })
})

// bds: consider what you *aren't* testing here.
// bds: For example: running "list" when there are no items in the do-do list
// bds: add a test for that. What else needs to be tested?

// bds: also: re-run all these tests after you've refactored as suggested!
// bds: you'll be able to tell whether or not it worked without having to test
// bds: by hand! Woo hoo!
