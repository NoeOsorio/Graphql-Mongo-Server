const mongoose = require("mongoose");
require("dotenv").config();

const { DEV, DATABASE_DEV, DATABASE_PROD } = process.env;

const database_connection = DEV ? DATABASE_DEV : DATABASE_PROD;

module.exports = () => {
  mongoose.Promise = require("bluebird");
  mongoose.connect(database_connection, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
