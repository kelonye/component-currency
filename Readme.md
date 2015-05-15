Curencies
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

var eur = require('component-currency')('eur');

console.log(eur('7.000,01')); // 7000.01  => parse
console.log(eur(7000.01));    // 7.000,01 => format

```

Test
---

    $ make test

Licence
---

MIT