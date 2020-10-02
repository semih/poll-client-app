import React from "react";
import ChoiceItem from "./ChoiceItem";
const ChoiceList = ({ items, handleDelete, handleEdit }) => {
  return (
    <ul className="list-group my-1">
      {items.map((item) => {
        return (
          <ChoiceItem
            key={item.id}
            text={item.text}
            handleDelete={() => handleDelete(item.id)}
            handleEdit={() => handleEdit(item.id)}
          />
        );
      })}
    </ul>
  );
};

export default ChoiceList;
