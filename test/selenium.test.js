

var chai = require('chai');
var expect = chai.expect;

var fs = require('fs');

var lib = require('..');

describe('lib.selenium', function() {

  describe('getJarPath', function() {

    it('returns an existing jar file', function() {

      expect(
        fs.statSync(lib.selenium.getJarPath()).isFile()
      ).to.be.true.and.not.to.throw;
    })
  })

  describe('lib.getFileName', function() {

    it('contains the version number', function() {

      expect(
        lib.selenium.getFileName()
      ).to.contain(
        lib.selenium.getVersion()
      )
    })

    it('returns a jar file', function() {

      expect(
        lib.selenium.getFileName()
      ).to.contain('.jar')
    })
  })


})
