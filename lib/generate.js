const fs = require('fs');

// console.log(process.argv[2]);
console.log('Generating locale file.');
fs.readFile('./index.js', 'utf8', (err, data) => {
  if (err) throw err;
  lines = data.split('\n');
  const en = require('../locales/en.json');
  let count = 0;
  const code = lines.map((l) => {
    let line = l;
    if (line.indexOf('index.hello') >= 0) {
      const splitedLine = line.split(',');
      if(splitedLine.length > 1) {
        const text = splitedLine[1].split("'").filter(d => d !== ' ' && d !== '');
        console.log(`New text: index.hello -> ${text[0]}`)
        line = line.split("'").filter(d => d !== ',' && d !== ', ').join("'").split(`${text[0]}'`).join('');
        en.index.hello = text[0];
        count++;
      }
    }
    return line;
  });
  fs.writeFile("./locales/en.json", JSON.stringify(en), function(err) {
      if(err) {
          return console.log(err);
      }
      console.log(`${process.argv[2]}.json generated.`);
      console.log(`New word found ${count}`)
  })
  fs.writeFile("./index.js", code.join('\n'), function(err) {
      if(err) {
          return console.log(err);
      }
      console.log('index.js clear');
  })
});
