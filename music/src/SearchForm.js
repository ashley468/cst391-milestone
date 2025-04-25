import React, { useState } from 'react';

const SearchForm = (props) => {
  const [inputText, setInputText] = useState("");

  const handleChangeInput = (event) => {
    setInputText(event.target.value); // Update the input text state
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(inputText); // Call the onSubmit function passed in as a prop
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="search-term">Search for</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter search term here"
            value={inputText} // Controlled input
            onChange={handleChangeInput}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
