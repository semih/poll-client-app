import React, { Component } from "react";
import OptionItem from "./OptionItem";
export default class OptionList extends Component {
  render() {
    const { items, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-1">
        {items.map((item) => {
          return (
            <OptionItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}
      </ul>
    );
  }
}
