module.exports = lang => (obj, text) => {
  if(text) {
    return text;
  }
  const en = require('../locales/en.json');
  const th = require('../locales/th.json');
  const type = {
    en,
    th,
  }
  return type[lang].index.hello;
}
