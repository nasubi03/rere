const { writeFile } = require('fs');
const { argv } = require('yargs');

const environment = argv.environment;
const isProduction = environment === 'prod';

const targetPath = isProduction
  ? `./src/environments/environment.prod.ts`
  : `./src/environments/environment.ts`;

require('dotenv').config();

const envConfigFile = `export const environment = {
    production: '${process.env.PRODUCTION}',
    AUTH0_DOMAIN: '${process.env.AUTH0_DOMAIN}',
    AUTH0_CLIENT_ID: '${process.env.AUTH0_CLIENT_ID}',
    API_URL: '${process.env.API_URL}',
    AUDIENCE: '${process.env.AUDIENCE}',
};
`;

writeFile(targetPath, envConfigFile, function (err: any) {
  if (err) {
    console.log(err);
  }
  console.log(`Wrote variables to ${targetPath}`);
});
