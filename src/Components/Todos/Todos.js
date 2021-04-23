import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center my-3">Todos List</h3>
      {props.todos.length == 0
        ? "No todos to display"
        : props.todos.map((todoList) => {
            return (
              <TodoItem
                todo={todoList}
                key={todoList.id}
                onDelete={props.onDelete}
              />
            );
          })}
    </div>
  );
};
