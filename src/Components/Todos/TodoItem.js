export const TodoItem = (props) => {
  return (
    <>
      <ul className="list-group list-group">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              {props.todo.id}. {props.todo.title}
            </div>
            {props.todo.description}
          </div>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => {
              props.onDelete(props.todo);
            }}
          >
            Delete
          </button>
        </li>
      </ul>
    </>
  );
};
