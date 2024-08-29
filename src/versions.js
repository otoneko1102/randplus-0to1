const fs = require('fs-extra');
const path = require('path');

const versions = fs.readdirSync(path.join(__dirname, '../randoms')).map(f => f.replace('.js', ''));

module.exports = versions;
