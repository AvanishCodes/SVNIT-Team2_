/**
 * Module dependencies.
 */
const util = require("util");
const dotenv = require("dotenv");

/**
 * Add configuration to the db_config object.
 * Package the configuration details from environment variables.
 */
const db_config = {
  host: process.env.MONGO_HOST,
  user: process.env.MONGO_USER,
  password: process.env.MONGO_PASSWORD,
  database: process.env.MONGO_DATABASE,
};

/**
 * Export the configuration details.
 */
users_mongo_uri = util.format(
  "mongodb+srv://%s:%s@%s/%s",
  db_config.user,
  db_config.password,
  db_config.host,
  db_config.database
);

module.exports = { users_mongo_uri };
