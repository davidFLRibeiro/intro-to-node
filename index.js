const fs = require('fs');
const contents = fs.readdirSync('./animals');
const { animateString } = require('./animate-string');
animateString(contents.join('\n'));
