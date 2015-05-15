var convert = require('component-currency');

describe('cards:', function() {
  it('should return null on unsupported card number', function() {
    assert.equal(convert('alien-dollar'), null);
  });
  it('should format and parse monies', function() {
    for (var currency in fixtures){
      var numbers = fixtures[currency];
      currency = convert(currency);
      assert.equal(currency(numbers[0]), numbers[1]);
      assert.equal(currency(numbers[1]), numbers[0]);
    }
  });
});
