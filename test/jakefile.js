desc('Run all tests');
task('vows', ['vows:lib']);

namespace('vows', function() {

  desc('Run lib tests');
  task('lib', function (params) {
    return require('./test');
  });

})
