db.createUser({
  user: "root",
  pwd: "root1234",
  roles: [
    {
      role: "dbOwner",
      db: "todo-app",
    },
  ],
});

db.createCollection("todos");

db.todos.insert({ text: "Write code", done: true });
db.todos.insert({ text: "Learn about containers", done: false });
