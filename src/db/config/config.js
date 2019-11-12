require('@babel/register');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
  },
  test: {
    url: process.env.DATABASE_URL_TEST,
  },
  production: {
    url: process.env.DATABASE_URL,
  }
};
