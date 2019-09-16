require('@babel/register');
const dotenv = require('dotenv');

dotenv.config();

const dialect = 'postgres';
const { LOGGING } = process.env;

module.exports = {
  development: {
    use_env_variable: 'DATABASE_URL',
    dialect
  },
  test: {
    use_env_variable: 'DATABASE_URL_TEST',
    logging: !!(LOGGING === 'true'),
    dialect
  },
  production: {
    use_env_variable: 'DATABASE_URL'
  }
};
