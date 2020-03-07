const { getParameters } = require('./ssm');

it('should work', async () => {
  const params = `[
        {"path":"/prod/sqs/contractors_contracted", "variable":"OF_TEST"}
    ]`;
  const values = await getParameters(params);
  expect(values[0].variable).toEqual('OF_TEST');
  expect(values[0].value).not.toBeNull();
});

it('lksd', () => {
  const vsl = [
    {
      path: '/prod/sqs/contractors_contracted',
      variable: 'OF_SQS__CONTRACTORS_CONTRACTED'
    },
    {
      path: '/prod/contractors/database/connection',
      variable: 'OF_CONTRACTORS__DATABASE__CONNECTION'
    },
    {
      path: '/prod/api/database/connection',
      variable: 'OF_API__DATABASE__CONNECTION'
    },
    {
      path: '/prod/icm/database/connection',
      variable: 'OF_ICM__DATABASE__CONNECTION'
    },
    {
      path: '/prod/settlement/pii_key',
      variable: 'OF_SETTLEMENT__PII_KEY'
    },
    {
      path: '/prod/api-management/uri',
      variable: 'OF_API-MANAGEMENT__URI'
    },
    {
      path: '/prod/oauth/client_id',
      variable: 'OF_OAUTH__CLIENTID'
    },
    {
      path: '/prod/oauth/client_secret',
      variable: 'OF_OAUTH__CLIENTSECRET'
    },
    {
      path: '/prod/oauth/token_uri',
      variable: 'OF_OAUTH__TOKENURI'
    },
    {
      path: '/prod/oauth/scope',
      variable: 'OF_OAUTH__SCOPE'
    }
  ];
});
