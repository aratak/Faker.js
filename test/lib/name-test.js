var assert = require('assert');
var mockery = require('mockery');

describe('Faker::Name', function(){
  var Name;

  describe('#firstName', function(){

    before(function() {
      mockery.enable();
      mockery.registerMock('./definitions', {
        'first_name': function() { return ["Marry"]; }
      });
      mockery.registerAllowable('../index');
      mockery.registerAllowable('./helpers');
      mockery.registerAllowable('../../lib/name');
      Name = require('../../lib/name');
    });

    after(function() {
      Name = undefined;
      mockery.disable();
      mockery.deregisterAll();
    });

    it('should pick up from definitions.first_name array element', function() {
      assert.equal(Name.firstName(), "Marry");
    });

  });

  describe("#firstName", function() {
    before(function() {
      mockery.enable();
      mockery.registerMock('./definitions', {
        'first_name': function() { return ["Marry", "Rolf", "Justin"]; }
      });
      mockery.registerAllowable('../index');
      mockery.registerAllowable('../../lib/name');
      mockery.registerMock('./helpers', {
        'randomize': function(a) { return a[0]; }
      });
      Name = require('../../lib/name');
    });

    after(function() {
      Name = undefined;
      mockery.disable();
      mockery.deregisterAll();
    });

    it('should pick up from definitions.first_name random element', function() {
      assert.equal(Name.firstName(), "Marry");
    });
  });

  describe('#firstName', function(){

    before(function() {
      mockery.enable();
      mockery.registerMock('./definitions', {
        'last_name': function() { return ["Silver"]; }
      });
      mockery.registerAllowable('../index');
      mockery.registerAllowable('./helpers');
      mockery.registerAllowable('../../lib/name');
      Name = require('../../lib/name');
    });

    after(function() {
      Name = undefined;
      mockery.disable();
      mockery.deregisterAll();
    });

    it('should pick up from definitions.first_name array element', function() {
      assert.equal(Name.lastName(), "Silver");
    });

  });

  describe("#lastName", function() {
    before(function() {
      mockery.enable();
      mockery.registerMock('./definitions', {
        'last_name': function() { return ["Silver", "Back", "Einstein"]; }
      });
      mockery.registerAllowable('../index');
      mockery.registerAllowable('../../lib/name');
      mockery.registerMock('./helpers', {
        'randomize': function(a) { return a[0]; }
      });
      Name = require('../../lib/name');
    });

    after(function() {
      Name = undefined;
      mockery.disable();
      mockery.deregisterAll();
    });

    it('should pick up from definitions.first_name random element', function() {
      assert.equal(Name.lastName(), "Silver");
    });
  });



});
