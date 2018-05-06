const localization = require('./lib/js-gettext');

const __ = localization('en');

const text = __('index.hello', 'Hello Fucking World');
const text2 = __('index.hello');

console.log(text);
console.log(text2);
