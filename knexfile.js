// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/classifieds_dev'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/classifieds_test'
   },
  production: {
    client: 'pg',
    connection:'postgres://xnyylznuisnnzs:62900348398f198d91b99e70b364ba1e6669073e6c74ee1248d16bfc9a2d2169@ec2-50-17-207-16.compute-1.amazonaws.com:5432/d7m6a0aeeunfrr'

  },

};
