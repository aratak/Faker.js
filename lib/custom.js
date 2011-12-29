var _ = require('underscore');

// var Custom = require('./lib/custom')({
//   collections: {
//     keywords: ['first', 'second', 'third'],
//     devices: ['Phone/iOS', 'Desktop/MacOS', 'Tablet/iOS']
//   }
// });
// Custom.keywords() // => 'first'
// Custom.devices() // => 'Phone/iOS'
//
// Custom.collections('keywords').add('new keyword');
// Custom.collections('keywords', 'another new keyword');
//

module.exports = function(options) {
  options = options || {};
  _.extend({collections:{}}, options);
  var result = {};

  var getRandomElements = function(collectionArray, requiredCount) {
    var resultAsValue = false;
    var count;
    var result;

    if(requiredCount === undefined) {
      count = 1;
      resultAsValue = true;
    }
    result =  _.shuffle(collectionArray).slice(0, count);
    return resultAsValue ? result[0] : result;
  };

  result['collections'] = function(collectionName, newElement) {

    var addNewElement = function(collectionName, newElement) {
      return options.collections[collectionName].push(newElement);
    };

    if (arguments.length == 1) {
      return {
        'all': function() { return options.collections[collectionName] },
        'add': function(newElement) { return addNewElement(collectionName, newElement); }
      };
    } else {
      return addNewElement(collectionName, newElement);
    }
  }

  _.each(options.collections, function(collectionArray, collectionName) {
    result[collectionName] = function(count) {
      return getRandomElements(collectionArray, count);
    }
  });

  return result;
}
