const fs = require('fs-extra');
const path = require('path');

const versions = fs.readdirSync(path.join(__dirname, '../randoms'))
  .map(f => f.replace('.js', ''))
  .sort((a, b) => {
    const numA = parseFloat(a.replace('v', ''));
    const numB = parseFloat(b.replace('v', ''));
    return numA - numB;
  });

module.exports = versions;
