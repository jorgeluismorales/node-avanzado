newArray = [];

const addTodo = (tarea, callback) => {
  newArray.push(tarea);
  callback();
};

const showTodos = () => {
  newArray.forEach((tarea) => console.log(tarea));
};

const todos = () => {
  addTodo("estudiar", showTodos);
  addTodo("trabajar", showTodos);
  addTodo("hacer las compras", showTodos);
};

todos();
