const happy = require('./happy')
const sad   = require('./sad')

const moods = [
  ...happy,
  ...sad
];

module.exports = moods;