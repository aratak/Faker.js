var assert = require('assert');
var mockery = require('mockery');

describe("Faker::Internet", function() {

  beforeEach(function() {
    mockery.enable();
    mockery.registerAllowable('../index');
    mockery.registerAllowable('./helpers');
    mockery.registerAllowable('../../lib/internet');
  });

  afterEach(function() {
    mockery.disable();
    mockery.deregisterAll();
  });

  describe("#userName", function() {
    beforeEach(function() {
      mockery.registerMock('./definitions', {
        'first_name': function() { return ["Marry"]; },
        'last_name': function() { return ["Smith"]; }
      });
    });

    it("should be as valid username with dot symbol", function() {
      mockery.registerMock('./helpers', {
        'randomize': function(e) { return e[0]; },
        'randomNumber': function(e) { return 1; }
      });
      assert.equal(require('../../lib/internet').userName(), "Marry.Smith");
    });

    it("should be as valid username without special symbols", function() {
      mockery.registerMock('./helpers', {
        'randomize': function(e) { return e[0]; },
        'randomNumber': function(e) { return 0; }
      });
      assert.equal(require('../../lib/internet').userName(), "Marry");
    });
  });

  describe("#domainName", function() {

    beforeEach(function() {
      mockery.registerMock('./definitions', {
        'domain_suffix': function() { return ["com"]; }
      });
    });

    it("should be alike domain name", function() {
      var Internet = require('../../lib/internet');
      // Internet.domainWord = function() { return ["example"] };
      assert.equal(Internet.domainName(), "example.com");
    });

  });
  describe("#ip", function() {
    beforeEach(function() {
      mockery.registerMock('./definitions', {});
      // Math.random = function() { return 1; }
    });

    it("should return correct ip address", function() {
      assert.equal(require('../../lib/internet').ip(), "255.255.255.255");
    });


  });
  describe("#email", function() {
    it("should return correct email");
  });
  describe("#userAgent", function() {
    it("should return correct user agent string");
  });

});
