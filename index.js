const versions = require('./src/versions');

function random(version) {
  if (!version) version = versions.at(-1);
  if (typeof version !== 'string' && typeof version !== 'number') throw new Error('version must be string or number.');
  try {
    return require(`./randoms/v${`${version}`.replace('v', '')}.js`)();
  } catch {
    throw new Error('version not found.')
  }
}

module.exports = random;
module.exports.versions = versions;