module.exports = lang => (obj, text) => {
  if(text) {
    return text;
  }
  const en = require('../locales/en.json');
  const type = {
    en,
  }
  return type[lang].index.hello;
}
