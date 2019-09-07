require('@babel/register');
const dotenv = require('dotenv');

dotenv.config();

const dialect = 'postgres';

module.exports = {
  development: {
    use_env_variable: 'DATABASE_URL',
    dialect
  },
  test: {
    use_env_variable: 'DATABASE_URL_TEST',
    dialect
  },
  production: {
    use_env_variable: 'DATABASE_URL'
  }
};
