

var chai = require('chai');
var expect = chai.expect;

var fs = require('fs');

var lib = require('..');

var fakePid = '8888';

describe('lib.pid', function() {

  describe('getRunning', function() {

    it('returns a saved pid', function() {

      lib.pid.save(fakePid);

      expect(
        lib.pid.getRunning()
      ).to.equal(fakePid);

      lib.pid.delete();
    })

    it('returns null if pid file doesnt exist', function() {

      expect(
        lib.pid.getRunning()
      ).to.equal(null);
    })
  })

  describe('delete', function() {

    it('deletes the pid file', function() {

      lib.pid.save(fakePid);
      lib.pid.delete();

      var checkIfPidFileExist = function() {
        fs.readFileSync(lib.pid.getPidFilePath());
      }

      expect(checkIfPidFileExist).to.throw(Error);
    })
  })

  describe('save', function() {

    it('creates a pid file', function() {

      lib.pid.save(fakePid);

      var checkIfPidFileExist = function() {
        fs.readFileSync(lib.pid.getPidFilePath());
      }

      expect(checkIfPidFileExist).not.to.throw(Error);

    })
  })


})
