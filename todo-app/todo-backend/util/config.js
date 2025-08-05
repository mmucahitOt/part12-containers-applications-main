const MONGO_URL = process.env.MONGO_URL || undefined;
const REDIS_URL = process.env.REDIS_URL || undefined;

module.exports = {
  MONGO_URL: "mongodb://root:root1234@localhost:3456/todo-app",
  REDIS_URL, //: '//localhost:6378'
};
