var assert = require('assert');
var mockery = require('mockery');

describe('Faker::Name', function(){
  var Name;

  beforeEach(function() {
    mockery.enable();
    mockery.registerAllowable('../index');
    mockery.registerAllowable('../../lib/name');
  });

  afterEach(function() {
    Name = undefined;
    mockery.disable();
    mockery.deregisterAll();
  });

  describe('#firstName', function(){
    it('should pick up from definitions.first_name array element', function() {
      mockery.registerAllowable('./helpers');
      mockery.registerMock('./definitions', {
        'first_name': function() { return ["Marry"]; }
      });
      assert.equal(require('../../lib/name').firstName(), "Marry");
    });

    it('should pick up from definitions.first_name random element', function() {
      mockery.registerMock('./definitions', {
        'first_name': function() { return ["Marry", "Rolf", "Justin"]; }
      });
      mockery.registerMock('./helpers', {
        'randomize': function(a) { return a[0]; }
      });
      assert.equal(require('../../lib/name').firstName(), "Marry");
    });
  });

  describe('#lastName', function(){

    it('should pick up from definitions.first_name array element', function() {
      mockery.registerMock('./definitions', {
        'last_name': function() { return ["Silver"]; }
      });
      mockery.registerAllowable('./helpers');
      assert.equal(require('../../lib/name').lastName(), "Silver");
    });

    it('should pick up from definitions.first_name random element', function() {
      mockery.registerMock('./definitions', {
        'last_name': function() { return ["Silver", "Back", "Einstein"]; }
      });
      mockery.registerMock('./helpers', {
        'randomize': function(a) { return a[0]; }
      });
      assert.equal(require('../../lib/name').lastName(), "Silver");
    });
  });

});
