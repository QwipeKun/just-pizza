import React from "react";

function Catigories({items}) {
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {
            items.map(name => (<li key={name}>{name}</li>))
        }
      </ul>
    </div>
  );
}

export default Catigories;