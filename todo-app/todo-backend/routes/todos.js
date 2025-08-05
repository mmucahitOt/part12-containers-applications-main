const express = require("express");
const { Todo } = require("../mongo");
const router = express.Router();

/* GET todos listing. */
router.get("/", async (_, res) => {
  const todos = await Todo.find({});
  res.send(todos);
});

/* POST todo to listing. */
router.post("/", async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false,
  });
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params;
  console.log("id", id);
  req.todo = await Todo.findById(id);
  console.log("req.todo", req.todo);
  if (!req.todo) return res.sendStatus(404);

  next();
};

/* DELETE todo. */
singleRouter.delete("/", async (req, res) => {
  await req.todo.delete();
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get("/", async (req, res) => {
  res.send(req.todo);
});

/* PUT todo. */
singleRouter.put("/", async (req, res) => {
  const { text, done } = req.body;
  const updateDto = {};
  if (text) updateDto.text = text;
  if (done !== undefined) updateDto.done = done;

  const todo = await Todo.findByIdAndUpdate(req.todo._id, updateDto, {
    new: true,
  });
  res.send(todo);
});

router.use("/:id", findByIdMiddleware, singleRouter);

module.exports = router;
