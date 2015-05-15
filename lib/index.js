/**
  * Adapted from https://github.com/yields/currency/blob/master/index.js.
  */

/**
 * Module dependencies.
 */
var currencies = require('./currencies');


/**
 * Export `Currency`.
 */
module.exports = Currency;

/**
 * Format / Unformat the given `n` to currency.
 *
 * @param {String} currency
 * @return {Function}
 * @api public
 */
function Currency(currency){
  currency = currencies[currency];
  if (!currency) return;
  return function(n){
    switch (typeof n) {
      case 'string': return unformat(currency, n);
      case 'number': return format(currency, n);
    }
  };
};


/**
 * Format the given `n` to currency.
 *
 * Example:
 *
 *      format(1000);
 *      // => 1,000.00
 *
 * @param {Object} currency
 * @param {Number} n
 * @return {String}
 * @api private
 */
function format(currency, n){
  n = n.toFixed(2).toString();
  var parts = n.split('.');
  return parts[0]
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1'+currency.sep)
    + currency.dec
    + parts[1]
};


/**
 * Unformat the given `str`.
 *
 * @param {Object} currency
 * @param {String} str
 * @return {Number}
 * @api private
 */
function unformat(currency, str){
  return Number(str.replace(exp(currency.sep), '').replace(exp(currency.dec), '.'));
};


/**
 * Return RegExp for `str`.
 * 
 * @param  {String} str
 * @return RegExp
 */
function exp(str){
  return new RegExp('\\'+str, 'g');
};
