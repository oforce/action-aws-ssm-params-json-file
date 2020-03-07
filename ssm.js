const aws = require('aws-sdk');

const ssm = new aws.SSM();

function getParameters(params) {
  const entries = JSON.parse(params);
  const promises = entries.map(getParameter);
  return Promise.all(promises);
}

async function getParameter({ path, variable }) {
  const { Parameter } = await ssm.getParameter({ Name: path }).promise();
  return { variable, value: Parameter.Value };
}

module.exports = { getParameters };
