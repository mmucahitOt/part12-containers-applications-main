const MONGO_URL =
  process.env.MONGO_URL ||
  "mongodb://root:root1234@mongo:27017/todo-app?authSource=admin";
const REDIS_URL = process.env.REDIS_URL || "redis://:redis1234@redis:6379";

module.exports = {
  MONGO_URL,
  REDIS_URL,
};
