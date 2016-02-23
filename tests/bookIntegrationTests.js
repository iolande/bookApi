'use strict';

var should = require('should');
var request = require('supertest');
var mongoose = require('mongoose');
var app = require('./../app.js');
var Book = mongoose.model('Book');
var agent = request.agent(app);

describe('Book CRUD Tests', function() {
  it('should allow a book to be posted and return a read and _id', function(done) {
    var bookPost = { title: ' New book', author: 'Joe Bloggs', genre: 'Fiction' };

    agent.post('/api/books')
      .send(bookPost)
      .expect(201)
      .end(function(err, results) {
        results.body.read.should.equal(false);
        results.body.should.have.property('_id');
        done();
      });
  });

  afterEach(function(done) {
    Book.remove().exec();
    done();
  });
});
