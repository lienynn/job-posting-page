import React from "react";

const Filter = ({ visible, terms, onClick }) => {
  return (
    <div className={`filter-box ${!visible ? 'not-visible' : ''}`}>
      <ul className="filter-list">
        {terms && terms.map((term, i) => (
          <div className="term-box" key={i}>
            <li onClick={onClick} className="term">{term}</li> 
            <i onClick={onClick} className="fas fa-minus-square"></i>
          </div>
        ))}
      </ul>
      <a href="#" onClick={onClick} className="clear">Clear</a>
    </div>
  );
};

export default Filter;

