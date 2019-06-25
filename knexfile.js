// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: 'cluckr'
    },
    migrations: {
      tableName: 'migrations',
      directory: './db/migrations'
    }
  },

  
};
