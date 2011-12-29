var sys = require('util');

var Faker = require('../index');

var card = Faker.Helpers.createCard();

sys.puts(JSON.stringify(card));
