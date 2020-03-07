const fs = require('fs');
const core = require('@actions/core');
const { getParameters } = require('./ssm');

async function run() {
  const params = core.getInput('params', { required: true });
  const filename = core.getInput('filename', { required: true });
  const values = await getParameters(params);
  const settings = values.reduce(setVariable, {});
  fs.writeFileSync(filename, JSON.stringify(settings, null, 2));
}

function setVariable(acc, { variable, value }) {
  return { ...acc, [variable]: value };
}

module.exports = { run };

run();
