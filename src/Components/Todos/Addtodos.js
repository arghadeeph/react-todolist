import React from "react";
import { useState } from "react";

export const Addtodos = (props) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const saveTodo = (e) => {
    e.preventDefault();

    if (!title || !details) {
      alert("Title or description can not be blank!");
    } else {
      props.addTodo(title, details);
    }
  };
  return (
    <div className="container">
      <h3 className="text-center my-3">Add a todo</h3>
      <form onSubmit={saveTodo}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            className="form-control"
            id="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Details
          </label>
          <input
            type="text"
            value={details}
            className="form-control"
            id="details"
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
