/**
 * Created by Rohail Najam on 2/10/2017.
 */


'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');
const iplocate = require('../index');

describe('#Requiring Iplocate', function() {
  it('Should return a function', function() {
    expect(iplocate).to.be.a.Function;
  });

  it('It should have 3 parameters', function() {
    expect(iplocate.length).to.equal(3);
  });

});

describe('#Tesing Middleware', function() {
  it('It should run next', function() {
    let mw      = iplocate;
    let nextSpy = sinon.spy();

    mw({ip : '104.53.24.134'}, {}, nextSpy)
      .then(function (data) {
      expect(nextSpy.called).to.be.true;
    })
  });

  it('It should get location Object', function() {
    let mw      = iplocate;
    let nextSpy = sinon.spy();

    mw({ip : '104.53.24.134'}, {}, nextSpy)
      .then(function (data) {
        expect(data).to.be.Object;
      })
  });



});