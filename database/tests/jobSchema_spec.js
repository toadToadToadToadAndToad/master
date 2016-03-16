import expect from 'chai';
import Job from '../models/job';

describe('Job Model Testing', function() {
  it('should create a job', function *() {
    var job = new Job();
    expect(job).to.be.a('object');
  });

  it('should store passed properties when instantiated', function *(){
    let title = "Junior Dev";
    let company = "Github Inc.";
    var job = new Job({title: title, company: company, location: location});
    expect(job.title).to.equal("Junior Dev");
    expect(job.company).to.have.property("Github Inc.");
  });

});


// var assert = chai.assert;
// var should = chai.should();
// var expect = chai.expect;

// describe('the todo.App', function() {
//   describe('the todo object', function(){

//     it('should be an object', function(){
//       expect(todo).to.be.a('object');
//     });
  
//     it('should have all the necessary methods', function(){
      
//       expect(todo.util).to.have.property('trimTodoName');
//       expect(todo.util).to.have.property('isValidTodoName');
//       expect(todo.util).to.have.property('getUniqueId');
//       });
//   });
// }); 