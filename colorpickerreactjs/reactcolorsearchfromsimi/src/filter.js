import React, { useState } from 'react';
import Boxes from './Boxes.json';
import './Filter.css';

const Filter = () => {
  const [searchInput, setSearchInput] = useState('');

  console.log(searchInput);

  return (
    <div className="wrapperContainer">
      <div className="wrapperInput">
        <input
          value={searchInput}
          type="text"
          placeholder="Search here"
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <button type="button"> Search </button>
      </div>

      <div className="wrapperBoxes">
        {Boxes.filter((valueBox) => {
          if (searchInput == '') {
            return valueBox;
          } else if (
            valueBox.color.toLowerCase().includes(searchInput.toLowerCase())
          ) {
            return valueBox;
          } else {
            return;
          }
        }).map((valueBox, key) => (
          <div className={`box ${valueBox.color}`}>
            <div className="containerWithin">
              <div className="imgBox">
                {' '}
                <img src={valueBox.logo} />
              </div>
              <div className="detailsBox">
                <p> {valueBox.love} </p>
                <span> {valueBox.emoji} </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
