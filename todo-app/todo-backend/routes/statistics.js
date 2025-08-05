const router = require("express").Router();
const redis = require("../redis");

router.get("/", async (req, res) => {
  const addedTodos = await redis.getAsync("added_todos");
  res.send({ addedTodos: addedTodos || 0 });
});

module.exports = router;
