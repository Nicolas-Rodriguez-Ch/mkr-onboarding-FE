import "./SumbitFrom.css";

import { useState, useEffect } from "react";

const SumbitFrom = () => {
  const handleSumbit = (event) => {
    event.preventDefault();
  };

  return (
    <form>
      <input type="text" className="text"></input>
      <button type="sumbit" className="add__button" onSubmit={handleSumbit}>
        {" "}
        <b>+</b> Agregar
      </button>
    </form>
  );
};

export default SumbitFrom;
