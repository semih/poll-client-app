import React from "react";

const ChoiceInput = ({ item, handleChange, handleSubmit, editItem }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <div className="input-group-prepend"></div>
        <input
          type="text"
          className="form-control text-capitalize"
          placeholder="Seçenek Ekle"
          value={item}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        disabled={item ? false : true}
        className={
          editItem
            ? "btn btn-block btn-success mt-2"
            : "btn btn-block btn-dark mt-2"
        }
      >
        {editItem ? "Düzenle" : "Ekle"}
      </button>
    </form>
  );
};

export default ChoiceInput;
