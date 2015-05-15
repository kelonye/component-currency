Currencies
---

- usd
- eur

Install
---

    $ npm install -g component
    $ component install kelonye/component-currency

Example
---

```javascript

// currency

var currency = require('component-currency');

// eur

var eur = currency('eur');
console.log(eur('7.000,01')); // 7000.01  => parse
console.log(eur(7000.01));    // 7.000,01 => format

// custom

var opts = {
  sep: ' ',
  dec: '^'
};
var custom = currency(opts);
console.log(custom('7 000^01')); // 7000.01  => parse
console.log(custom(7000.01));    // 7 000^01 => format

```

Test
---

    $ make test

Licence
---

MIT