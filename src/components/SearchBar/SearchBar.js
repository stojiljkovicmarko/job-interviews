import React from "react";

import "./SearchBar.css"


function SearchBar({searchText,setSearchText}) {
//   const { 
//     onSearch 
//   } = props;

  

  const handleInput = (e) => {
    const text = e.target.value
    //console.log (text)
    setSearchText(text)
  }

//   const handleEnterKeyPressed = (e) => {
//     if(e.key=== 'Enter') {
//       onSearch(searchText)
//     }
//   }

  return (
    <div>
      <div className="searchBar d-flex justify-content-end"> 
        <input
          className="form-control w-25"
          onChange={handleInput}
          type="text"
          value={searchText}
          placeholder="Search User"
        />
      </div>
    </div>
  );
}

export default SearchBar;