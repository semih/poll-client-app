import React, { Component } from "react";

export default class OptionItem extends Component {
  render() {
    const { text, handleDelete, handleEdit } = this.props;
    return (
      <li className="text-capitalize d-flex justify-content-between my-2">
        {text}
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEdit}>
            <i className="fas fa-pen" />
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}
