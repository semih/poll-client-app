import React from "react";

const ChoiceInput = ({ item, handleChange, handleSubmit, editItem }) => {
  return (
    <form>
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
        className="btn-dark btn-md my-2"
        type="submit"
        onClick={handleSubmit}
        disabled={item ? false : true}
      >
        {editItem ? "Düzenle" : "Ekle"}
      </button>
    </form>
  );
};

export default ChoiceInput;
