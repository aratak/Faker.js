var _ = require('underscore');

// var Custom = require('./lib/custom')({
//   keywords: ['first', 'second', 'third']
//   devices: ['Phone/iOS', 'Desktop/MacOS', 'Tablet/iOS']
// });
// Custom.keywords() // => 'first'
// Custom.devices() // => 'Phone/iOS'

module.exports = function(options) {
  options = options || {}
  _.extend({collections:{}}, options);
  var result = {};

  var getRandomElements = function(collectionArray, count) {
    count = count || 1;
    var result =  _.shuffle(collectionArray).slice(0, count);
    return result.length == 1 ? result[0] : result;
  }

  _.each(options.collections, function(collectionArray, collectionName) {
    result[collectionName] = function(count) {
      return getRandomElements(collectionArray, count);
    }
  });

  return result;
}
