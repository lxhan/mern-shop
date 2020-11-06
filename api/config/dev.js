const DB_USER = "docker";
const DB_PASS = "docker";
const DB_HOST = "localhost";
const DB_PORT = 27017;
const DB_NAME = "docker";

module.exports = {
  MONGO_URI: `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  MONGO_OPTIONS: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
};
