const localization = require('./lib/js-gettext');

const __ = localization('en');

const text = __('index.hello', 'Hello World');

console.log(text);
